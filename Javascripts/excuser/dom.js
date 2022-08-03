const containers = createPointers();
const container = containers[0]; // assign pointers
const excuseContainer = containers[1];
function createPointers() {
    return [
        document.getElementById("container"),
        document.getElementById("excuseContainer"),
    ];
}
// createCategoryView(category) to display categories on the screen
function createCategoryView(category, data) {
    const paraCategory = createViews(category); // to create p element and set content for it
    paraCategory.addEventListener(
        "click",
        () => {
            findExcusesFromCategories(category, data);
        },
        false
    );
    container.append(paraCategory);
}
// generic task to create p elements
function createViews(text) {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}
// to create a views for every excuse
function createExcusesViews(excuses) {
    let excusePara = null;
    excuseContainer.textContent = ""; 
    excuses.forEach((excuse) => {
        para = createViews(excuse.excuse); // pass the title of the excuse
        excuseContainer.append(para);
    });
}