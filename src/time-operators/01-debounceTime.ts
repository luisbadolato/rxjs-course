import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    debounceTime(3000)
)
.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    debounceTime(800),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)
