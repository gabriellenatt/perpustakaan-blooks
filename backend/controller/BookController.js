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
                res.json({
                    title: 'API Backend toko buku',
                    message: 'Koleksi Buku',
                    status: '200',
                    data
                });
            }
        });
    }

    static FindBookByIdd(req, res) {
        // console.log('ini id', req.params.id);
        const { id } = req.params;  
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    title: 'API Backend toko buku',
                    message: 'Koleksi Buku',
                    status: '200',
                    data
                });
            }
        });
    }
}

module.exports = {
    BookController,
};