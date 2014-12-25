jest.dontMock('../pos_v2_3rdlib/src/model/cart-item.js');
describe('cart-item', function() {
  var CartItem = require('../pos_v2_3rdlib/src/model/cart-item.js');
  var cartItem = new CartItem({barcode:'ITEM000001',name:'雪碧',unit:'瓶',price:3},1);

  describe('#getBarcode', function() {
    it('should return corret barcode', function() {
      var result = cartItem.getBarcode();
      expect(result).toEqual('ITEM000001');
    });
  });

  describe('#getPrice', function() {
    it('should return corret price', function() {
      var result = cartItem.getPrice();
      expect(result).toBe(3);
    });
  });

  describe('#hasPromotion', function() {
    it('should return corret hasPromotion', function() {
      var result = cartItem.hasPromotion();
      expect(result).toEqual(false);
    });
  });

  describe('#getOriginSubtotal', function() {
    it('should return corret originSubtotal', function() {
      var result = cartItem.getOriginSubtotal();
      expect(result).toBe(3);
    });
  });

  describe('#getSubtotal', function() {
    it('should return corret subtotal', function() {
      var result = cartItem.getSubtotal();
      expect(result).toBe(3);
    });
  });

  describe('#toString', function() {
    it('should return corret toString', function() {
      var result = cartItem.toString();
      var string = '名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)';
      expect(result).toEqual(string);
    });
  });



});
