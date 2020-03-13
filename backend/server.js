const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const giderlerRouter = require('./routes/giderler');
const cekicilerRouter = require('./routes/cekiciler');

app.use('/giderler', giderlerRouter);
app.use('/cekiciler', cekicilerRouter);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static( 'build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(_dirname, 'public', 'build', 'index.html')); //relative path
//     });
// }

app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
});