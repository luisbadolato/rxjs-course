import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next:   valor => console.log('next:', valor),
    error:  error => console.warn('error: ', error),
    complete:  () => console.info('[completed]')
}

const intervalo$ = new Observable<number>( subscriber => {

    let seconds: number = 0;

    const interval = setInterval(() => {
        seconds++;
        subscriber.next(seconds);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Se llama al unsubscribe
    return () => {
        clearInterval(interval);
        console.log('setInterval apagado');
    }
});

// ****** Mostrar contador cada segundo ****** //
// const subscription1 = intervalo$.subscribe( num => console.log('Num1:', num));
// const subscription2 = intervalo$.subscribe( num => console.log('Num2:', num));
// const subscription3 = intervalo$.subscribe( num => console.log('Num3:', num));


const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

// setTimeout(() => {
//     subscription1.unsubscribe();
//     const subscription3 = intervalo$.subscribe( num => console.log('Num3:', num));
// }, 3000);

subscription1.add(subscription2.add(subscription3));


setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('setTimeout completado');
    
}, 6000);