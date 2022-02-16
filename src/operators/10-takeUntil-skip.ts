import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";


const boton = document.createElement('button');
boton.innerText = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');
const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log('Tap before skip')),
    skip(2),     // Se salta los dos 1º clicks al boton
    tap(() => console.log('Tap after skip'))
);

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});

