const express = require("express");

const app = express();

const port = 3000;
app.get('/', (req, res) => {
    res.send("Welcome to Trustybytes server");
});

app.use('/api/vault', require("./routes/api/vault"))

app.listen(port, () => {
    console.log(`server running on the port ${port} `)
})