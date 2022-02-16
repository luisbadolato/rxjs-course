import { combineLatest, fromEvent, fromEventPattern, merge, of, pluck } from "rxjs";

/* 
const letras$ = of('a','b','c');
const numeros$ = of(1,2,3);
combineLatest([letras$, numeros$]).subscribe(console.log);
*/

/* 
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

combineLatest([
    keyup$.pipe(pluck('key')), 
    click$.pipe(pluck('type'))
]).subscribe(console.log);
*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';
input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1,input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
            pluck('target','value'));
}

combineLatest([
    getInputStream(input1),
    getInputStream(input2)
]).subscribe(console.log);