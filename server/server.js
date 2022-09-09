const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/KiddoCare', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


app.use(require('./routes'));

mongoose.set('debug', true);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});