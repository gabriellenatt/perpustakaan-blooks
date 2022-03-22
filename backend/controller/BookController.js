'use strict'

/**
 * Class Declaration
 * Write Static Method
 * Module Export Class
*/

const {Book} = require('../model/Book');


class BookController {
    static FindAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if(err) {
                console.log(`controller error`);
            } else {
                console.log('data', data);
            }
        });
    }
}

module.exports = {
    BookController,
};