import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


// Helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( error => of('GRASO ERROR!!!'))
        );


// Http 
const body = document.querySelector('body');

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Submit';

form.append(inputEmail, inputPass, submitBtn);
body.append(form);


// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(ev => ev.preventDefault()),
        map(ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value,
        })),
        // mergeMap(peticionHttpLogin)          // Abrir Network en Browser y comparar
        // switchMap(peticionHttpLogin)
        exhaustMap(peticionHttpLogin)
    );

submitForm$.subscribe(token => {
    console.log(token);
})
