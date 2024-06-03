const db =[
  {
      "id": 1,
      "category": "sport",
      "url": "https://source.unsplash.com/200x300/?basketball"
  },
  {
      "id": 2,
      "category": "sport",
      "url": "https://source.unsplash.com/200x300/?football"
  },
  {
      "id": 3,
      "category": "sport",
      "url": "https://source.unsplash.com/200x300/?tennis"
  },
  {
      "id": 4,
      "category": "sport",
      "url": "https://source.unsplash.com/200x300/?soccer"
  },
  {
      "id": 5,
      "category": "sport",
      "url": "https://source.unsplash.com/200x300/?swimming"
  },
  {
      "id": 6,
      "category": "animal",
      "url": "https://source.unsplash.com/200x300/?dog"
  },
  {
      "id": 7,
      "category": "animal",
      "url": "https://source.unsplash.com/200x300/?cat"
  },
  {
      "id": 8,
      "category": "animal",
      "url": "https://source.unsplash.com/200x300/?lion"
  },
  {
      "id": 9,
      "category": "animal",
      "url": "https://source.unsplash.com/200x300/?tiger"
  },
  {
      "id": 10,
      "category": "animal",
      "url": "https://source.unsplash.com/200x300/?elephant"
  },
  {
      "id": 11,
      "category": "nature",
      "url": "https://source.unsplash.com/200x300/?forest"
  },
  {
      "id": 12,
      "category": "nature",
      "url": "https://source.unsplash.com/200x300/?mountain"
  },
  {
      "id": 13,
      "category": "nature",
      "url": "https://source.unsplash.com/200x300/?beach"
  },
  {
      "id": 14,
      "category": "nature",
      "url": "https://source.unsplash.com/200x300/?river"
  },
  {
      "id": 15,
      "category": "nature",
      "url": "https://source.unsplash.com/200x300/?waterfall"
  },
  {
      "id": 16,
      "category": "city",
      "url": "https://source.unsplash.com/200x300/?new+york"
  },
  {
      "id": 17,
      "category": "city",
      "url": "https://source.unsplash.com/200x300/?paris"
  },
  {
      "id": 18,
      "category": "city",
      "url": "https://source.unsplash.com/200x300/?london"
  },
  {
      "id": 19,
      "category": "city",
      "url": "https://source.unsplash.com/200x300/?tokyo"
  },
  {
      "id": 20,
      "category": "city",
      "url": "https://source.unsplash.com/200x300/?dubai"
  }
]



const galerie = document.querySelector('#galerie');

function renderImages (data){

  const ul = document.createElement('ul')
  
  for(let i = 0; i < data.length; i++){
    const li = document.createElement('li')
    
    li.innerHTML = `
      <h2>${data[i].id}</h2>
      <img src='${data[i].url}' alt='${data[i].id}'>
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

function categoryImg(category){
  let newDb = [];
  galerie.innerHTML = ''
  for(let i = 0; i < db.length; i++){
    if(db[i].category === category){
      newDb.push(db[i])
    }
  }
  renderImages(newDb);
}

sportBtn.addEventListener('click',()=>{
  categoryImg('sport');
})

animauxBtn.addEventListener('click',()=>{
  categoryImg('animal');
})

natureBtn.addEventListener('click',()=>{
  categoryImg('nature');
})

villeBtn.addEventListener('click',()=>{
  categoryImg('city');
})

allBtn.addEventListener('click',()=>{
  renderImages(db)
})