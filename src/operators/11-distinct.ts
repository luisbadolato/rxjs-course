import { distinct, from, of } from "rxjs";

const numbers$ = of(1,1,2,1,2,3,2,3,4,3,2,1,3,4,2,3,4,3,5,5,3,2,1);

numbers$
.pipe(
    distinct()  // strict equality
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'Superman' },
    { nombre: 'Yoshi' },
    { nombre: 'Goku' },
    { nombre: 'Megaman' },
    { nombre: 'Ironman' },
    { nombre: 'Superman' },
    { nombre: 'Cacaman' },
    { nombre: 'Batman' },
    { nombre: 'Yoshi' },
    { nombre: 'Ironman' },
    { nombre: 'Cacaman' },
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);