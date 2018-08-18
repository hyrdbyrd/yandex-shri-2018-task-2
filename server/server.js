const path = require('path');
const states = require('./device.state.json');
const scripts = require('./device.script.json');
const favorites = require('./device.favorite.json');

module.exports.backend = function (app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, './../views'));

    app.locals.createFilter = function (array, mainClass, activeClass) {
        return array
        .map((e, i) => `
            <li class="${mainClass}${!i ? ' filter__option_active' : ''}">
                ${e}
            </li>
        `).join('\n');
    }

    app.get('/', (req, res) => {
        res.render('layout', {
            states,
            scripts,
            favorites
        });
    });
}