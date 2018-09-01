require('dotenv').config();
const path       = require('path');
const express    = require('express');
const bodyParser = require('body-parser');
const environmentDecorator = require('./environment');

// start express
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// switch the middleware based on the environment
environmentDecorator[app.get('env')](app);

// ROUTE HANDLERS
app.use('/auth/login', (req, res) => {
  // console.log(req.body);
  res.json({
    isLoggedIn: true,
    token:      0x3489,
  });
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});


// START SERVER
app.listen(app.get('port'), () => {
  console.log(`Server up and listening on port ${app.get('port')}, in ${app.get('env')} mode.`);
}).on('error', console.error);

module.exports = app;
