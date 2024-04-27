"use strict";

class DietaryLifestyle {
  constructor(name, description, ingredientsTheyCanEat, dailyMenu) {
    this.name = name;
    this.description = description;
    this.ingredientsTheyCanEat = ingredientsTheyCanEat;
    this.dailyMenu = dailyMenu;
  }
}

const vegetarian = new DietaryLifestyle(
  "Vegetarian",
  "No meat, poultry or fish",
  [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
  ],

  [
    {
      name: "Breakfast",
      recipe: `Oatmeal with Honey
      
      Instructions:
      In a small saucepan, bring the milk to a gentle simmer over medium heat.
      Stir in the rolled oats and reduce the heat to low.
      Cook the oats, stirring occasionally, for about 5 minutes or until they reach your desired consistency. Add more milk if needed.
      Once the oats are cooked, remove the saucepan from the heat.
      Stir in the honey or sweetener of your choice.
      Serve the oatmeal hot in a bowl.
      Add your favorite toppings such as sliced bananas, berries, nuts, seeds, or a sprinkle of cinnamon.
      Enjoy your delicious and nutritious oatmeal breakfast!`,
      ingredients: [
        "1/2 cup rolled oats",
        "1 cup milk (or water for a dairy-free option)",
        "1 tablespoon honey (or maple syrup for a vegan option)",
        "Optional toppings: sliced bananas, berries, nuts, seeds, cinnamon",
      ],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: `Fresh Garden Salad
      Instructions:
      In a large bowl, combine the chopped lettuce, halved cherry tomatoes, and sliced cucumber. If using any optional add-ins, add them to the bowl as well.
      In a small bowl, whisk together the olive oil and balsamic vinegar (or lemon juice) to make the dressing. Season with salt and pepper to taste.
      Drizzle the dressing over the salad ingredients in the large bowl.
      Gently toss the salad until all the ingredients are evenly coated with the dressing.
      Serve the fresh garden salad immediately as a light and nutritious lunch option.
      Enjoy your delicious and healthy salad!`,
      ingredients: [
        "2 cups lettuce (any variety you prefer),washed and chopped",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, sliced",
        "Optional add-ins: sliced carrots, bell peppers, red onions, avocado, etc.",
        "2 tablespoons olive oil",
        "1 tablespoon balsamic vinegar (or lemon juice for a tangy option)",
        "Salt and pepper to taste",
      ],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: `Vegetable Stir-Fry
    
      Instructions:
      
      Heat olive oil in a large skillet or wok over medium-high heat.
      Add minced garlic and sliced onion to the skillet, and sauté for 2-3 minutes until fragrant and translucent.
      Add sliced bell pepper, julienned carrots, broccoli florets, snow peas, and sliced mushrooms to the skillet. Stir-fry the vegetables for 5-7 minutes until they are tender-crisp.
      Push the vegetables to one side of the skillet and add cubed tofu to the empty space. Cook the tofu for 3-4 minutes, allowing it to brown on all sides.
      Once the tofu is golden brown, combine it with the stir-fried vegetables in the skillet.
      Season the vegetable stir-fry with salt and pepper to taste. Drizzle soy sauce (or tamari) over the vegetables and tofu, and toss everything together to coat evenly.
      If desired, add sesame oil for extra flavor and toss again to combine.
      Remove the skillet from heat and serve the vegetable stir-fry hot over cooked rice or noodles.
      `,
      ingredients: [
        "2 cloves garlic, minced",
        "1 onion, thinly sliced",
        "1 bell pepper, thinly sliced (any color you prefer)",
        "2 carrots, julienned",
        "1 cup broccoli florets",
        "1 cup snow peas, trimmed",
        "1 cup mushrooms, sliced",
        "1 block firm tofu, drained and cubed",
        "Salt and pepper to taste",
        "2 tablespoons soy sauce (or tamari for a gluten-free option)",
        "1 tablespoon sesame oil (optional)",
        "Cooked rice or noodles for serving",
      ],
      calories: 500,
    },
  ]
);

