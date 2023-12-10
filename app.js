const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Wellcome to the Home page');
})

app.listen(3000, () => {
    console.log('Hello: server is listen at port 3000');
})