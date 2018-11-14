function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
    this.punch = function(ninja) {
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        return this;
    }
    this.kick = function(ninja) {
        const damage = strength * 15;
        ninja.health -= damage;
        console.log(ninja.name + "was kicked by " + this.name + " and lost " + damage + " health!" )        
        return this;
    }
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.showStats();
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.kick(blueNinja);
blueNinja.showStats();