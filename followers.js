
const axios = require('axios');
const baseURL = 'https://api.github.com';
const api = axios.create({baseURL});
const express = require('express');
const app = express();
const params = {q: axios};

app.get('/followers/:id', (req, res) => {
    var url = '/users/' + req.params.id + '/followers';
    api.get(url, {params}).then(ret => res.send(ret.data))
                          .catch(err => res.status(500).send(err.response.data))
})

app.listen(3000)
console.log('servidor online')





