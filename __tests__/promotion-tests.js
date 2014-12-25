jest.dontMock('../pos_v2_3rdlib/src/model/promotion.js');
describe('promotion', function() {
  describe(',all', function() {
    it('should return corret promotion array', function() {
      var Promotion = require('../pos_v2_3rdlib/src/model/promotion.js');
      
      var result = Promotion.all();

      expect(result).toEqual(
        [ new Promotion('BUY_TWO_GET_ONE_FREE', [
          'ITEM000000',
          'ITEM000001',
          'ITEM000005'
          ])
        ]
      );
    });
  });
});
