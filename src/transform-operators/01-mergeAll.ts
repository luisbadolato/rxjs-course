import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

import { GithubUser } from "../interfaces/github-user-interface";
import { GithubUsersResp } from "../interfaces/github-users";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput,orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
    
    console.log(users);
    orderList.innerHTML = '';
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login);
        li.append(anchor);

        orderList.append(li)
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(document, 'keyup');


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck('target','value'),    // no puede tiparse adecuadamente, deprecado por map + opt chaining 
    map<KeyboardEvent, string>(event => event.target['value']),
    map<string, Observable<GithubUsersResp>>(value => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    mergeAll(),     // otro cambio, no se puede tipar normalmente sin error
    map<GithubUsersResp, GithubUser[]>(data => data.items)
).subscribe( showUsers );