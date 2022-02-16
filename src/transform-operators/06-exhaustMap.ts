import { concatMap, exhaustMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<KeyboardEvent>(document, 'click');

click$.pipe(
    // concatMap(() => interval$) // crea un interval por click, pero los pone en cola
    exhaustMap(() => interval$) // al recibir click crea una subs a interval SOLO SI la anterior se ha completado
)
.subscribe(console.log);