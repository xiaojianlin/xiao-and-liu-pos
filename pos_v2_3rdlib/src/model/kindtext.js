function KindText(cartItems){
  this.cartItems = cartItems;
}

KindText.prototype.getCartItemsText = function(cartItems){
  cartItemsText = '';
  var promotion = new Promotion();
  _.forEach(cartItems,function(cartItem){
    var promotionCount = promotion.getPromotionCount(cartItem);
    var proCount = parseInt(promotionCount/3);
    var subtotal = 0;
    item = cartItem.item;
    count = cartItem.count;

    if (proCount > 0) {
      subtotal = (count - proCount) * item.price;
    } else {
      subtotal = count * item.price;
    }
    cartItemsText += '名称：' + item.name +
                     '，数量：' +count + item.unit +
                     '，单价：' +item.price.toFixed(2) +
                     '(元)，小计：' +subtotal.toFixed(2) +
                     '(元)\n';
  });
  return cartItemsText;
};

KindText.prototype.getPromotionText = function(cartItems) {
  var promotionText = '';
  var promotionArrays = [];
  var promotion = new Promotion();
  _.forEach(cartItems, function(cartItem){

    promotionArrays = promotion.getPromotionArray(cartItem);
    if(promotionArrays.length > 0) {

      _.forEach(promotionArrays,function(promotionArray){
        promotionText += '名称：' + promotionArray.name +
                         '，数量：' + promotionArray.num +
        promotionArray.unit + '\n';
      });
    }
  });
  return promotionText;
};

KindText.prototype.getSummaryText = function(cratItems) {
  var summaryText = '';
  var sum = 0;
  var allTotal = 0;
  _.forEach(cartItems,function(cartItem){
    allTotal += cartItem.item.price * cartItem.count;
  });
  var promotionTotal = getPromotionTotal(cartItems);
  sum = allTotal - promotionTotal;
  summaryText +='总计：' + sum.toFixed(2) +
                '(元)\n' +
                '节省：' + promotionTotal.toFixed(2) +
                '(元)\n';
  return summaryText;
};

KindText.prototype.getSummaryText = function(cartItems) {
  var summaryText = '';
  var sum = 0;
  var allTotal = 0;
  var promotionTotal = 0;
  var promotionArray = [];
  var promotion = new Promotion();
  _.forEach(cartItems,function(cartItem){
    allTotal += cartItem.item.price * cartItem.count;
  });

  _.forEach(cartItems, function(cartItem) {
    promotionArrays = promotion.getPromotionArray(cartItem);
    if(promotionArrays.length > 0) {
      _.forEach(promotionArrays, function(promotionArray) {
        promotionTotal += promotionArray.price * promotionArray.num;
      });
    }
  });
  sum = allTotal - promotionTotal;
  summaryText +='总计：' + sum.toFixed(2) +
                '(元)\n' +
                '节省：' + promotionTotal.toFixed(2) +
                '(元)\n';
  return summaryText;
};
