document.addEventListener("DOMContentLoaded", () => {
    getFood();
    foodDetails();
});
// the api key is area
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1899fde54bmsh5de83a52e80fa69p1b73ccjsn1a72bda5310e',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};
// the function is to fetch the food by arrow function
const getFood = () => {
fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
	.then(response => response.json())
	.then(data => {
        renderFood(data);
        foodDetails(data.hits[0].recipe);
    })
	.catch(err => console.error(err));
};
// the function is to render the food
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
//   add event listener to each food item
        foodItem.addEventListener('click', () => {
            foodDetails(food);
        });
        fooodList.appendChild(foodItem);
    }
}

// the function is to render the food details

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

    //the aim is to get the feedback from the user
    //it will display the feedback in the console
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {

        const myName = document.getElementById('myName').value;
        const myEmail = document.getElementById('myEmail').value;
        const myMessage = document.getElementById('messo').value;
        
        const myFeedback = {
            name: myName,
            email: myEmail,
            message: myMessage
        };
        console.log(myFeedback);
        const feedbackList = document.getElementById('feedback-list');
        const myFeedbackCard = document.createElement('li');

        myFeedbackCard.innerHTML = `
        <p>${myFeedback.name}</p>
        <p>${myFeedback.email}</p>
        <p>${myFeedback.message}</p>
        `;
        feedbackList.appendChild(myFeedbackCard);
        
});


}

