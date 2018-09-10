const path = require('path');
const info = require('./gen');

module.exports.backend = function (app) {
    app
        .set('view engine', 'pug')
        .set('views', path.join(__dirname, './../views'))
        .get('/', (req, res) => {
            res.render('layout', {
                info
            });
        });
};