jest.dontMock('../pos_v2_3rdlib/src/model/scanner');
jest.dontMock('../pos_v2_3rdlib/src/model/cart-item');
jest.dontMock('lodash');
describe('Scanner', function() {
  describe('#scan', function() {
    it('should return corret array1', function() {

      var Scanner = require('../pos_v2_3rdlib/src/model/scanner');
      var items =[{barcode:'ITEM000000',name:'可口可乐',unit:'瓶',price:3}];

      var scanner = new Scanner(items);

      var result = scanner.scan('ITEM000000');

      expect(result.count).toBe(1);
      expect(result.item).toEqual({barcode:'ITEM000000',name:'可口可乐',unit:'瓶',price:3});
    });

    it('should return corret array2', function() {

      var Scanner = require('../pos_v2_3rdlib/src/model/scanner');
      var items =[{barcode:'ITEM000003',name:'荔枝',unit:'斤',price:15}];

      var scanner = new Scanner(items);

      var result = scanner.scan('ITEM000003-2');

      expect(result.count).toBe(2);
      expect(result.item).toEqual({barcode:'ITEM000003',name:'荔枝',unit:'斤',price:15});
    });
  });
});
