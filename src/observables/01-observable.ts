import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next:   valor => console.log(valor),
    error:  error => console.warn('[error]: ', error),
    complete:  () => console.info('[completed]')
}


// **** Creación por metodo estático **** //

// const obs$ = Observable.create();


// **** Creación habitual **** //
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Inmundo');
    
    // Lanzar error para el observer
    // const a = undefined;    
    // a.nombre = 'Fernando';    

    subs.complete();
    
    subs.next('Lola');
    subs.next('Edmundo');
});

// ********* Suscripcion Activa ********* //

// obs$.subscribe( resp => {
//     console.log(resp);
// });
    
// obs$.subscribe(console.log); // Atajo ES2016


// ********* Observer deprecado ********* //

// obs$.subscribe(              // 
//     valor => console.log('subscriber.next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );


// ********* Observer actual ********* //

// obs$.subscribe({                
//     next:  (valor) => console.log('subscriber.next: ', valor),
//     error: (error) => console.warn('error: ', error),
//     complete: () => console.info('Completado')
// });


obs$.subscribe(observer);