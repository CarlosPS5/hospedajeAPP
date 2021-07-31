const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/tfm')
.then((db) => console.log('DB Connected Sucessfully!'))
.catch((err) => console.log('Error during entablishing connection!'))
