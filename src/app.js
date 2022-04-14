const express = require('express')
const app = express()
const filters = require('./routes/filtersRouter')
const details = require('./routes/detailsRouter')
const groupsBy = require('./routes/groupsByRouter')

app.use(express.json())
app.use("/filter",filters)
app.use("/details",details)
app.use("/groupby",groupsBy)

module.exports = app