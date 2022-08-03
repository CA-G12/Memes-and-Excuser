fetchApi("https://excuser.herokuapp.com/v1/excuse/500", function (data) {
  extractCategories(data); // to extract all categories from the objects to display them later
});
function extractCategories(data) {
  let categories = [];
  data.forEach((excuse) => {
    if (!categories.includes(excuse.category)) {
      createCategoryView(excuse.category, data);
      categories.push(excuse.category);
    }
  });
}


function findExcusesFromCategories(category, data) {
  let excuses = data.filter((excuse) => {
    return excuse.category === category;
  });
  return createExcusesViews(excuses);
}

function selectImage(categoryName) {
  const images = [
    "../images/college.jpg",
    "../images/family.webp",
    "../images/office.jpg",
    "../images/party.gif",
    "../images/children.webp",
  ];

  return images.filter((image) => {
    return (
      image.split("/").slice(2).join("").split(".").splice(0, 1)[0] ==
      categoryName
    );
  });
}
