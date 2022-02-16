import { auditTime, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe({
    next: val => console.log('audit', val),
    complete: () => console.log('Complete Interval')
});