const vegan = {
  name: "Vegan",
  description: "Excludes all animal products",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const pescetarian = {
  name: "Pescetarian",
  description: "No meat or poultry, but includes fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const flexitarian = {
  name: "Flexitarian",
  description: "Primarily vegetarian but occasionally eats meat or fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
    "Fish",
    "Poultry",
    "Meat",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const pollotarian = {
  name: "Pollotarian",
  description: "Eats poultry but not meat or fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
    "Poultry",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const lactoVegetarian = {
  name: "Lacto-Vegetarian",
  description: "Vegetarian plus dairy",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const ovoVegetarian = {
  name: "Ovo-Vegetarian",
  description: "Vegetarian plus eggs",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Eggs",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const lactoOvoVegetarian = {
  name: "Lacto-Ovo Vegetarian",
  description: "Vegetarian plus dairy and eggs",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const rawVegan = {
  name: "Raw Vegan",
  description: "Vegan plus uncooked food",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const macrobiotic = {
  name: "Macrobiotic",
  description: "Vegan plus whole grains",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Whole grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const glutenFree = {
  name: "Gluten-Free",
  description: "No gluten",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const keto = {
  name: "Keto",
  description: "High fat, low carb",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Meat",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const paleo = {
  name: "Paleo",
  description: "No grains, legumes, or dairy",
  ingridientsTheyCanEat: ["Fruits", "Vegetables", "Nuts", "Seeds", "Meat"],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const mediterranean = {
  name: "Mediterranean",
  description: "Based on traditional Mediterranean diet",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const halal = {
  name: "Halal",
  description: "No pork",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const kosher = {
  name: "Kosher",
  description: "No pork or shellfish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const dietaryLifestyles = [
  "Vegetarian",
  "Vegan",
  "Pescetarian",
  "Flexitarian",
  "Pollotarian",
  "Lacto Vegetarian",
  "Ovo Vegetarian",
  "Lacto Ovo Vegetarian",
  "Raw Vegan",
  "Macrobiotic",
  "Gluten Free",
  "Keto",
  "Paleo",
  "Mediterranean",
  "Halal",
  "Kosher",
];

// aboutContainer.innerHTML = about;
// Sticky Navigation
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
// };
// const signupObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });
// signupObserver.observe(signupForm);

// Get the signup and login buttons

// Forms selection
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");

// Buttons selection
const buttonGroup = document.querySelector(".button-group");
const buttons = document.querySelectorAll(".btn");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const about = document.querySelector("#about");
const cookiesBtn = document.getElementById("accept-cookies");
const section2 = document.querySelector("#section2");
const dietOptions = document.querySelector("#dietary-options");

// Message selection
const title = document.querySelector(".title");
const thanksForSignUp = document.querySelector("#thanksForSignup");
const cookiesMessage = document.getElementById("cookies-message");
const aboutMsg = document.querySelector("#aboutMessage");
const usernameMsg = document.querySelector("#yourUserName");
const chooseBelow = document.querySelector("#chooseBelow");
const details = document.querySelector("#enterDetailsMessage");
const allTabs = document.querySelectorAll(".tab");
const chooseDietMsg = document.querySelector("#dietMessage");

// buttons style mousein and mouseout
let originalColor;

// Styling the buttons on mouseover and mouseout
buttons.forEach((button) => {
  button.addEventListener("mouseover", function (e) {
    originalColor = e.target.style.backgroundColor;
    e.target.style.transition =
      "background-color 1s ease-in-out, box-shadow 0.3s ease-in-out";
    e.target.style.backgroundColor = "orangered";
    e.target.style.boxShadow =
      "0 0 10px rgba(255, 0, 0, 0.9), 0 0 50px rgba(139, 0, 0, 0.9)"; // Increased shadow and opacity
  });
  button.addEventListener("mouseout", function (e) {
    e.target.style.transition =
      "background-color 1s ease-in-out, box-shadow 0.3s ease-in-out";
    e.target.style.backgroundColor = originalColor;
    e.target.style.boxShadow = "none";
  });
});

thanksForSignUp.classList.add("hidden-btn");
cookiesBtn.classList.remove("hideCookies");
cookiesMessage.classList.remove("hideCookies");

//  Add event listener to the cookies button
cookiesBtn.addEventListener("click", (e) => {
  cookiesMessage.style.display = "none";
  cookiesBtn.classList.add("hideCookies");
});

// Add event listener to the signup button
signupBtn.addEventListener("click", () => {
  aboutMsg.classList.add("hidden-btn");
  buttonGroup.classList.add("hidden-btn");
  details.classList.remove("hidden-btn");
  chooseBelow.classList.add("hidden-btn");
  signupForm.classList.remove("hidden-btn");
});
// Add event listener to the signup form's submit button

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const surname = document.querySelector("#surname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  // Check if name and surname are not empty
  if (name && surname && email && password) {
    // Create a new user object

    const user = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      username: `${surname}`.toLowerCase() + `${name[0]}`.toLowerCase(),
    };

    const message = user.username ? user.username : "Not valid";

    // Show the thanks for signing up message
    signupForm.classList.add("hidden-btn");
    details.classList.add("hidden-btn");
    thanksForSignUp.classList.remove("hidden-btn");

    setTimeout(() => {
      thanksForSignUp.classList.add("hidden-btn");
      loginForm.classList.remove("hidden-btn");
      usernameMsg.classList.remove("hidden-btn");
      usernameMsg.innerHTML = `Your username is <span style="color:cyan; font-size:20px">${message}</span>`;
    }, 2000);

    // Push user to the accounts array
    accounts.push(user);
    console.log(accounts);
    signupForm.classList.add("hidden-btn");
  }
});
// User Accounts
let username;
const accounts = [];
// Add event listener to the login button
loginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden-btn");
  details.classList.remove("hidden-btn");
  buttonGroup.classList.add("hidden-btn");
});
// Add event listener to the login form's submit button
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginForm.classList.remove("hidden-btn");
  usernameMsg.classList.add("hidden-btn");
  const username = document.querySelector("#Lusername").value;
  const user = accounts.find((account) => account.username === username);
  const password = document.querySelector("#Lpassword").value;

  if (user.password === password && user.username === username) {
    loginForm.classList.add("hidden-btn");
    dietOptions.classList.remove("hidden-btn");
    chooseDietMsg.classList.remove("hidden-btn");
  } else {
    console.log("Login failed");
    loginForm.classList.add("hidden-btn");
  }
});

// Add event listener to the about button
about.addEventListener("click", () => {
  aboutMsg.classList.remove("hidden-btn");
  window.scrollTo({
    top: section2.offsetTop,
    behavior: "smooth", // Optional: Use smooth scrolling animation
  });
});

dietOptions.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedOption = document.querySelector(
    '#dietary-options input[type="radio"]:checked'
  ).value;
  console.log(selectedOption);
  // Main Application

  // Choose Your Dietary Lifestyle
  const preference =
    dietaryLifestyles.findIndex((diet) => diet === selectedOption) + 1;
  console.log(preference);
  // FIXME: This is not working
  const dailyRandom = preference.dailyMenu[Math.trunc(Math.random() * 3)].name;

  let dailyMenuIndex = preference.dailyMenu.findIndex(
    (menu) => menu.name === dailyRandom
  );
  const ingredients = preference.dailyMenu[dailyMenuIndex].ingredients
    .map((ingredient) => ingredient)
    .join("\n");
  console.log(
    `You have chosen ${preference.name} diet and here is your daily recipe for ${dailyRandom}, will be with ingredients: \n\n${ingredients} and calories: ${preference.dailyMenu[dailyMenuIndex].calories}, and these are the instructions:\n \n${preference.dailyMenu[dailyMenuIndex].recipe}`
  );
});
// Display daily menu with recipes
// Filter recipes based on dietary preferences
// Calculate total daily calorie intake
// Track user streak for following dish recipes
// Offer premium subscription for monthly meal planning
// Choose Your Dietary Lifestyle

startApp();

function startApp() {
  displayDailyMenu();
  filterRecipes();
  // filterAlergy()
  calculateCalories();
  trackStreak();
  offerSubscription();
}

function displayDailyMenu() {
  // Display daily menu with recipes
}

function filterRecipes() {
  // Allow users to filter recipes based on diet preferences
}

function calculateCalories() {
  // Calculate total daily calorie intake
}

function trackStreak() {
  // Track user streak for following dish recipes
}

function offerSubscription() {
  // Offer premium subscription for weekly/monthly meal planning
  // Handle subscription purchase
}
