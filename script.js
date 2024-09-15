// Sample recipe data (replace with your actual recipes)
const recipes = [
    { name: "Grilled Chicken", ingredients: ["chicken", "herbs", "lemon"], instructions: "Grill chicken with herbs and lemon until fully cooked." },
    { name: "Vegetable Stir Fry", ingredients: ["mixed vegetables", "soy sauce", "ginger"], instructions: "Stir-fry vegetables with soy sauce and ginger for 5-7 minutes." },
    { name: "Pasta Carbonara", ingredients: ["pasta", "eggs", "bacon", "parmesan"], instructions: "Cook pasta, mix with eggs, bacon, and cheese, and serve." },
    { name: "Caesar Salad", ingredients: ["romaine lettuce", "croutons", "parmesan", "caesar dressing"], instructions: "Toss lettuce with croutons, parmesan, and dressing." },
    { name: "BBQ Ribs", ingredients: ["ribs", "BBQ sauce", "spices"], instructions: "Cook ribs with BBQ sauce and spices until tender." },
    { name: "Margherita Pizza", ingredients: ["pizza dough", "tomatoes", "mozzarella", "basil"], instructions: "Bake pizza dough with tomatoes and mozzarella at 475°F for 10-12 minutes. Add basil before serving." }
];

// DOM elements
const recipeSearch = document.getElementById('recipe-search');
const recipeList = document.getElementById('recipe-list');
const subscribeForm = document.getElementById('subscribe-form');

// Function to display recipes
function displayRecipes(recipesToShow) {
    recipeList.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <button class="btn btn-secondary view-recipe">View Recipe</button>
        `;
        recipeList.appendChild(recipeElement);
    });
}

// Initial display of all recipes
displayRecipes(recipes);

// Search functionality
recipeSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) || 
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
    displayRecipes(filteredRecipes);
});

// View recipe functionality
recipeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-recipe')) {
        const recipeName = e.target.parentElement.querySelector('h3').textContent;
        const recipe = recipes.find(r => r.name === recipeName);
        alert(`Instructions for ${recipe.name}:\n\n${recipe.instructions}`);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Subscribe form submission
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with email: ${email}`);
    e.target.reset();
});

// Sticky header
const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');

function stickyHeader() {
    if (window.scrollY > heroSection.offsetHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', stickyHeader);

// Animation on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// To use the reveal animation, add the 'reveal' class to elements you want to animate
// For example: <div class="reveal">Content to animate</div>