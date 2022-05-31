let data = [{category: "smartfon", name: "Xiaomi Redmi Note 8T", price: "799",
 description: `smartfon o bardzo dobrym stosunku jakości do ceny`, 
photos: ["productimages/xiaomi.png", "productimages/xiaomi1.png"] },

{category: "laptop", name: "Laptop MacBook Pro 15 15,4  Intel Core i7 16 GB / 512 GB szary", price: "3499",
 description: `Jeden z najbardziej zaawansowanych komputerów na świecie dostępny w świetnej
  konfiguracji oraz niespotykanej dotąd cenie!`, 
photos: ["productimages/macbook.png", "productimages/xiaomi1.png"]},

{category: "laptop", name: "Lenovo ThinkPad X240 i5-4 gen. 8GB 500GB WIN10", price: "649",
 description: `ulra-mobilny profesjonalny laptop przeznaczony do codziennej pracy zarówno w biurze,
  jak i poza nim.`, 
photos: ["productimages/lenovo.png"] },

{category: "smartfon", name: "Smartfon Apple iPhone 13 4 GB / 128 GB czarny", price: "3899",
 description: `Urządzenie oparto na czipie A15 Bionic oraz systemie operacyjnym iOS 15,
  a główną cechą wyróżniającą tę generację "jabłuszek" ma być zaawansowany aparat fotograficzny`, 
photos: ["productimages/iphone13.png"] }

]


const magnifier = document.querySelector(".magnifier")

const searchInput = document.querySelector(".searchInput")

const container = document.getElementById("container")

let productsArray = []

const generateProduct = () => {
data.forEach((item, index)=>{



const productDiv = document.createElement("div")
productDiv.classList.add("productDivNone")
productDiv.id = data[index].name
productDiv.category = data[index].category
console.log(data[index].name)
console.log(data[index].category)

const imageDiv = document.createElement("div")
imageDiv.classList.add("imageDiv")


const productImg = document.createElement("img")
imageDiv.classList.add("productImage")
productImg.setAttribute("src", data[index].photos[0])
productImg.style.maxWidth = "200px"
productImg.style.maxHeight = "200px"

const productInformation = document.createElement("div")
productInformation.classList.add("productDescription")

const name = document.createElement("p")
name.innerHTML = `<b>${data[index].name}</b>`

const price = document.createElement("p")
price.innerHTML = `<b>${data[index].price}</b> zł  `

const addButton = document.createElement("div")
const buttonText = document.createElement("p")
buttonText.innerText="dodaj do koszyka"
buttonText.classList.add("addButton")
const addImage = document.createElement("img")
addImage.style.width="50px"
addImage.setAttribute("src", "dodaj.svg")
addButton.append(addImage, buttonText)

const description = document.createElement("p")
description.style.fontSize = "12px"
description.innerHTML = data[index].description


imageDiv.append(productImg)
productDiv.append(imageDiv)
productInformation.append(name, price, description, addButton)
productDiv.append(productInformation)
container.append(productDiv) 
productsArray.push(imageDiv)

const searchForAnItem = ()=>{
productsArray.forEach((item)=>{  
productDiv.classList.add("productDivNone")    
let value = searchInput.value.toLowerCase()
if(value==="")return
const isVisible = productDiv.id.toLowerCase().includes(value) || 
productDiv.category.toLowerCase().includes(value)
if(isVisible) productDiv.classList.remove("productDivNone");
 productDiv.classList.add("productDiv")})
}

magnifier.addEventListener("click", searchForAnItem)

searchInput.addEventListener("keydown", (e)=>{if(e.key === "Enter") searchForAnItem()})


})

}

generateProduct()