require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// setting view engine from handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', err => console.log(err));

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(`home`, {
        name: 'Fenner González',
        title: 'Web Server with NodeJs and Express'
    })
})
app.get('/generic', (req, res) => {
    res.render(`generic`, {
        name: 'Fenner González',
        title: 'Web Server with NodeJs and Express'
    })
})

app.get('/elements', (req, res) => {
    res.render(`elements`, {
        name: 'Fenner González',
        title: 'Web Server with NodeJs and Express'
    })
})

app.get('*', (req, res) => {
    res.render(`404`, {
        name: 'Fenner González',
        title: 'Web Server with NodeJs and Express'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})