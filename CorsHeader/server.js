const express = require('express'); 
const app1 = express(); 
app1.set('port', 3002);
app1.listen(app1.get('port'));
app1.set('view engine', 'ejs'); 

app1.get('/', (req, res) => {
    res.render("app1", {name: 'Abuthakir'});
})



const app2 = express();
const cors = require('cors'); 
app2.set('port', 3003);
app2.listen(app2.get('port'));
app2.set('view engine', 'ejs'); 
app2.use(cors({
    origin: 'http://localhost:3002',
    //methods: ['GET,POST,PUT'],
    credentials: true
}))

app2.get('/', (req, res) => {
    res.render("app2", {name: 'Abuthakir'});
})

app2.post('/data', (req, res) => {
    res.json({name: 'Abuthakir', country: 'India'})
})