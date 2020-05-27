const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(result => {
        const hbsObject = {
            burgers: result
        };

        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        const hbsObject = {
            burgers: result
        };

        res.render("index", hbsObject);
    });
});

router.put("/api/burger", (req, res) => {
    const condition = req.body.id;
    burger.updateOne(condition, result => {
        const hbsObject = {
            burgers: result
        };

        res.render("index", hbsObject);
    });
});

module.exports = router;