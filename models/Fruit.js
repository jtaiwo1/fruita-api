// Handling data, representing data, ALL THE DATA STUFF
// The model talks to the controller
const fruits = require("./fruits.json");

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAll() {
        return fruits.map(q => new Fruit(q));
    }

    static show(name) {
        const fruit = fruits.find(f => f.name.toLowerCase() == name)
        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw "The fruit does not exist"
        }
    }

    static create(data) {
        const newFruit = data
        // we expect the data to be an object within the fruits array
        const fruit = fruits.find(f => f.name.toLowerCase() == data.name.toLowerCase())

        if (fruit) {
            throw new Error("The fruit already exists")
        } else {
            newFruit['id'] = fruits.length + 1 // we are setting the new id for the newfruit to be 1 more than the length
            fruits.push(newFruit)

            return new Fruit(newFruit)
        }

    }


    update(data) {
        const updatedFruit =  fruits.find(f => f.name.toLowerCase() === this.name.toLowerCase())

        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "The fruit does not exist"
        }

    }

    deleted(data) {
        const deleteFruit = fruits.find(f => f.name.toLowerCase() === this.name.toLowerCase())

        if(deleteFruit){
            //fruits.splice(fruits.indexOf(deleteFruit),1)
            delete fruits[fruits.indexOf(deleteFruit)]
        } else {
            throw "The fruit does exist"
        }

    }
}



module.exports = Fruit;