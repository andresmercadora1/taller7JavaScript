const h1 = document.createElement("h1");
h1.innerText = "My presentation";
h1.style.color = 'red';

const div = document.querySelector("div");
div.insertAdjacentElement('beforebegin', h1);

const p = document.createElement('p');
p.innerText = 'my best friend is mickey';
p.style.fontWeight = 'bold';
p.style.color = 'blue';

div.insertAdjacentElement('beforeend', p);