import { interval, reduce, take, tap } from "rxjs";


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

const totalReducer = (acum: number, actual: number): number => {
    return acum + actual;
}

const resultado = numbers.reduce(totalReducer, 0);
console.log('Resultado Final:', resultado);

interval(500)
.pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});