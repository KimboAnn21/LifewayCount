const express = require("express");
const PORT = 3000;

const app = express(); 

app.use(express.json());

//key will be the id, value: message
let messages = {};
let count = 0;
app.post("/wordcount", (req, res) => {
    console.log(req.body);

    if(messages[req.body.id] !== undefined) {
        res.send(`ID: ${req.body.id} is already being used.`);
          return;
    }

    messages[req.body.id] = req.body.message;

    const words = req.body.message.split(" ");
    const wordCount = words.length;
    count += wordCount;

    console.log(words);

    res.json({
        count: count
    });
});
app.get('/', function(req, res) {
    res.json(count);

})
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})
