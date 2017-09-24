console.log('tamagotchi file is loaded');

class Tamagotchies {
    constructor(name, creatureName) {
        this.propertyName = name
        this.creatureName = creatureName
      this.foodInTummy = 100
      this.restedness = 100
      this.health = 100
    }
    cry(){
        this.foodInTummy--;
        console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
        console.log('current food in tummy: ' + this.foodInTummy);
      }
    puke() {
        this.health--;
        console.log("blahhh!");
        console.log(this.name + ' has current health = ' + this.health)
      }
      yawn() {
        this.restedness--;
        console.log("blahhh!");
        console.log(this.name + ' has current restedness = ' + this.restedness)
      }
  }


//create new Tamagotchis
var constructedObject1 = new Tamagotchies("Andre", "cool");
var constructedObject2 = new Tamagotchies();

//test out your Tamagotchies below via console.logs
console.log(constructedObject1);
console.log(constructedObject2);