import { from, fromEvent, Observable, range } from "rxjs";
import { filter, map, mapTo } from "rxjs/operators";


range(0,10).pipe(
    filter((val, idx) => {
        console.log('Index:', idx);
        return val % 2 === 1
    })
).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    { tipo: 'heroe', nombre: 'Batman' },
    { tipo: 'heroe', nombre: 'Robin' },
    { tipo: 'villano', nombre: 'Joker' },
    { tipo: 'heroe', nombre: 'Spiderman' },
    { tipo: 'villano', nombre: 'Green Goblin' }
]

from(personajes).pipe(
    filter(val => val.tipo === 'heroe')
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code === 'Enter'),
    mapTo('Has pulsado Enter!')
);

keyup$.subscribe(console.log)