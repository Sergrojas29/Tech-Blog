const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./routes');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001



const sess = {
    secret: 'ServerSession Secert',
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false,
        httpOnly: true,

    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);
app.use(require('./routes/home-routes'))



sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}/`);
    })
})