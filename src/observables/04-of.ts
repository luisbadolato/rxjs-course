import { of } from 'rxjs';

const nums: number[] = [1,2,3,4,5,6];

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6],7,8,9);
// const obs$ = of(...nums);
const obs$ = of<any>(
    [1,2], 
    {a:3, b:4},
    function(){},
    true,
    Promise.resolve(false)
);

console.log('Inicio del Obs$');

obs$.subscribe({
    next: (v) => console.log('next', v),
    error: (e) => console.log(e),
    complete: () => console.log('Terminamos la secuencia')
});

console.log('Fin del Obs$');