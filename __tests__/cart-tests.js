jest.dontMock('../pos_v2_3rdlib/src/model/cart');
jest.dontMock('../pos_v2_3rdlib/src/model/cart-item');

jest.dontMock('lodash');
jest.dontMock('moment');
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

      cart.cartItems = [{getSubtotal : getSubtotal},
                        {getSubtotal : getSubtotal}];

      var result = cart.getTotalAmount();

      expect(result).toBe(6);
    });
  });

  describe('#getSavedAmount', function() {
    it('should return savedAmount', function() {

      cart.cartItems =[{savedPrice : 3},{savedPrice : 3}];

      var result = cart.getSavedAmount();

      expect(result).toBe(6);
    });
  });


  describe('#toString', function() {
    var moment = require('moment');
      it('should return string', function() {

      toString = jest.genMockFn();
      toString.mockReturnValue('名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)');


      toPromotionString = jest.genMockFn();
      toPromotionString.mockReturnValue('名称：雪碧，数量：1瓶');

      getSubtotal = jest.genMockFn();
      getSubtotal.mockReturnValue(12);

      hasPromotion = jest.genMockFn();
      hasPromotion.mockReturnValue(true);

      cart.cartItems =[{
                       savedPrice : 3,
                       toString : toString,
                       hasPromotion : hasPromotion,
                       toPromotionString : toPromotionString,
                       getSubtotal : getSubtotal}];

      var result = cart.toString();

      var expectText =
          '***<没钱赚商店>购物清单***\n' +
          '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
          '----------------------\n' +
          '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
          '----------------------\n' +
          '挥泪赠送商品：\n' +
          '名称：雪碧，数量：1瓶\n' +
          '----------------------\n' +
          '总计：12.00(元)\n' +
          '节省：3.00(元)\n' +
          '**********************';

      expect(result).toEqual(expectText);
    });
  });

});
