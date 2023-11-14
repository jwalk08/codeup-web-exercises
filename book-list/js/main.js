import {books} from "../data/books.js";

//creating node adding event listener
const renderBookElement = book => {
    const bookElement = document.createElement('tr');
    bookElement.innerHTML = `
        <td>${book.title}</td>
       <td>${book.authors}</td>
        <td>${book.categories}</td>
        <td>${book.isbn10}</td>
        <td>${book.published_year}</td>
        <td>
        <button class="btn btn-sm btn-danger" data-delete>Delete</button>
         </td>
    `;
    const deleteBtn = bookElement.querySelector("button[data-delete]");
    deleteBtn.addEventListener("click", (e) => {
        bookElement.remove();
    });
    document.querySelector('#book-list').appendChild(bookElement);
};

const updateBooks = books => {
    const categoryInput = document.querySelector('#category');
    const categoryValue = categoryInput.value;
    const searchInput = document.querySelector('#search');
    const searchValue = searchInput.value;
};
// MAIN
(() => {
    for (let book of books) {
        renderBookElement(book);

    }
})();
