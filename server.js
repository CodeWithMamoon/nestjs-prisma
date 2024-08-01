import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json())
app.use(express.urlencoded({extended:false}))

import routes from "./routes/index.js";

app.use(mainRouter);

app.get('/', (req, res) => {
    res.send('I have listened');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
