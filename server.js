const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes')



const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001

// var session = require('express-session')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`http://localhost:${PORT}/`);
    })
})