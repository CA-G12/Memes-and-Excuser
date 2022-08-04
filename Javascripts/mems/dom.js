const memeSection = document.getElementsByClassName("meme-container")[0]
const inputSearch = document.getElementById("searchInput");

  fetchApi("https://api.imgflip.com/get_memes",loading,(data)=>{fetchFromApi(data,memeDom)}) 


inputSearch.addEventListener("keyup", () => {
    search(inputSearch.value);
});

function memeDom(imgurl, name) {
  let memeDiv = document.createElement("div");
  memeDiv.classList.add("meme-div");

  let memeImg = document.createElement("img");
  memeImg.setAttribute("src", imgurl);
  memeImg.classList.add("meme-img");

  let memeName = document.createElement("h3");
  memeName.classList.add("meme-name");
  memeName.textContent = name;
  memeDiv.append(memeImg, memeName);
  memeSection.appendChild(memeDiv);
}

function search(inputName) {
  let array = document.getElementsByClassName("meme-div");
  Array.from(array).forEach((element) => {
    if (  element.children[1].textContent.toLocaleLowerCase().includes(inputName) ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
