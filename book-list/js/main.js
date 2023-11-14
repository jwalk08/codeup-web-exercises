import {books} from "../data/books.js";

const renderBookElement = book => {
    const bookElement = document.createElement('tr');
    bookElement.innerHTML = `
        <td>${book.title}</td>
       <td>${book.author}</td>
        <td>${book.categories}</td>
        <td>${book.isbn10}</td>
        <td>${book.published_year}</td>
        <td>
        <button class="btn btn-sm btn-danger">data-delete>Delete</button>
         </td>
    `;
    const deleteBtn = bookElement.querySelector("button[data-delete]");
    deleteBtn.addEventListener('click', e => {
        bookElement.remove();
    });
    document.querySelector('#book-list').appendChild(bookElement);
};
// MAIN
(() => {
    for (let book of books) {
        renderBookElement(book);

    }
})();
