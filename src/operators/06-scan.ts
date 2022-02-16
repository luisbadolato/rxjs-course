import { from, map, reduce, scan } from "rxjs";


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc:number, curr:number) => acc + curr;

//Reduce
from(numeros)
.pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(val => console.log('Reduce', val));

//Scan
from(numeros)
.pipe(
    scan(totalAcumulador, 0)
)
.subscribe(val => console.log('Scan', val));

//Redux (masomeno)
interface Usuario {
    id?: string;
    isLogged?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'freo', isLogged: false, token: null },
    { id: 'freo', isLogged: true, token: 'ABC' },
    { id: 'freo', isLogged: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario>((acc: Usuario, curr: Usuario) => {
        return {...acc, ...curr}
    })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);