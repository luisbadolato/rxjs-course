import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next:   valor => console.log('next:', valor),
    error:  error => console.warn('error: ', error),
    complete:  () => console.info('[completed]')
}

const interval$ = new Observable<number>( subscriber => {

    const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000
    );

    return () => {
        console.log('Intervalo eliminado');
        clearInterval(intervalID);
    };
});

/*  
*** Características de SUBJECT *** 
    1 - Casteo Múltiple
    2 - Es un Observer
    3 - Tiene next, error y complete
*/

const subject$ = new Subject();
const subjectSubscription = interval$.subscribe(subject$);

// Con cada subscripción se genera un Random diferente
// const subscription1 = interval$.subscribe( num => console.log('Subs1: ', num));
// const subscription2 = interval$.subscribe( num => console.log('Subs2: ', num));

// Al crear subscripciones directamente al Subject 
// obtenemos en ambas el mismo Random
// const subscription3 = subject$.subscribe( num => console.log('Subs3: ', num));
// const subscription4 = subject$.subscribe( num => console.log('Subs4: ', num));


setTimeout(() => {
    
    subject$.next(10);
    
    subject$.complete();
    
    subjectSubscription.unsubscribe();
    
}, 4500);

const subscription5 = subject$.subscribe(observer);
const subscription6 = subject$.subscribe(observer);