const Person = require("../models/person");

// Function to create and save a single person
async function createAndSavePerson() {
  try {
    const person = new Person({
      name: "John Doe",
      age: 25,
      favoriteFoods: ["Pizza", "Pasta", "Ice cream"],
    });
    const savedPerson = await person.save();
    console.log("Person saved successfully:", savedPerson);
  } catch (err) {
    console.log("Error saving person:", err);
  }
}

// Function to create multiple people
async function createManyPeople(arrayOfPeople) {
  try {
    const savedPeople = await Person.create(arrayOfPeople);
    console.log("Multiple people saved successfully:", savedPeople);
  } catch (err) {
    console.log("Error saving multiple people:", err);
  }
}


// Find all people by name
async function findPeopleByName(name) {
    try {
      const people = await Person.find({ name });
      console.log(`People found with name "${name}":`, people);
    } catch (err) {
      console.log("Error finding people by name:", err);
    }
  }
  

// Find one person by favorite food
async function findOneByFavoriteFood(food) {
    try {
      const person = await Person.findOne({ favoriteFoods: food });
      console.log(`Person found with favorite food "${food}":`, person);
    } catch (err) {
      console.log("Error finding person by favorite food:", err);
    }
  }

  // Update a person's favorite foods by ID
async function addFavoriteFoodById(personId, food) {
    try {
      const person = await Person.findById(personId);
      if (!person) return console.log("Person not found");
  
      person.favoriteFoods.push(food);
      const updatedPerson = await person.save();
      console.log("Updated person's favorite foods:", updatedPerson);
    } catch (err) {
      console.log("Error updating favorite foods:", err);
    }
  }

  // Update a person's age by name
async function updateAgeByName(personName, newAge) {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name: personName },
        { age: newAge },
        { new: true } // Return the updated document
      );
      console.log(`Updated person's age for "${personName}":`, updatedPerson);
    } catch (err) {
      console.log("Error updating age by name:", err);
    }
  }

  async function deletePersonById(personId) {
    try {
      const deletedPerson = await Person.findByIdAndRemove(personId);
      if (!deletedPerson) {
        console.log("No person found with that ID.");
      } else {
        console.log("Deleted person:", deletedPerson);
      }
    } catch (err) {
      console.log("Error deleting person by ID:", err);
    }
  }

  // Delete multiple people by name
async function deletePeopleByName(name) {
    try {
      const result = await Person.remove({ name });
      console.log(`Deleted ${result.deletedCount} people with the name "${name}".`);
    } catch (err) {
      console.log("Error deleting people by name:", err);
    }
  }
  
  module.exports = {
    createAndSavePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFavoriteFood,
    addFavoriteFoodById,
    updateAgeByName,
    deletePersonById,
    deletePeopleByName
  };
  
  
  
  // Export the functions
  
  
  

 
