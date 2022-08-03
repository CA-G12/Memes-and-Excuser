
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
