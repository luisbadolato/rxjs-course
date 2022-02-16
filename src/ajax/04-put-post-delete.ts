import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.put(url, {
//     id: 1,
//     nombre: 'Perico'
// }, {
//     'Content-Type': 'application/json',
//     'mi-token': 'ASDF123'
// }).subscribe(console.log);

ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ASDF123'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe(console.log);