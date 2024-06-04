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
const allImages = document.querySelector('#all')

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

allImages.addEventListener('click', () => {
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


const addImage = document.querySelector('#addImage')

addImage.addEventListener('click',()=>{
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const div = document.createElement('div');
  div.className = 'addImageDiv';
  main.appendChild(div)
  footer.remove()


  div.innerHTML = `
    <button id='btnBack'>Back</button>
    <div>
      <label for='URL'>Add Your Image URL</label>
      <input name='URL' type='url' id='inputUrl' placeholder='URL'>
    </div>
    <div>
      <label for='title'>Add Your Image Title</label>
      <input name='title' type='text' id='inputTitle' placeholder='Title'>
    </div>
    
    <label for="pet-select">Choose a categoty :</label>

    <select name="category" id="categorySelect">
      <option value="">--Please choose an option--</option>
      <option value="sport">sport</option>
      <option value="animal">animal</option>
      <option value="nature">nature</option>
      <option value="city">city</option>
    </select>

    <input id='submit' type="submit" value="submit">
  `

  const Submit = document.querySelector('#submit');
  const btnBack = document.querySelector('#btnBack');
  const inputUrl = document.querySelector('#inputUrl');
  const inputTitle = document.querySelector('#inputTitle');
  const categorySelect = document.querySelector('#categorySelect');
  
  btnBack.addEventListener('click',()=>{
    div.remove();
    document.body.appendChild(footer)
  })


  Submit.addEventListener('click',()=>{
    const inputTitleValue = inputTitle.value;
    const inputUrlValue = inputUrl.value;
    const categorySelectValue = categorySelect.value;
    let newObjet = {"id":`${inputTitleValue}`, "category":`${categorySelectValue}`,"url":`${inputUrlValue}`}
    db.push(newObjet);
    console.log(db);
    div.remove();
    document.body.appendChild(footer)
  })

})
