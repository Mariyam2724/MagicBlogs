const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter')
const utilRouter = require('./routers/util');
const blogRouter = require('./routers/blogRouter');
const cors = require('cors');
const { PORT } = require('./config');

const app = express();


app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.use('/user', userRouter); 1
app.use('/video', videoRouter);
app.use('/util', utilRouter);
app.use('/blog', blogRouter);
app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));