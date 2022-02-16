import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    tap<MouseEvent>(console.log), 
    // map(event => ({                                      // DESTRUCTURING OFF
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map(({ clientX, clientY }) => ({ clientX, clientY })),  // DESTRUCTURING ON FIRE!
    first(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});