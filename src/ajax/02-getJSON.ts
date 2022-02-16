import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obj$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ASDF123'
});

obj$.subscribe(data => console.log('data:', data));