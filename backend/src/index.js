require("dotenv").config();
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

const cors = require("cors");
const connection = require("./db");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { request } = require("express");
const { sendEmail } = require("./sendEmail");
const e = require("express");

const client = new MongoClient(
  "mongodb+srv://silvia:parola@cluster0.ngjt6.mongodb.net/CoffeeHouse?retryWrites=true&w=majority"
);

app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: "*",
    preflightContinue: true,
  })
);

let usersCollection;
let orderHistoryCollection;
let favProductsCollection;

// Conectare la baza de date
async function main() {
  const dbName = "CoffeeHouse";
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  usersCollection = db.collection("users");
  orderHistoryCollection = db.collection("orderHistory");
  favProductsCollection = db.collection("favProducts");
  // the following code examples can be pasted here...
  return "done.";
}

main().then(console.log).catch(console.error);

app.use(express.json());

// Endpoint pentru creare cont nou
app.post("/api/users", async (req, res) => {
  const userName = req.body.username;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // Cauta in baza de date utilizatorul
  const userInDatabase = await usersCollection.findOne({
    email: userEmail,
  });

  // Daca exista deja un utilizator in baza de date atunci da eroare
  if (userInDatabase) {
    res.status(405).send("Email is already taken.");
  } else {
    bcrypt.hash(userPassword, 10, async function (err, hash) {
      const user = {
        name: userName,
        email: userEmail,
        password: hash,
      };

      await usersCollection.insertOne(user);

      res.status(201).send();
    });
  }
});

// Endpoint pentru logare
app.post("/api/auth", async function (req, res) {
  const user = await usersCollection.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(404).send("User not found.");
  }

  bcrypt.compare(
    req.body.password,
    user.password,
    function (err, responseCompare) {
      if (responseCompare) {
        const token = jwt.sign({ user }, "my_secret_key");

        return res.json({ token: token, user: user });
      } else {
        return res.status(404).send("Invalid Password");
      }
    }
  );
});

// TODO: produse din baza de date
app.get("/api/products", (req, res) => {
  res.status(200).send([1, 2, 3]);
});

app.post("/api/order", async (req, res) => {
  console.log("verificare");
  const { basicInfo } = req.body;
  const { cartItems } = req.body;
  const { email } = req.body;

  sendEmail({ basicInfo, cartItems });

  await orderHistoryCollection.insertOne({
    email,
    cartItems,
    orderDate: Date.now(),
  });

  res.status(200).send([1, 2, 3]);
});

app.post("/api/get-fav-products", async (req, res) => {
  const { email } = req.body;

  const favProducts = await favProductsCollection.find({ email }).toArray();

  res.status(200).send(favProducts.map((favProduct) => favProduct.productId));
});

app.post("/api/add-fav-products", async (req, res) => {
  const { productId } = req.body;
  const { email } = req.body;

  await favProductsCollection.insertOne({ productId, email });

  res.status(200).send();
});

app.post("/api/remove-fav-products", async (req, res) => {
  const { productId } = req.body;
  const { email } = req.body;

  await favProductsCollection.deleteOne({ productId, email });

  res.status(200).send();
});

app.post("/api/order-history", async (req, res) => {
  const { email } = req.body;

  const orderHistory = await orderHistoryCollection.find({ email }).toArray();

  res.status(200).send(orderHistory);
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
