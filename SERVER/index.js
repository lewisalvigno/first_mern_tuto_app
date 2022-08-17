const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://lewisXalvin:andre2200@cluster0.qhfqrry.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {

    UserModel.find({}, (err, data) => {

        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }

    });

  })

app.post("/createUser", async (req, res) => {
  
    const user = req.body;
    const newUser = new UserModel(user);

    await newUser.save();
    
    res.json(newUser);
    

})


app.listen(3001, () => {
  console.log('Server runs perfectly');
});