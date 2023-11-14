// parks.js

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("changeColorBtn").addEventListener("click", () => {
        let parkLists = document.querySelectorAll(".park-list");

        parkLists.forEach((parkList) => {
            let lastLi = parkList.lastElementChild;
            lastLi.style.backgroundColor = "yellow";
        });
    });
    
    document.querySelector(".faq-section").addEventListener("click", (event) => {
        let target = event.target;

        if (target.tagName === "H3") {
            let ul = target.nextElementSibling;
            let lis = ul.children;
            Array.from(lis).forEach((li) => {
                li.style.fontWeight = "bold";
            });
        }

        if (target.tagName === "LI") {
            let parentUl = target.parentElement;
            let firstLi = parentUl.firstElementChild;
            firstLi.style.color = "blue";
        }
    });
});


