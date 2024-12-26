const trierParLongeur=require('./ex7.js');
test("tester la fct trierParLongeur, ['ali','ka','hicham'] => ['ka','ali','hicham'] ", () => {
    expect(trierParLongeur(['ali','ka','hicham'])).toEqual(['ka','ali','hicham']);
  });
test("tester la fct trierParLongeur, ['ali','ka','hicham'] => ['ka','ali','hicham'] ", () => {
    expect(trierParLongeur(['john','sam','patrice'])).toEqual(['sam','john','patrice']);
  });
