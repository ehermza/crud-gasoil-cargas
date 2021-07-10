const mongo = require('mongoose');

mongo.connect('mongodb://localhost/ad530pr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Db is connected.'))
    .catch(err => console.log(err));

module.exports = mongo;