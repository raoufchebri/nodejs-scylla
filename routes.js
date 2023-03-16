const getHeroes = require('./controller');

const routes = (app) => {
    app.route('/heroes').get((req, res, next) => {
        console.log(`Request form: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getHeroes);
};

module.exports = routes;
