'use strict'

/**
 * Class Declaration
 * Write Static Method
 * Module Export Class
*/
class Controller {
    static Homepage(req, res) {
        res.send('Hai ini controller');
    }
}

module.exports = {
    Controller
};