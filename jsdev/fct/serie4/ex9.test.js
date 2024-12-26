const filterMotsLongPair=require('./ex9.js');
test('tester la fct filterMotsLongPair ', () => {
   
    expect(filterMotsLongPair(['ka','patrice','ali','hicham'])).toEqual(['ka','hicham']);
  });