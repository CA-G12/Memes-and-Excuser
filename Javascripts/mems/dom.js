const memeSection = document.getElementsByClassName("meme-container")[0]

fetchApi("https://api.imgflip.com/get_memes",(data)=>{fetchFromApi(data,memeDom)})

function memeDom(imgurl, name , boxCount ) {
   let memeDiv = document.createElement("div")
   memeDiv.classList.add("meme-div")

   let memeImg =document.createElement("img")
   memeImg.setAttribute("src", imgurl)
   memeImg.classList.add("meme-img")

   let memeName = document.createElement("h3")
   memeName.classList.add("meme-name")
   memeName.textContent=name
   
   let memeBoxCount= document.createElement("span")
   memeBoxCount.classList.add("meme-box-count")
   memeBoxCount.textContent="Box count : "+boxCount
   
   memeDiv.append(memeImg,memeName,memeBoxCount)
   memeSection.appendChild(memeDiv)
}

   