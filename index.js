const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url} from ${req.ip}`);
    req.user = "Hawara"
    next();
});

app.get("/data", (req, res) => {
    res.end("Data");
    //Todo Read Data from Jason file
    //res.end(<ul><li>Data From Jason File</li></ul>)
});

app.use(express.static('public'));

app.use((req, res) => {
    if (req.user === "Hawara"){
        res.end("Welcome back Hawara");
    }
    res.statusCode = 404;
    res.end("File not found");
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})
