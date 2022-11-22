import FrenchWordsLefff from 'french-words-gender-lefff/dist/words.json' assert {type: 'json'};
import NextCors from 'nextjs-cors';

export default async function (req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    res.json({
        isWord: FrenchWordsLefff[req.body.word] != null
    });
}
