const t=["hp",'dell','sony'];
const maj=t.map(e=>e.toUpperCase());
console.log(maj.filter(e=> !e.includes('E')))