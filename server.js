const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res, next) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     next();
// });

app.get('/', (req, res, next) => {
    console.log(`FUCK IT`);
})

app.listen(3000);