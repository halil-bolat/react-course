"use strict"

let name = 'John';

function makeUppercase(word){
  return word.toUpperCase();
}

let template = `<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>this is a simple template on javascript</p>`;

document.getElementById('template').innerHTML = template;
