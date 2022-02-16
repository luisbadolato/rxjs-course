import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(1000);

click$
.pipe(
    // mergeMap(() => interval$)   // por cada click se genera un interval nuevo, manteniendo activos los anteriores
    switchMap(() => interval$)   // con cada click se cancelan los anteriores intervals y se genera uno nuevo
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});