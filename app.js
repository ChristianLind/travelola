const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
let db

const PORT = 3000;

let url = `mongodb://localhost:27017/Travelling`;

mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        db = client.db()
        app.listen(PORT, () => {
            console.log(`Node.js App running on port ${PORT}...`);
        })
    }
)
app.use(express.json());

app.get('/', function (req, res) {
    db.collection('DestinationColl')
        .find()
        .toArray(function (err, items) {
            res.send(items)
        })
})

app.post('/create', function (req, res) {
    db.collection('DestinationColl').insertOne({ text: req.body.text }, function (
        err,
        info
    ) {
        res.json(info.ops[0])
    })
})

app.put('/update', function (req, res) {
    db.collection('DestinationColl').findOneAndUpdate({ 
        _id: new mongodb.ObjectId(req.body.id) 
    }, { 
        $set: { text: req.body.text } 
    },
        function () {
            res.send('Success updated!')
        }
    )
})

app.delete('/delete', function (req, res) {
    db.collection('DestinationColl').deleteOne({ 
        _id: new mongodb.ObjectId(req.body.id) 
    },
        function () {
            res.send('Successfully deleted!')
        }
    )
})