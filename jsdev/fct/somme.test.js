const {sommeAbsolue,TVA,dif,notes}=require('./somme.js');
// const sum=require('./sum.s');

test('test  de la fct somme :  1 + 2 = 3', () => {
    expect(sommeAbsolue(1, 20)).toBe(3);
  });
test('test la fct somme :  -1 + -2 = 3', () => {
    expect(sommeAbsolue(1, 2)).toBe(3);
  });
test('test du tableau  [12,18,10]', () => {
    expect(notes).toEqual([12,18,10]);
  });