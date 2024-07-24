import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var arr = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port , (req , res) =>{
    console.log(`Listening on port ${port}.`);
});

app.get("/" , (req , res) => {
    res.render("index.ejs");
});

app.post("/create" , (req , res) => {
    var data = req.body["createpost"];
    res.render("index.ejs" , {
        ppost: data,
    })
});

