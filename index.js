
const express = require('express');
const app = express();

    app.get('/hello', (req, res) => {
        console.log('hello from the other side');
        res.send('hello world');
    })

app.listen(3000)
console.log('server online!')


