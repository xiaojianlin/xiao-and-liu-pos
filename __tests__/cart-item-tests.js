jest.dontMock('../pos_v2_3rdlib/src/model/cart-item.js');
describe('cart-item', function() {
  var CartItem = require('../pos_v2_3rdlib/src/model/cart-item.js');
  var cartItem = new CartItem({barcode:'ITEM000000',name:'可口可乐',unit:'瓶',price:3},1);

  describe('#getBarcode', function() {
    it('should return corret barcode', function() {
      var result = cartItem.getBarcode();
      expect(result).toEqual('ITEM000000');
    });
  });

  describe('#getPrice', function() {
    it('should return corret price', function() {
      var result = cartItem.getPrice();
      expect(result).toEqual(3);
    });
  });




});
