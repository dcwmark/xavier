/**
 * /app/server/server.js
**/

let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    mongoose = require('mongoose'),
    users = require('./api/models/userModel.js');
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Xavier');
// require('./api/models/userModel.js');
// users = mongoose.model('users'),

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    
    // Website to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');

    // Request headers to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

});

app.use(express.static(__dirname));

app.get('/users/email/:emailAddr', function(req, res) {
    console.log('****** server/emailAdder::', req.params.emailAddr);
    
    let emailAddr = req.params.emailAddr;

    return new Promise( (resolve, reject)  => {
        console.log('email.promise ...');

        users.findOne({
            emailAddr: emailAddr
        }, (err, doc) => {
            if ( err ) {
                console.log('findOne::err');

                res.send(err);
            }
            if ( doc ) {
                console.log('findOne::doc', doc);
                
                res.json(doc);
            }
        });
    });
});

app.post('/users', (req, res) => {
    let newUser = new users(req.body);

    newUser.save(req.body, (err, doc) => {
        if ( err ) {
            res.send(err);
        }
        res.json(doc);
    });
});

app.listen(port);

console.log('Xavier RESTful API server started on: ' + port);
