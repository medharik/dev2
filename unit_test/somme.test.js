const {sommeAbsolue,notesReussi}=require('./somme.js');
test('test de la fct sommeAbsolue : 1+2 est bien = 3', () => {
    expect(sommeAbsolue(1, 2)).toBe(3);
  });
test('test de la fct sommeAbsolue : 10+2 est bien = 12', () => {
    expect(sommeAbsolue(10, 2)).toBe(12);
  });
test('test des notes >=10 pour [10,2,13,20] on doit avoir : [10,13,20]', function()  {
    expect(notesReussi([10,2,13,20])).toEqual([10,13,20]);
  });
 
