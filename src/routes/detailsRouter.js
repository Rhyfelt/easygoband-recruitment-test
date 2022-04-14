"use strict"
const express = require('express');

const getData = require('../data/data');
const router = express.Router();

router.get('/:id',(req,res) => {
    const { id } = req.params
    const data = getData()

    data.then((data) => {
        const itemById = data.filter((item) => {
            return item.id == id
        })
        res.status(200).json({data: itemById})
    })
})


module.exports = router;