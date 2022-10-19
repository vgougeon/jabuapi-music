import express from 'express';
import API from 'jabuapi';

const app = express()
const api = new API({
    app,
    force: true,
    root: __dirname + '/data'
})
api.init().then(() => {
    app.listen(3000, () => {
    })
})
