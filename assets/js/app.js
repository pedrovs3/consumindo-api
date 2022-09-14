'use strict'

import { searchDog } from './fetch.js';

const button = document.querySelector('.submit-button')
const galeria = document.querySelector('#galeria')

const search = () => {
  const raca = document.querySelector('.search-input').value.toLowerCase()
  
  validate(raca);
}

const showImages = (array) => {

  for (let i = 0; i< array.length; i++ ) {
    let img = document.createElement('img')
    img.classList.add('image')
    img.src = array[i]

    galeria.appendChild(img)
  }
} 

const handleKeypress = (e) => {
  if( e.keyCode == 13 ) search();
}

const cleanDiv = () => {
  galeria.innerHTML = ''
}

const validate = async (raca) => {
  if (galeria.children.length > 0) cleanDiv()
  
  if(await searchDog(raca)) showImages(await searchDog(raca))
  else galeria.innerHTML = '<h1 style="color: red">Raça não encontrada.</h1>'
}

button.addEventListener('click', search)

document.addEventListener('keypress', handleKeypress);
