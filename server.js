const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('landingpage')
});
app.get('/login', (req, res) =>{
    res.render('login');
})
app.get('/register', (req, res) =>{
    res.render('register');
})
app.get('/about', (req, res) =>{
    res.render('about-us', {
        currentYear : new Date().getFullYear()
    });
})
app.get('/contact', (req, res) =>{
    res.render('contact-us');
})
app.get('/account-manager', (req, res) =>{
    res.render('account-manager');
})
app.get('/profile', (req, res) =>{
    res.render('profile', {page: 'Profile'});
})
app.get('/edit-profile', (req, res) =>{
    res.render('edit-profile', {page: 'Edit Profile'});
});
app.get('/dashboard', (req, res) =>{
    res.render('dashboard', {page: 'Dashboard'});
})
app.get('/notes', (req, res) =>{
    res.render('notes', {page: 'Notes'});
})
app.get('/calendar', (req, res) =>{
    res.render('calendar', {page: 'Calendar'});
})
app.get('/challenge', (req, res) =>{
    res.render('challenge', {page: 'The Challenge '});
})
app.get('/todos', (req, res) =>{
    res.render('todos', {page: 'Todos'});
});
app.listen(3000);