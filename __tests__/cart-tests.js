jest.dontMock('../pos_v2_3rdlib/src/model/cart');
jest.dontMock('lodash');
describe('Cart', function() {
  var Cart,cart;

  beforeEach(function(){
    Cart = require('../pos_v2_3rdlib/src/model/cart');
    cart = new Cart();
  });

  describe('#addCartItem', function() {
    it('should update cartItems', function() {
      getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      cart.cartItems = [{
                        item :
                          {barcode:'ITEM000001',
                          name:'雪碧',
                          unit:'瓶',
                          price:3},
                        count : 1,
                        getBarcode : getBarcode
                      }];
      var cartItem = {
                      item :
                        {barcode:'ITEM000001',
                        name:'雪碧',
                        unit:'瓶',
                        price:3},
                      count : 1,
                      getBarcode : getBarcode
                      };

      cart.addCartItem(cartItem);
      expect(cart.cartItems[0].count).toBe(2);
    });
  });

  describe('#getTotalAmount', function() {
    it('should return totalAmount', function() {
      getSubtotal = jest.genMockFn();
      getSubtotal.mockReturnValue(3);

      cart.cartItems = [{getSubtotal : getSubtotal}];

      var result = cart.getTotalAmount();

      expect(result).toBe(3);
    });
  });

});
