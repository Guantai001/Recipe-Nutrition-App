document.addEventListener('DOMContentLoaded', () => {
    getFood();
    foodDetails();
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
        foodDetails(data.hits[0].recipe);
    })
	.catch(err => console.error(err));
};

function renderFood(data) {
    const fooodList = document.querySelector('#food-list');
    for (let i = 0; i < data.hits.length; i++) {
        const food = data.hits[i].recipe;
        const foodItem = document.createElement('li');
 
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.label}">
            <h3>${food.label}</h3>
            <p>${food.source}</p>
            
        `;
  
        foodItem.addEventListener('click', () => {
            foodDetails(food);
        });
        fooodList.appendChild(foodItem);
    }
}

function foodDetails(food) {
    const foodDetail = document.querySelector('#food-details');
    foodDetail.innerHTML = `
        <img src="${food.image}" alt="${food.label}">
        <h3>${food.label}</h3>
        <p>${food.source}</p>
        <p>Ingridients:${food.ingredientLines}</p>
        <p>Calories:${food.calories}</p>
        <p>Health Labels:${food.healthLabels}</p>
        <p>Diet Labels:${food.dietLabels}</p>
        <p>Yield:${food.yield}</p>
        <p>Time:${food.totalTime} minutes</p>
        <p>URL:${food.url}</p>
        <p>ShareAs:${food.shareAs}</p>
        

    `;
}