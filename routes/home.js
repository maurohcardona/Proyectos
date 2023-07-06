import express from "express";

const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
    res.send("index")
})

homeRoutes.get("/indexxxx", (req, res) => {
    res.send("index")
})

homeRoutes.get("/indexxxxxx", (req, res) => {
    res.send("index")
})

export default homeRoutes;
