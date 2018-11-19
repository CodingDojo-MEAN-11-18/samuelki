function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
        warehouse = {
          paint: {
            product: 'Neon Green Paint',
            directions: function() { return 'mix it!' }
          },
          brush: {
            product: 'Horsehair brush',
            directions: function() { return 'start painting!' }
          },
          tarp: {
            product: 'Large tarp',
            directions: function() { return 'cover the floor' }
          }
        };
    
        resolve(warehouse[item]);
      }, deliveryTime);
  })

}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');

tarp
  .then(function (item) {
    receivedItem(item);
    return paint;
  })
  .then(function (item) {
    receivedItem(item);
    return brush;
  })
  .then(receivedItem)
  .catch(error => {
    console.log(error.message);
  })

// orderSupplies('paint', receivedItem);
// orderSupplies('brush', receivedItem);

// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   havePaint = true;
// });


const products = ['tarp', 'paint','brush'];

function order(items) {
  console.log('products', items);
  const received = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    console.log('item is', item);

    orderSupplies(item, function(product) {
      // console.log('product', product);

      received[index] = product;

      // console.log(received);

      if (received.filter(thing => thing).length === items.length) {
        received.forEach(receivedItem);
      }

    });
  } 
}

order(products);

// // orderSupplies('brush', function (item) {
// //   if (havePaint) {
// //     receivedItem(item);
// //   } else {
// //     const timer = setInterval(function () {
// //       console.log('checking for paint....');

// //       if (havePaint) {
// //         receivedItem(item);
// //         clearInterval(timer);
// //       }
// //     }, 100);
// //   }
// // });

// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//   console.log('brush ', item);
//   if (havePaint) {
//     return receivedItem(item);
//   } 

//   console.log('checking paint....');

//   setTimeout(function () {
//     handleBrush(item);
//   }, 50);
// }


const paint = new Promise(function(resolve, reject) {
  orderSupplies('paint', resolve);
});

const brush = new Promise(function(resolve, reject) {
  orderSupplies('brush', resolve);
});

paint
  .then(function (item) {
    receivedItem(item);

  })
  .then(function () {
    return brush;
  })
  .then(function (item) {
    receivedItem(item);
  })
  .catch(console.log);
