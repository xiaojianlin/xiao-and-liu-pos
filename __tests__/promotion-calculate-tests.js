jest.dontMock('../pos_v2_3rdlib/src/model/promotion-calculator.js');
jest.dontMock('lodash');

describe('PromotionCalculator', function() {
  describe('#calculate', function() {
    it('should return corret number', function() {
      var PromotionCalculator = require('../pos_v2_3rdlib/src/model/promotion-calculator.js');

      var promotions =
          [{
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes :
              ['ITEM000000',
              'ITEM000001',
              'ITEM000005']
          }];

      var getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      var getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3);

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
});
