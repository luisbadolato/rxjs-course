import { fromEvent, map, mapTo, pluck, range } from "rxjs";


range(1,5).pipe(
    map<number,string>(val => (val * 10).toString())
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyup$.subscribe(console.log);


const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);
keyupCode$.subscribe(code => console.log('map', code));


const keyupPluck1$ = keyup$.pipe(pluck('key'));
const keyupPluck2$ = keyup$.pipe(pluck('target','baseURI'));

// keyupPluck1$.subscribe(code => console.log('pluck', code));
// keyupPluck2$.subscribe(uri => console.log('pluck', uri));


const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);
keyupMapTo$.subscribe(coso => console.log('mapTo', coso));