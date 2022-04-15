const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/' , (req,res) =>{
    res.send("");
})

app.post('/bfhl', (req,res) =>{
    var a = {}
    const body = req.body;
    const user_id = 'deepaksharma_02072002';
    const email = "deepaksharmacs19@acropolis.in";
    const roll_number = "0827CS191078";
    var numbers = [];
    var alphabets = [];
    var is_success = true;
    numbers_length = 0;
    alphabets_length = 0;
    for(i=0; i<body.data.length; i++){
        if(isNaN(parseInt(body.data[i]))){
            alphabets[alphabets_length++] = body.data[i];
        }
        else{
            numbers[numbers_length++] = parseInt(body.data[i]);
        }
    }
    if(is_success){
        a = {
            "is_success" : is_success,
            "user_id": user_id,
            "email" : email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets" : alphabets
        }
    }
    else{
        a = {
            "is_success" : is_success,
            "user_id": user_id,
            "email" : email,
            "roll_number": roll_number            
        }   
    }
    res.json(a);
});

var port = process.env.PORT || '3000';

app.listen(port);