import express from "express";

const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
    res.send("index")
})

export default homeRoutes;
