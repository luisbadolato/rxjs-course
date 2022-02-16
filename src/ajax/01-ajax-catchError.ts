import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

const handleError = (response: Response) => {

    if (!response.ok) throw new Error(response.statusText);

    return response;
}

const handleAjaxError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

const fetchPromise = fetch(url);

// fetchPromise         // Catch no atrapa error porque fetch siempre devuelve objeto
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('Error en Url', err))

// fetchPromise        // 4 métodos para implementar basicamente Try/Catch
//     .then(handleError)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('Error en Url', err))

ajax(url).pipe(
    // map(resp => resp.response),     // una opción
    pluck('response'),                 // otra opción
    catchError(handleAjaxError)
).subscribe(users => console.log('users:', users))

