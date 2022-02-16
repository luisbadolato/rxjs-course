import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    throttleTime(3000)
)
// .subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    // throttleTime(1000),
    throttleTime(1000, asyncScheduler, {
        leading: true,  // emite primer valor 
        trailing: true  // emite último valor 
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)
