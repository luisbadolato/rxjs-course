import { distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Zero' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Zero' },
    { nombre: 'Zero' },
    { nombre: 'Zero' },
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);