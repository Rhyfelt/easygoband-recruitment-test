"use strict"
const express = require('express');

const getData = require('../data/data');
const router = express.Router();

const filter = (paramName,paramValue,data) => {
    paramValue = paramValue.toLowerCase()
    let filteredData = data;
    if(paramValue != 'todos' && paramValue != ''){
        filteredData = data.filter((item) => {
            let ifParamMatchWithSearch = item[paramName].toLowerCase().includes(paramValue)
            if(ifParamMatchWithSearch) return item
        })
    }
    return filteredData
}

router.post('/',(req,res) => {

    const data = getData()
    const { access_group_name, name } = req.body

    data.then((data) => {
        
        const filteredByAccessGroupName = filter("access_group_name",access_group_name, data)
        const filteredData = filter("name", name, filteredByAccessGroupName)
        
        res.json({data:filteredData})
    })
   
    

})



module.exports = router;