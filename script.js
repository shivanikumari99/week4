let Home = document.querySelector('#Home')
let Products = document.querySelector('#Product')
let Users = document.querySelector('#Users')
let Contact = document.querySelector('#Contact')
let Electronics = document.querySelector('#Electronics')
let Jewellery = document.querySelector('#Jewellery')
let Mens_wearing = document.querySelector('#Mens_wearing')
let Womans_Wearing = document.querySelector('#Womans_Wearing')
let Items_electronics = document.querySelector('#Items_electronics')
if (Products) {
  Products.addEventListener('click', redirect = () => {
    location.href = "page.html"
  }, false)

}

fetch('https://fakestoreapi.com/products/14').then((data) => {
  return data.json();
}).then((Electronics) => {
  let items = " "
  items = `
  <h1 class="category">${Electronics.category} Category</h1>
  <div id="Items_electronics">
  <img id="computer" src="camputer.png" alt="Electronics-Items">
  <div id="text">
  <p id="title"><b>Title:</b>${Electronics.title}</p>
  <p id="price"><b>Price:</b>$${Electronics.price}</p>  
  <p id="description"><b>Description:</b>${Electronics.description}</p>
  <p id="rating"><b>Rating:</b>${Electronics.rating.rate}</p>
  <p id="count"><b>Count:</b>${Electronics.rating.count}</p>
  </div>
  </div>
  
  `
  document.querySelector('#ele_page').innerHTML = items;
}).catch((err) => {
  console.log(err)
})