import { fromEvent, merge, of, pluck } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

merge(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log);


const letras$ = of('a','b','c');
const numeros$ = of(1,2,3);

merge(letras$, numeros$).subscribe(console.log);