import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<KeyboardEvent>(document, 'click');

click$.pipe(
    concatMap(() => interval$) // crea un interval por click, pero los pone en cola
)
.subscribe(console.log);