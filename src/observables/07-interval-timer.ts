import { timer, interval } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
const timer1$    = timer(3000);         // Tarda 1 segundo en emitir el primer valor y disparar el complete
const timer2$    = timer(2000, 1000);   // Tarda 2 segundos en iniciar y crea un interval de 1 segundo
const timer3$    = timer(hoyEn5);   // Inicia en 5 segundos desde la fecha actual


console.log('Inicio');
// interval$.subscribe(observer);
timer1$.subscribe(observer);
console.log('Fin');
