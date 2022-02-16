import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras$ = of('a', 'b', 'c');

letras$
.pipe(
    mergeMap( letra => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
)
.subscribe({
    // next: val => console.log('next:', val),
    // error: err => console.log('error:', err),
    // complete: () => console.log('Complete')
});


const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseUp$   = fromEvent<MouseEvent>(document, 'mouseup');
const interval$  = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(console.log);