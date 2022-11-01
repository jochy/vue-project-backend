import FrenchWordsLefff from 'french-words-gender-lefff/dist/words.json' assert {type: 'json'};

export default async function (req, res) {
    res.json({
        isWord: FrenchWordsLefff[req.body.word] != null
    });
}
