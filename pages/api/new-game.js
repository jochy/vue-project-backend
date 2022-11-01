import FrenchWordsLefff from 'french-words-gender-lefff/dist/words.json' assert {type: 'json'};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default async function (req, res) {
    let words = Object.keys(FrenchWordsLefff)
        // Keep words with 5 chars
        .filter(it => it.length === 5)
        // Remove words with french chars
        .filter(it => it.split('').filter(i => !alphabet.includes(i)).length === 0);

    res.json({
        word: randomElement(words)
    });
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}