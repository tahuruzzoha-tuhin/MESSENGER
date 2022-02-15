const express = require('express');
const databaseConnect = require('./config/database');
const app = express();
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute')
const messengerRouter = require('./routes/messengerRoute')

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

dotenv.config({
    path: 'backend/config/config.env'
})
const PORT = process.env.PORT || 5000

app.use(bodyParser());
app.use(cookieParser());

app.use('/api/messenger', authRouter)
app.use('/api/messenger', messengerRouter)


app.get('/', (req, res) => {
    res.send('OKKKKKK')
})

databaseConnect();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})