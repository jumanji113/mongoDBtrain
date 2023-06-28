import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hssssello');
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign(
        {
            email: req.body.email,
            fillName: 'ALex Alex',
        },
        'secret123',
    );

    res.json({
        success: true,
        token,
    });
});

app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('server ok!');
});