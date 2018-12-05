class Bike {
  constructor(
    public price: number,
    public max_speed: string,
    public miles?: number
  ){
    this.price = price
    this.max_speed = max_speed
    this.miles = 0
  }
}

const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "35mph");
const bike3 = new Bike(500, "40mph");

function displayInfo(bike) {
  console.log(`Price: ${bike.price}`)
  console.log(`Max Speed: ${bike.max_speed}`)
  console.log(`Miles: ${bike.miles}`)
};

function ride(bike) {
  console.log('Riding');
  bike.miles += 10;
};

function reverse(bike) {
  console.log('Reversing');
  if (bike.miles > 4) {
    bike.miles -= 5;
  };
};

ride(bike1);
ride(bike1);
ride(bike1);
reverse(bike1);
displayInfo(bike1);
ride(bike2);
ride(bike2);
reverse(bike2);
reverse(bike2);
displayInfo(bike2);
reverse(bike3);
reverse(bike3);
reverse(bike3);
displayInfo(bike3);
