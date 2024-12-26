// const {summe}=require('./splice')
const { describe } = require('yargs');
const {sum,y,camelCase}=require('./splice.js')
// describe("test somme",()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
      test("test equality array ",()=>{
        expect(y).toEqual([1,2,3,5]);
        // expect(0.1+0.2).toBeCloseTo(0.3);
        // console.log('cc',(0.1+0.2).toFixed(2))
      });
// })
//   describe("test de camelcase",()=>{
    test("test de camelcase",()=>{
        expect(camelCase("hello world")).toBe("helloWorld");
        });
//   })