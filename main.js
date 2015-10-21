
// GENERAL

  var reqInfo = _.map(items, function(item, idx, array){
    return {price: item.price, title: item.title, currency: item.currency_code, materials: item.materials, creator: item.who_made};
  });



// 1. What is the average price of all items?

  var total = 0;

  var prices = _.each(reqInfo, function(item, idx, arr) {
    total += item.price;
  });

  var averagePrice = Math.round(total/prices.length);

  $('#answer1').html("$"+averagePrice);



// 2. Show me an array of items that cost between $14.00 and $18.00 USD?

  var qualifyingItems = _.chain(reqInfo)
  .filter(function(item, idx, arr){
    return item.price > 13.99 && item.price < 18.01;
  })
  .map(function(item, idx, arr){
    return "<b>Title:</b> " + item.title + " " + "<b>Price:</b> $" + item.price + "\n";
  })
  .value();

  $('#answer2').html(qualifyingItems);



// 3. Which item has a "GBP" currency code? Display it's name and price.

  var gbpCurrency = _.chain(reqInfo)
     .filter(function(item, idx, arr) {
      return item.currency === "GBP";
     })
     .map(function(item, idx, arr) {
       return "<b>Title:</b> " +  item.title + " " + "<b>Price:</b> $" + item.price;
     })
     .value();

     $('#answer3').html(gbpCurrency);



// 4. Display a list of all items who are made of wood.

  var woodListings = _.filter(reqInfo, function(item, idx, arr) {
    if(_.contains(item.materials, "wood")){
        return item;
    } else {
    return "";
    }
  });

  var woodTitles = _.map(woodListings, function(item){
    return "<b>Title:</b> " + item.title+"\n";
  })

  $('#answer4').html(woodTitles);



// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

  var materialCount = _.filter(reqInfo, function(item, idx, arr) {
    if(item.materials.length > 7) {
     return item;
    } else {
     return "";
   }
  });

  var materialInfo = _.map(materialCount, function(item){
    return "<b>Title:</b> " + item.title + "\n"
    + item.materials.length + " materials: "
    + item.materials + "\n";
  })

  $('#answer5').html(materialInfo);



// 6. How many items were made by their sellers?

  var whoMade = _.filter(reqInfo, function(item, idx, arr) {
    return item.creator === "i_did"
  })

  $('#answer6').html(whoMade.length);
