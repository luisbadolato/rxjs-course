import { asyncScheduler, of, range } from 'rxjs';

const srcOf$ = of(1,2,3,4,5);
const srcRange$ = range(1, 5, asyncScheduler);

console.log('Inicio');
// srcOf$.subscribe(console.log);
srcRange$.subscribe(console.log);
console.log('Fin');
