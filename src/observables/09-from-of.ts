import { of, from } from 'rxjs';

// of = toma argumentos y genera una secuencia
// from = array, promise, iterable, observable

const observer = {
    next: val => console.log('next:',val),
    complete: () => console.log('Completado')
};

const source1$ = from([1,2,3,4,5]); 
const source2$ = of([1,2,3,4,5]);
const source3$ = from('Richal'); 
const source4$ = of('Richal'); 

// source1$.subscribe(observer);
// source2$.subscribe(observer);
// source3$.subscribe(observer);
// source4$.subscribe(observer);


// from se puede usar con promesas mediante fetch y async/await
// pero mejor usar Ajax con funciones de RxJS
const source5$ = from(fetch('https://api.github.com/users/luisbadolato'));

// source5$.subscribe( async(resp) => {
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });


// from también puede usarse con generadores o iterables
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// ye olde ways 
// for(let id of miIterable) {
//     console.log('for...of: ', id);
// }

from(miIterable).subscribe(observer);