'use strict';
const imagem = document.querySelector('.imagem')

const searchDog = async (raca) => {
  if (raca == '') return false;
  
  const url = `https://dog.ceo/api/breed/${raca}/images`;
  const response = await fetch(url)
  
  const data = await response.json()

  if (data.status == 'success') return data.message;
}

export { searchDog }
