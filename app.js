const express = require("express");
const path = require("path");

const app = express();

//const publicFolderPath = path.resolve(__dirname, "./public");
//app.use(express.static(publicFolderPath));

app.listen(3000, () => {
    console.log("Mercado Liebre");
});

//app.get("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "./views/home.html"));
//});
//app.get("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "./views/register.html"));
//});

//Metodos de HTTP
// - GET
// - POST
// - PUT

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});
