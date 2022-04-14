"use strict"
const express = require('express');
const getData = require('../data/data');
const router = express.Router();

const groupBy = (key, arr) => {
    if(key == "sessions"){
        return arr.reduce(
            (cache, item) => {
                const property = item[key][0]['name']
                if(property in cache){
                    return {...cache,[property]:cache[property].concat(item)}
                }
                return {...cache, [property]:[item]}
            },
            {}
        )
    }
    return arr.reduce(
        (cache, item) => {
            const property = item[key]
            if(property in cache){
                return {...cache,[property]:cache[property].concat(item)}
            }
            return {...cache, [property]:[item]}
        },
        {}
    )
}

router.get('/:group', (req,res) => {
    let groupedData = null;
    const { group } = req.params
    const data = getData()
    
    data.then((data) => {
        groupedData = groupBy(group,data)
        res.status(200).json({data:groupedData})
    })
})


module.exports = router