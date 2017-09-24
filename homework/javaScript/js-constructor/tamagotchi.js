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
      start(){
        console.log("Starting " + this.name);
        var self = this;
        this.hungerTimer = setInterval(function() {
          self.cry();
        }, 6000);
        this.yawnTimer = setInterval(function() {
          self.yawn();
        }, 10000);
        this.sickTimer = setInterval(function() {
          self.puke();
        }, 25000);
    }
    stop(){
        console.log("Stopping " + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
      }
  }


//create new Tamagotchis
var constructedObject1 = new Tamagotchies("Andre", "cool");
var constructedObject2 = new Tamagotchies();

//test out your Tamagotchies below via console.logs
console.log(constructedObject1);
console.log(constructedObject2);
var bob = new Tamagotchies('bob', 'blah')
bob.start();