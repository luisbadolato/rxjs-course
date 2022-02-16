import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'luisbadolato';

forkJoin({
    usuario : ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    gists   : ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
    repos   : ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
                  .pipe(catchError(err => of([])))  // manejo de errores individual
}).pipe(
    catchError(err => of(err))      // manejo de errores conjunto, either / or
)
// .subscribe(console.log);
