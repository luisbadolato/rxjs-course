import { fromEvent } from 'rxjs';

/****************/
/** DOM Events **/
/****************/

const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (v) => console.log('next',v)
} 

let userInput: string = '';

source1$.subscribe(({ x, y }) => {
    console.log(`X: ${x}, Y: ${y}`);
});


source2$.subscribe(event => {

    userInput += event.key;
    console.log(userInput);
    
});