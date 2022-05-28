let data = [{category: "smartfon", name: "Xiamoi Redmi Note 8T", price: "799",
 description: "smartfon o bardzo dobrym stosunku jakości do ceny", 
photos: ["productimages/xiaomi.png", "productimages/xiaomi1.png"] },

{category: "laptop", name: "Laptop MacBook Pro 15 15,4  Intel Core i7 16 GB / 512 GB szary", price: "3499",
 description: `Jeden z najbardziej zaawansowanych komputerów na świecie dostępny w świetnej
  konfiguracji oraz niespotykanej dotąd cenie!`, 
photos: ["productimages/macbook.png", "productimages/xiaomi1.png"]}]




const p = document.getElementById("p")

const searchInput = document.querySelector(".searchInput")

searchInput.addEventListener("input", (e)=>{console.log(e.target.value)})

const container = document.getElementById("container")




const generateProduct = () => {
data.forEach((item, index)=>{

const productDiv = document.createElement("div")
productDiv.classList.add("productDiv")

const imageDiv = document.createElement("div")
imageDiv.classList.add("imageDiv")

const productImg = document.createElement("img")
imageDiv.classList.add("productImage")
productImg.setAttribute("src", data[index].photos[0])
productImg.style.maxWidth = "200px"
productImg.style.maxHeight = "200px"

const productDescription = document.createElement("div")
productDescription.classList.add("productDescription")

imageDiv.append(productImg)
productDiv.append(imageDiv)
productDiv.append(productDescription)
container.append(productDiv)


})
}


console.log()

generateProduct()