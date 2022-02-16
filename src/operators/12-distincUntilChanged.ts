import { animationFrames, distinct, distinctUntilChanged, from, of } from "rxjs";

const numbers$ = of(1,1,2,2,1,1,1,1,1,1,2,2,2,2,3,2);

numbers$
.pipe(
    distinctUntilChanged()  // strict equality
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
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
];

from(personajes).pipe(
    distinctUntilChanged((last, next)=> last.nombre === next.nombre)
).subscribe(console.log);