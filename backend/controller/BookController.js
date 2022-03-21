'use strict'

/**
 * Class Declaration
 * Write Static Method
 * Module Export Class
*/
class BookController {
    static FindAllBooks(req, res) {
        res.send('Hai ini books controller');
    }
}

module.exports = {
    BookController
};