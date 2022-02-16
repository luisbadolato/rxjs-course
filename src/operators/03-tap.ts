import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap({
        next: (v) => console.log('tap antes', v),
        error: (e) => console.log('error', e),
        complete: () => console.log('tap1 complete')
    }),
    map( val => val * 10 ),
    tap({
        next: (v) => console.log('tap despues', v),
        error: (e) => console.log('error', e),
        complete: () => console.log('tap2 complete')
    })
)
.subscribe(val => console.log('subscription', val));