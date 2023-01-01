const express = require('express');

const webApp1 = express();
webApp1.listen(3000);
webApp1.set('view engine', 'ejs'); 

const webApp2 = express();
webApp2.set('view engine', 'ejs'); 
webApp2.listen(3001);

//Web Application 1
webApp1.get('/', (req, res) => {
    res.render("app1/app1");
})


//Web Application 2
webApp2.get('/', (req, res) => {

    //res.set('X-Frame-Options', 'deny');
    //Error in browser console: Refused to display 'http://localhost:3001/' in a frame because it set 'X-Frame-Options' to 'deny'.

    //res.set('X-Frame-Options', 'sameorigin');
    //Error in browser console: refused to display 'http://localhost:3001/' in a frame because it set 'X-Frame-Options' to 'sameorigin


    //res.set('Content-Security-Policy', "frame-ancestors 'none'");
    //Error in browser console: Refused to frame 'http://localhost:3001/' because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'none'".
    
    res.set('Content-Security-Policy', "frame-ancestors 'self'");
    //Error in browser console: Refused to frame 'http://localhost:3001/' because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'self'".

    //res.set('Content-Security-Policy', "frame-ancestors 'self' http://localhost:30011/");

    res.render("app2/app2");
})
