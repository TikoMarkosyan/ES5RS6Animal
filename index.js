//ES6

class Animal {
  constructor(brain = true,instinct = true){
    this.brain = brain;
    this.instinct = instinct
  }
  static donotuse = function() {
    console.log("donotuse");
  }
  die(){
    console.log("dead");
  }
  brainpr(){
    console.log(this.brain);
  }
}
class Mammal extends Animal {
  constructor(warmblooded = true, brain,instinct){
    super(brain,instinct);
    this.warmblooded = warmblooded;
  }
  drinkmilk(){
    console.log("the  drinkmilk");
  }
  warm(){
    console.log(this.warmblooded);
  }
}
class Elephant extends Mammal{
  constructor(name,age,predator,warmblooded,brain,instinct){
    super(warmblooded,brain,instinct);
    this.name = name;
    this.age = age;
    this.predator = predator;
  }
  drinkmilk(){
    console.log(`${this.name } is `);
    super.drinkmilk();
  }
  die(){
    console.log(`${this.name} is ${this.age} is`);
    super.die();
  }
}
let elephant = new Elephant("Jumbo",56,false,false,false,false);
elephant.drinkmilk();
elephant.die();
elephant.brainpr();
elephant.warm();
console.log(elephant);
//ES5
function Animal2(brain,instinct) {
    this.brain = brain;
    this.instinct = instinct;
}
Animal2.prototype.die = function () {
    console.log("dead");
}
Animal2.prototype.brainpr = function () {
    console.log(this.brain);
}
function Mammal2(warmblooded, brain,instinct) {
    Animal2.call(this,brain,instinct);
    this.warmblooded = warmblooded;
}
Mammal2.prototype = Object.create(Animal2.prototype);
Mammal2.prototype.constructor = Mammal2;
Mammal2.prototype.drinkmilk = function () {
  console.log("the  drinkmilk");
}
Mammal2.prototype.warm = function () {
  console.log(this.warmblooded);
}
function Elephant2(name,age,predator,warmblooded,brain,instinct) {
  Mammal2.call(this,warmblooded,brain,instinct);
  this.name = name;
  this.age = age;
}
Elephant2.prototype = Object.create(Mammal2.prototype);
Elephant2.prototype.constructor = Elephant2;

Elephant2.prototype.drinkmilk = function () {
  console.log(`${this.name } is `);
  Mammal2.prototype.drinkmilk();
}
Elephant2.prototype.die = function () {
    console.log(`${this.name} is ${this.age} is`);
    Animal2.prototype.die();
}
let eliphant = new Elephant2("Jumbo",56,false,false,false,false);
eliphant.drinkmilk();
eliphant.die();
eliphant.brainpr();
eliphant.warm();
console.log(eliphant);
