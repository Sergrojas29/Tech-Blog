const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session')
const routes = require('./routes')
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const path = require('path')
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
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
      }),
  };


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess))

app.use(routes);


app.post( '/login', async (req, res) => {
    const {email , password} = req.body
    if(email && password)
    {
        req.session.loggedin = true
        req.session.user = email
        res.json(req.session)

    }
    else{
        res.status(403).json("no good")
    }

})
app.post( '/logout', async (req, res) => {
    if(req.session.loggedin)
    {
        req.session.loggedin = false
        res.json(req.session)

    }
    else{
        res.status(403).json("no good")
    }

})

sequelize.sync().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`http://localhost:${PORT}/`);
    })
})