const ol = document.querySelector('ol');
const ul = document.createElement('ul');
ul.setAttribute('class', 'listado');
const cont = ol.children.length;

for (let i = 0; i < cont; i++) {
    ul.append(ol.children[0])
}


ol.remove(ol);

document.body.appendChild(ul);

const h2 = document.querySelector('h2');
h2.setAttribute('class', 'title');

ul.removeChild(ul.children[3]);


const li = document.createElement('li');
li.innerText='Recoger a los niños';
ul.appendChild(li)

ul.children[0].setAttribute('class', 'cumplido');
ul.children[3].setAttribute('class', 'cumplido');
ul.children[1].setAttribute('class', 'fallido');
ul.children[2].setAttribute('class', 'fallido');