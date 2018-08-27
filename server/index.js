const path = require('path');
const states = require('./device.state.json');
const scripts = require('./device.script.json');
const favorites = require('./device.favorite.json');

module.exports.backend = function (app) {
    app
        .set('view engine', 'ejs')
        .set('views', path.join(__dirname, './../views'))
        .locals.createFilter = function (array, mainClass, activeClass='filter__option_active') {
            return array
                .map((e, i) => `
                    <option class="${mainClass}${!i ?  ' ' + activeClass : ''}">
                        ${e}
                    </option>
                `).join('\n');
        };

    app.get('/', (req, res) => {
        res.render('layout', {
            states,
            scripts,
            favorites
        });
    });
}