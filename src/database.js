const mongo = require('mongoose');

mongo.connect('mongodb://localhost/ecosport', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Db is connected.'))
    .catch(err => console.log(err));

module.exports = mongo;