import { concat, interval, of, take } from "rxjs";


const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(13),
    [1434,2345]
).subscribe(console.log);