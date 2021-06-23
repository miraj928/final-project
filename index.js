const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//app.use(express.static("public"));//
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.post("/", urlencodedParser, (req, res) => {
    try {
    console.log(req.body);
        let username = req.body.loginName;
        let password = req.body.passcode;
        
        if (username && password) {
            console.log(username);
            console.log(password);
            
            Mongoclient.connect(url, function (err, client) {
                if (err) {
                    client.close();
                    return res.status(500).send("error");
                }
                const db = client.db("username");
                const collection = db.collection("customers")
                
                const doc = { name: username, pin: password };

                collection.insertOne(doc, (err, result) => {
                    if (err) {
                        client.close();
                        return res.status(500).send("error");
                    }
                    client.close();
                    console.log(result.ops[0].id);
                    const id = result.ops[0].id;
                    return res.status(200).send(id);
                });
            });
        } else {
            return res.status(400).send("bad request");
        }
    } catch (ex) {
        return res.status(500).send("error");
    }
});
app.get("/", (req, res) =>{
    return res.status(200).send("Success")
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
