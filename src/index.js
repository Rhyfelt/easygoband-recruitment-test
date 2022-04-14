const express = require('express');
const filters = require('./routes/filtersRouter')
const details = require('./routes/detailsRouter')
const groupsBy = require('./routes/groupsByRouter')
const app = express();
const PORT = 3000;

app.use(express.json())
app.use("/filter",filters)
app.use("/details",details)
app.use("/groupby",groupsBy)






app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
 