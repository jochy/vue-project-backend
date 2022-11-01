import express from "express";
import cors from "cors";
import FrenchWordsLefff from 'french-words-gender-lefff/dist/words.json' assert {type: 'json'};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/new-game', async function (req, res) {
    let words = Object.keys(FrenchWordsLefff)
        // Keep words with 5 chars
        .filter(it => it.length === 5)
        // Remove words with french chars
        .filter(it => it.split('').filter(i => !alphabet.includes(i)).length === 0);

    res.json({
        word: randomElement(words)
    });
});

app.post('/is-word', async function(req, res) {
   res.json({
       isWord: FrenchWordsLefff[req.body.word] != null
   });
});

app.listen(9001);

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}