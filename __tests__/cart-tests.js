jest.dontMock('../pos_v2_3rdlib/src/model/cart');
jest.dontMock('lodash');
describe('Cart', function() {
  describe('#addCartItem', function() {
    it('should update cartItems', function() {
      var Cart = require('../pos_v2_3rdlib/src/model/cart');
      var cart = new Cart();

      getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      cart.cartItems = [{
                        item :
                          {barcode:'ITEM000001',
                          name:'雪碧',
                          unit:'瓶',
                          price:3},
                        count : 1,
                        savedCount : 0,
                        savedPrice : 0,
                        getBarcode : getBarcode
                      }];
      var cartItem = {
                      item :
                        {barcode:'ITEM000001',
                        name:'雪碧',
                        unit:'瓶',
                        price:3},
                      count : 1,
                      savedCount : 0,
                      savedPrice : 0,
                      getBarcode : getBarcode
                      };

      cart.addCartItem(cartItem);
      expect(cart.cartItems[0].count).toBe(2);

    });
  });
});
