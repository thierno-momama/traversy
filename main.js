// Book Class: Represents a Book
class Book {

    constructor(title, author, isbn){
        this.title = title;
        this.author =   author;
        this.isbn = isbn;
    }
}
// Store Class: Handles Storage
class Store {

    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{  
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;

    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}
// UI tore Class: Handles Class: Handle UI Tasks
class UI {

    static displayBook(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '343434'
            },
            {
                title: 'Book Two',
                author: 'Johnnette Doe',
                isbn: '343434'
            },
            {
                title: 'Book Three',
                author: 'Dash Doe',
                isbn: '343434'
            }
        ];

        // const books = StoredBooks;
        const books = Store.getBooks();
        books.forEach((book) => {
            UI.addBookToList(book);
        });

    }

    static addBookToList(book){
       const list = document.querySelector('#book-list');
       const row = document.createElement('tr');
       row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
       `; 

       list.appendChild(row);
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    static clearFields(){
        document.querySelector('#title').value  = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value  = '';
    }
    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBook);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert("Please fill in an fileds ", "danger");
    }else{
        // Instantiation Book
        const book = new Book(title, author, isbn);
    
        UI.addBookToList(book);
        //Store Add Book
        Store.addBook(book);
        console.log(Store.getBooks());
        // success message
        UI.showAlert('Book Add', 'success');
        // clean Fields
        UI.clearFields();
    }


});


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // delete book form ui
    UI.deleteBook(e.target);
    // delete book form storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // remove
    UI.showAlert('Book Removed', 'warning');
});