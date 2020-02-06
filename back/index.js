const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

app.post('/encode', (req, res) => {
    const message = {
        "encoded": Vigenere.Cipher(req.body.password).crypt(req.body.message)
    };
    const data = JSON.stringify(message);

    res.send(data);
});

app.post('/decode', (req, res) => {
    const message = {
        "decoded": Vigenere.Decipher(req.body.password).crypt(req.body.message)
    };
    const data = JSON.stringify(message);

    res.send(data);
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});