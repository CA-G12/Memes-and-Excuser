
function memeDom(imgurl, name , boxCount ) {
   let memeDiv = document.createElement("div")

   let memeImg =document.createElement("img")
   memeImg.setAttribute("src", imgurl)
   memeImg.classList.add("meme-img")

   let memeName = document.createElement("h3")
   memeName.classList.add("meme-name")
   
   let memeBoxCount= document.createElement("span")
   memeBoxCount.classList.add("meme-box-count")
   
   memeDiv.append(memeImg,memeName,memeBoxCount)

}