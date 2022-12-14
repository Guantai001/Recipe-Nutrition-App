document.addEventListener('DOMContentLoaded', () => {
    getFood();
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1899fde54bmsh5de83a52e80fa69p1b73ccjsn1a72bda5310e',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

const getFood = () => {
fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
	.then(response => response.json())
	.then(data => {
        renderFood(data);
    })
	.catch(err => console.error(err));
};

function renderFood(data) {
    const foodList = document.querySelector('#food-list');
    data.hits.forEach((food) => {
        const foodItem = document.createElement('li');
        foodItem.innerHTML = `
            <img src="${food.recipe.image}" alt="${food.recipe.label}">
            <h2>${food.recipe.label}</h2>
            <p>${food.recipe.source}</p>
            <a href="${food.recipe.url}">View Recipe</a>
        `;
        foodList.appendChild(foodItem);
    });
}