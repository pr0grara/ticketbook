const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('ticketbook home').end();
})

app.listen(PORT, () => {
    console.log(`ticketbook listening on port ${PORT}`)
});