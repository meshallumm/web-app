
const admin = require('firebase-admin');
const serviceAccount = require("./privateKey2.json");
//Note: I was unable to open a new databse at either of the existing projects, something to do with owner restrictions. However, when you have a database, generating
//Downloading the appropriate JSON file is completely technical.  
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
let firestore = admin.firestore();

//NodeJS
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())



//Views functions

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    let text=req.body.Fname
    let text2=req.body.Sname
    firestore.collection("Test1").add({
        name: text,
        surname: text2 
    })
})


app.listen(3000, function(){
    console.log("App is running at port 3000!")
})
