const arr = [
  { id: 1, name: 'Bruno' },
  { id: 2, name: 'Amora' },
  { id: 3, name: 'Leona' },
  { id: 4, name: 'Ana' },
  { id: 5, name: 'Sansão' },
];

/** for loop */
console.time('for')
const length = arr.length;
let i = 0;

for (i; i < length; i++) {
  console.log(`The name is ${arr[i].name}`)
}
console.timeEnd('for')

/** for of loop */
console.time('forOf')
for (object of arr) {
  console.log(`The name is ${object.name}`)
}
console.timeEnd('forOf')

/** map method */
console.time('map')
arr.map(subject => console.log(`The name is ${subject.name}`))
console.timeEnd('map')

/** forEach method */
console.time('forEach')
arr.map(subject => console.log(`The name is ${subject.name}`))
console.timeEnd('forEach')

/**
 * 
 * for: 2.564ms
 * forOf: 0.286ms
 * map: 0.327ms
 * forEach: 0.165ms
 * 
 */
