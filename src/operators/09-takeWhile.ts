import { first, fromEvent, map, takeWhile, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({y}) => y <= 150, true) // si True, se emite el valor q rompe la condicion y completa la suscripcion
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});