
const admin = require('firebase-admin');

//To handle
const serviceAccount = require("./privateKey2.json");
//Note: I was unable to open a new databse at either of the existing projects, something to do with owner restrictions. However, when you have a database, generating
//Downloading the appropriate JSON file is completely technical.  
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Get the database
const db = admin.firestore();

// Exports
module.exports = { admin, db };

