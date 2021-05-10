let header1 = document.querySelector('body > header');
let body = document.body;
body.insertAdjacentElement('afterbegin', header1);

let h1 = document.querySelector('h1');
header1.insertAdjacentElement('afterbegin', h1);

let [figcap1, figcap2] = document.querySelectorAll('figcaption');
[figcap1.textContent, figcap2.textContent] = [figcap2.textContent, figcap1.textContent];

let chinFig = document.querySelector('section').lastElementChild;
let mopFig = chinFig.previousElementSibling;
let article = body.querySelector('article');
article.appendChild(chinFig);
article.appendChild(mopFig);