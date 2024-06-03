import { db } from "/images.js";

const galerie = document.querySelector('#galerie');

function renderImages(data) {
  galerie.innerHTML = ''
  const ul = document.createElement('ul')
  ul.id = 'ImgBox'

  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li')

    li.innerHTML = `
      <img id='imgClick' src='${data[i].url}' alt='${data[i].id}'>
    `
    ul.appendChild(li)
  }
  galerie.appendChild(ul)
}
renderImages(db)

const sportBtn = document.querySelector('#sportBtn')
const animauxBtn = document.querySelector('#animauxBtn')
const natureBtn = document.querySelector('#natureBtn')
const villeBtn = document.querySelector('#villeBtn')
const allBtn = document.querySelector('#all')

function categoryImg(category) {
  let newDb = [];
  galerie.innerHTML = ''
  for (let i = 0; i < db.length; i++) {
    if (db[i].category === category) {
      newDb.push(db[i])
    }
  }
  renderImages(newDb);
}

sportBtn.addEventListener('click', () => {
  categoryImg('sport');
})

animauxBtn.addEventListener('click', () => {
  categoryImg('animal');
})

natureBtn.addEventListener('click', () => {
  categoryImg('nature');
})

villeBtn.addEventListener('click', () => {
  categoryImg('city');
})

allBtn.addEventListener('click', () => {
  renderImages(db)
})

function searchInput() {
  const search = document.querySelector('#search');
  search.addEventListener('input', () => {
    const newDb = [];
    for (let i = 0; i < db.length; i++) {
      if (db[i].id.toString().includes(search.value)) {
        newDb.push(db[i])
      }
    }
    renderImages(newDb)
  })
}
searchInput()


function clickImages(){
  const allImg = document.querySelectorAll('#imgClick')
  for(let i = 0; i < allImg.length; i++){
    allImg[i].addEventListener('click',()=>{
      // creer un element qui s affaiche devant l utilisateur;
    })
  }
}
clickImages()
