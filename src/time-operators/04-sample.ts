import { fromEvent, map, pluck, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    sampleTime(2000),   // más eficiente para filtrar procesamiento de map colocarlo antes
    map(({ x, y }) => ({ x, y }))
)
.subscribe(console.log);


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
.pipe(
    pluck('key'),
    sampleTime(1000)
)
.subscribe(key => console.log(key));