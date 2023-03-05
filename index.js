const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views')) ;
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList = [
    {
        name: 'Akash',
        phone: "654827563847"

    },

    {
        name: 'Akshat',
        phone: "6378979384"

    },

    {
        name: 'Yatin',
        phone: "5693497653"

    }
];

app.get('/', function(req, res) {
    return res.render('home', {
        'title': 'My Contacts List',
        'para': 'Aur betichod',
        'contact_list': contactList
    });
});

app.get('/practice', function(req, res) {

    return res.render('practice');

});

app.post('/create-contact', function(req, res) {
    console.log(req.body);
    contactList.push({'name':req.body.name, 'phone':req.body.phone});
    return res.redirect('back');

});







 app.listen(port, function(err){
    if(err) console.log("error in running app", err);
    else console.log("Server is up and running on port " + port);

 });

