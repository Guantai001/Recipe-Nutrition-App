document.addEventListener('DOMContentLoaded', () => {
    getFood();
});


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1899fde54bmsh5de83a52e80fa69p1b73ccjsn1a72bda5310e',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const getFood = () => {
fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=456%2C987%2C321', options)
	.then(response => response.json())
	.then(data => {
        renderFood(data);
    }
    )
	.catch(err => console.error(err));
};

function renderFood(data) {
    const foodContainer = document.getElementById('food-container');
    data.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        foodDiv.innerHTML = `
            <h2>${food.title}</h2>
            <img src="${food.image}">
            <p>${food.summary}</p>
        `;
        foodContainer.appendChild(foodDiv);
    }
    )
}

