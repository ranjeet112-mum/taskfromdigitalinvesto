// To run the server locally(@8000) please run the command "npm start", database is stored on atlas 

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('./../db/mongoose');
const registeration = require('./../db/model/registerations');

app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.route('/')
.get((req,res) => {
    res.send("hello there!");
})


app.route('/api/user/signup')
.post((req,res) => {
    
    const user = registeration(req.body);
    user.save().then((user) =>{
        if(user){
            res.send({status:"success"})
        } 
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status:"failure"})
    })
    

    
})

app.route('/api/user/login')
.post((req,res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    registeration.findOne({email , password}, function(err,user) {
        if(err){
            res.statusCode(500);
        }
        if(user) {
            const userJson = {
                name : user.name,
                
                email: user.email,
                phoneNo: user.phoneNo
            }
            let token = jwt.sign(userJson,"qwerty");
            res.cookie('authenticationToken',token);
            res.send('loggedd in')
        } else {
            res.status(404).send("not found")
        }
    })    
})

app.route('/api/user/details')
.get((req,res) => {
    
    if(!req.cookies.authenticationToken) {
        res.send('login first')
    } else {
        jwt.verify(req.cookies.authenticationToken,'qwerty',(err,decode) => {
            if(err){
                res.send('Jwt token did not match please login again');
            } else if(decode) {
                res.send({name:decode.name,emailId : decode.email});
            }
        })
    }

        
})

app.route('/api/user/logout')
.get((req,res) =>{
    if(req.cookies.authenticationToken){
        res.clearCookie('authenticationToken');
        res.send("logged out");
    } else{
    res.send('ok')
}
})


app.listen(PORT);
