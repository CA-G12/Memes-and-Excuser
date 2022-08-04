const containers = createPointers();
const container = containers[0]; // assign pointers
const excuseContainer = containers[1];
const logoheader=document.getElementById("logoheader")
const excuses=document.getElementById("excuses")
excuses.addEventListener("click",()=>{
  window.location.href="../index.html"
})

logoheader.addEventListener("click",()=>{
  window.location.href="../index.html"
})

function createPointers() {
  return [
    document.getElementById("container"),
    document.getElementById("excuseContainer"),
  ];
}
function createCategoryView(category, data) {
  // Create Elements
  const paraCategory = createViews(category);
  const divCategory = document.createElement("div");
  const imgEleCategory = document.createElement("img");
  const ImageUrl = selectImage(category)[0];
  imgEleCategory.src = ImageUrl;
  // Add CSS Classes
  container.classList.add("flex-container");
  divCategory.classList.add("div-category");
  paraCategory.classList.add("category-name");
  imgEleCategory.classList.add("img-category");

  // Appending Elements
  divCategory.append(paraCategory);
  divCategory.append(imgEleCategory);
  container.append(divCategory);

  // Add Listener
  divCategory.addEventListener(
    "click",
    () => {
      findExcusesFromCategories(category, data);
    },
    false
  );
}
// Generic task to create p elements
function createViews(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

function createExcusesViews(excuses) {
  let excusePara = null;
  excuseContainer.textContent = "";
  let titleCategory = document.createElement("h2")
  console.log(excuses);
  titleCategory.textContent=excuses[0].category;
  excuseContainer.append(titleCategory)
  let counter = 0;
  excuses.forEach((excuse) => {
    counter++;
    excusePara = createViews(excuse.excuse); // pass the title of the excuse
    excusePara.classList.add("excuse-para");
    excusePara.textContent = counter + "- " + excusePara.textContent;
    excuseContainer.classList.add("excuse-container");
    excuseContainer.append(excusePara);
  });

  window.location.href = "#excuseContainer";
}
