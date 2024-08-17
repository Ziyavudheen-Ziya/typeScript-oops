import express from 'express';

import libraryRoutes from './routes/librararyRoutes'

const app = express()

app.set('view engine','ejs')
app.set('views','./src/views')

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(libraryRoutes)

export default app;