'use strict'

/**
 * Initialization Express
 * Require Book Controller
 * Main Endpoint
 * Module Exports
*/

// Initialization
const express = require('express');
const bookRouter = express.Router();

// Controller
const {BookController} = require('../controller/BookController');
const { Book } = require('../model/Book');

// Endpoint : Find All Books
bookRouter.get('/', BookController.FindAllBooks);

// Endpoint : Book by ID
bookRouter.get('/:id', BookController.FindBookById);

// Endopoint :Post Book By Id
bookRouter.post('/:id', BookController)

// Endpoint : Post Book
bookRouter.post('/post', BookController.AddNewBook);

// export module
module.exports = { bookRouter };