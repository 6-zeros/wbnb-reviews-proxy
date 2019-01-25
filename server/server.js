const express = require('express');
// const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const proxy = require('http-proxy-middleware');

// app.use(morgan('dev'));
app.use('/rooms/:roomid', express.static('./public'));

app.use('/rooms/:id/photos', proxy({target: 'http://54.201.165.207/'}));
app.use('/api/reviews/rooms/:roomid', proxy({target: 'http://52.53.189.90:3124/'}));
app.use('/api/ratings/rooms/:roomid', proxy({target: 'http://52.53.189.90:3124/'}));
app.use('/api/rooms/:id', proxy({target: 'http://18.144.24.17:8080/'}));
app.use('/:id/suggestions', proxy({target: 'http://13.57.206.20:3123/'}));


app.listen(port, () => {
  console.log(`server running at: htttp://localhost:${port}`);
});