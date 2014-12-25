jest.dontMock('../pos_v2_3rdlib/src/model/promotion-calculator.js');
jest.dontMock('lodash');

describe('PromotionCalculator', function() {
  var PromotionCalculator,promotions,getBarcode,getPrice;

  beforeEach(function() {
    PromotionCalculator = require('../pos_v2_3rdlib/src/model/promotion-calculator.js');

    promotions =
    [{
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes :
      ['ITEM000000',
      'ITEM000001',
      'ITEM000005']
    }];

    getBarcode = jest.genMockFn();
    getBarcode.mockReturnValue('ITEM000001');

    getPrice = jest.genMockFn();
    getPrice.mockReturnValue(3);
  });

  describe(',calculate', function() {
    it('should return corret number', function() {

      var cartItem =
          {
            item :
              {barcode:'ITEM000001',
              name:'雪碧',
              unit:'瓶',
              price:3},
            count : 5,
            savedCount : 0,
            savedPrice : 0,
            getBarcode : getBarcode,
            getPrice : getPrice
          };

      PromotionCalculator.calculate(cartItem, promotions);
      expect(cartItem.savedCount).toBe(1);
    });
  });

  describe(',calculateCartItems', function() {
    it('should return corret number', function() {

      var cartItems =
          [{
            item :
              {barcode:'ITEM000001',
              name:'雪碧',
              unit:'瓶',
              price:3},
            count : 5,
            savedCount : 0,
            savedPrice : 0,
            getBarcode : getBarcode,
            getPrice : getPrice
          }];

  PromotionCalculator.calculateCartItems(cartItems, promotions);
  expect(cartItems).toEqual(
                      [{
                        item :
                          {barcode:'ITEM000001',
                          name:'雪碧',
                          unit:'瓶',
                          price:3},
                        count : 5,
                        savedCount : 1,
                        savedPrice : 3,
                        getBarcode : getBarcode,
                        getPrice : getPrice
                      }]);
    });
  });
});
