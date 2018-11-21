module.exports = function() {
  return {
    add: function(num1, num2) {
      console.log("The sum is:", num1 + num2);
    },
    multiply: function(num1, num2) {
      console.log("The multiplied value is:", num1 * num2);
    },
    square: function(num) {
      console.log("The number squared is:", num * num);
    },
    random: function(num1, num2) {
      randomNumber = Math.floor((Math.random() * num2) + num1);
      console.log("Random number between", num1, "and", num2, "is:", randomNumber);
    }
  }
};