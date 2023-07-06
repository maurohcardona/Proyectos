import express from "express";

const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
    res.send("index")
})

homeRoutes.get("/index", (req, res) => {
    res.send("indexxxx")
})

export default homeRoutes;
