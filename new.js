const myDate = new Date ('June 14, 2023');
console.dir(myDate);
console.log(myDate.getFullYear());


const names = new Array ('ania', 'muszka');
const imie = new Object ({name: 'ania'});
const span =  document.createElement('span');

function Pizza (toppings = [], customer){
    console.log(this);
    console.log('Making a pizza');
    // save the toppings thata were passed in, to the instance of pizza
    this.toppings = toppings;
    this.customer = customer;
    this.id = Math.floor(Math.random()* 16777215).toString(16)
}
const pepPizza = new Pizza(['peperoni'], "Anna");
const mushPizza = new Pizza(['peperoni', 'mushroom', 'onion'], "Alex");

console.log(pepPizza.constructor);
console.log(pepPizza instanceof Pizza);

const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

function theButtons () {
    console.log("outside", this);
    
    setTimeout(() => {
        console.log("inside", this);
        this.textContent = "clicked!";
    }, 1000);
};

button1.addEventListener('click', theButtons)
button2.addEventListener('click', theButtons)