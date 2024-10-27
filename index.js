require("dotenv").config();
const mongoose = require("mongoose");
const {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFavoriteFood,
  addFavoriteFoodById,
  updateAgeByName ,
  deletePersonById,
  deletePeopleByName
} = require("./controlleur/manyControlleur");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// //Call controller functions here
// createAndSavePerson();

// //Example: Creating multiple people
// const arrayOfPeople = [
//   { name: "Alice", age: 28, favoriteFoods: ["Sushi", "Pasta"] },
//   { name: "Bob", age: 35, favoriteFoods: ["Burgers", "Salad"] },
//   { name: "Charlie", age: 20, favoriteFoods: ["Pizza", "Tacos"] },
// ];
// createManyPeople(arrayOfPeople);

//   findPeopleByName("Bob");

// Example usage:
// findOneByFavoriteFood("Pizza");

// addFavoriteFoodById("671e3376c0e87531b30f85b1", "Burger");

// updateAgeByName("Alice", 30)

// deletePersonById("671e3376c0e87531b30f85ae");

deletePeopleByName("Bob")