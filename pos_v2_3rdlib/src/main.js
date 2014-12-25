var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Promotion = require('./model/promotion');
var PromotionCalculator = require('./model/promotion-calculator');
var Item = require('./model/item');
var _ = require('lodash');

function printInventory(tags) {

  var scanner = new Scanner(Item.all());

  var cart = new Cart();

  _.forEach(tags, function(tag) {

    var cartItem = scanner.scan(tag);

    cart.addCartItem(cartItem);
  });

  var promotions = Promotion.all();
  PromotionCalculator.calculateCartItems(cart.cartItems, promotions);

  console.log(cart.toString());
}

exports.printInventory = printInventory;
