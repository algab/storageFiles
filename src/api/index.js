const bucket = require('./modules/bucket');
const folder = require('./modules/folder');
const logger = require('./modules/logger');
const login = require('./modules/login');
const manager = require('./modules/manager');
const object = require('./modules/object');
const user = require('./modules/user');
const root = require('./modules/root');

const database = require('../config/database');

module.exports = async (app) => {
    await database.sync();
    app.use(`${app.get('version')}/buckets`, bucket(app));
    app.use(`${app.get('version')}/folders`, folder(app));
    app.use(`${app.get('version')}/logs`, logger(app));
    app.use(`${app.get('version')}/login`, login(app));
    app.use(`${app.get('version')}/managers`, manager(app));
    app.use(`${app.get('version')}/objects`, object(app));
    app.use(`${app.get('version')}/users`, user(app));
    app.use('', root(app));
};