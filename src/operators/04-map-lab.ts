import { fromEvent, map, tap } from "rxjs";

const body = document.querySelector('body');
const texto = document.createElement('div');
const texto2 = document.createElement('p');

texto.innerHTML = `
<br/> 
Phasellus cursus ante id libero tristique, sit amet varius massa ullamcorper. Quisque vitae hendrerit augue, in egestas nibh. Nulla sodales felis a nulla pretium, vitae egestas turpis dignissim. Nullam ut ex ut nisi condimentum fringilla. Praesent condimentum suscipit urna ac luctus. Suspendisse mollis tincidunt consequat. Donec imperdiet, purus imperdiet euismod viverra, turpis mi ullamcorper nibh, quis placerat augue ligula eu erat. Suspendisse potenti. Vestibulum mattis vulputate diam, eget posuere metus maximus sit amet. Suspendisse id urna vestibulum, sagittis purus suscipit, semper risus.
<br/><br/> 
Fusce cursus mauris eu tortor venenatis tempor. Proin non eleifend ipsum. Mauris quis tellus id magna scelerisque rhoncus tincidunt at arcu. Integer feugiat fermentum tempus. Donec est mauris, tristique vel sagittis id, blandit non ante. Cras et eros neque. Proin tincidunt tempor ullamcorper. Integer elit purus, vehicula id lorem nec, porttitor sagittis nisi. Nam in rhoncus diam, eu accumsan justo. Curabitur in venenatis elit. Nullam dolor urna, placerat id dictum vitae, rhoncus quis elit. Nullam volutpat id dui quis mattis.
<br/><br/> 
Vivamus maximus ullamcorper enim, eget placerat enim pretium ut. Proin maximus ac ante vel dignissim. Morbi ornare semper sem, id luctus odio euismod quis. Nulla vel nunc non libero pulvinar feugiat sit amet eget magna. Suspendisse potenti. Curabitur porta viverra nisl quis sollicitudin. Fusce orci justo, venenatis quis lorem vel, varius suscipit urna. Pellentesque condimentum pulvinar pretium. Curabitur eu odio vel tellus pretium tempus. Suspendisse sapien ex, egestas in laoreet nec, consequat ut dolor.
<br/><br/> 
Sed quis augue est. Nulla at tempus justo, blandit ultricies orci. Vestibulum dignissim et ex sed pulvinar. Etiam a sollicitudin sem. Phasellus erat odio, ultrices quis ipsum vitae, pellentesque tempor libero. Quisque pharetra eget enim a lacinia. Praesent et lectus non ex eleifend ullamcorper ac eget massa. Donec commodo ac ex quis aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vestibulum tristique justo eget bibendum. Ut non tempor est. Pellentesque volutpat, massa sed sodales rhoncus, leo lorem egestas orci, a varius massa justo non dolor. Cras ut lacus sodales, consequat augue scelerisque, commodo nisl. Aliquam viverra mi eget pharetra congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/> 
Pellentesque sit amet nisl in lorem convallis mollis vel vitae orci. Donec ultricies vel metus sit amet vulputate. Phasellus semper egestas purus non lacinia. Pellentesque convallis enim mattis, consequat lectus vel, pharetra leo. Mauris nec nisi egestas, dapibus nisi sit amet, faucibus ligula. Donec pretium libero at metus posuere, eleifend scelerisque mi egestas. Duis condimentum nibh molestie magna consectetur, id vestibulum felis rutrum. Nam non eros orci. Proin mollis leo at quam dictum commodo. Duis non quam vel justo iaculis porttitor. Curabitur nec leo feugiat, sodales libero eu, luctus mauris. Sed tincidunt enim in placerat elementum. Mauris non sagittis lorem, et ultrices massa. Nullam semper, erat ac vestibulum consectetur, enim nibh placerat ligula, quis hendrerit orci orci placerat nunc. Vestibulum lacinia, dui et pharetra ultricies, neque nulla mattis lectus, sit amet dictum neque turpis vitae est.
<br/><br/> 
Aenean sollicitudin fermentum dui quis congue. Mauris finibus volutpat augue, quis feugiat purus lacinia ac. Etiam ullamcorper leo in sem maximus, eu auctor quam imperdiet. Proin condimentum ligula arcu. Nulla facilisi. Mauris sit amet sagittis augue. Fusce luctus, turpis ut cursus blandit, arcu mi semper mauris, id imperdiet erat ante pellentesque purus. Proin et leo eget tellus aliquam semper. Proin a urna a dolor sodales aliquam in eget risus. Mauris nec tellus accumsan, interdum metus eu, convallis lacus. Praesent a porttitor lorem. Morbi gravida leo eu velit commodo viverra. Duis consectetur risus sit amet magna interdum pharetra. Donec ac luctus metus, eget molestie sapien. Proin vitae purus cursus, scelerisque arcu non, tincidunt tortor. Nulla facilisi.
<br/><br/> 
Etiam iaculis tellus sed ligula cursus, in faucibus arcu hendrerit. Quisque mauris odio, vestibulum vitae consequat non, gravida a lectus. Curabitur eget nulla nisi. Maecenas condimentum sagittis cursus. Praesent sit amet leo in leo molestie ullamcorper mollis vitae mauris. Nullam viverra velit eu dolor convallis, sed congue tortor dignissim. Duis rutrum quis justo sed faucibus. Ut sem quam, maximus vitae nibh quis, porta consequat arcu. Sed sem dolor, dictum nec nibh nec, varius ullamcorper ipsum. Nunc sit amet sapien pellentesque, tincidunt leo a, fringilla lacus. Mauris sit amet condimentum sapien, sed sodales enim.
<br/><br/> 
Nunc blandit metus ut orci convallis, vel rutrum odio scelerisque. Nunc tempor ante ac leo dignissim tempor. Nam consectetur convallis ex at rhoncus. Cras faucibus hendrerit dui, sit amet interdum lorem gravida ac. Morbi dictum urna at nisi ultrices, non tempor nibh faucibus. Sed sit amet congue ipsum. Phasellus id eleifend tellus. Aenean euismod, est eget feugiat fermentum, nibh arcu tristique ligula, nec fermentum dui nisi ut sem. Praesent vel ligula dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae tortor ut ligula consequat vestibulum. Sed arcu purus, sagittis ac auctor id, ultricies at urna. Mauris consequat tincidunt lacinia. Proin id tellus et nunc viverra porttitor et ornare odio. Fusce mattis quis felis id mollis. Phasellus finibus ex vel scelerisque faucibus.
<br/><br/> 
Quisque id pellentesque ex. Vestibulum sit amet nibh sapien. Praesent eget vehicula mauris, sit amet dapibus dui. In eget arcu nulla. Morbi posuere fringilla efficitur. Aliquam nec facilisis ligula. Nunc suscipit vel enim id dictum. Curabitur fermentum non felis vel finibus.
<br/><br/> 
Morbi egestas auctor turpis a finibus. Mauris eget fermentum lorem. Integer eu scelerisque ante, eu tempus tellus. Maecenas consequat blandit odio, nec aliquam augue aliquam at. Donec fringilla tellus non nulla tempus molestie. Duis elit ex, vehicula ac dignissim in, gravida eget purus. Vivamus ante purus, laoreet sed sapien eget, dapibus imperdiet augue. Donec elit ante, pulvinar nec hendrerit eu, mattis vitae eros. Quisque ac laoreet lacus, in rhoncus ipsum. Suspendisse nec dolor hendrerit, egestas nulla ut, volutpat metus. Donec molestie nibh leo, sed dignissim neque varius eu. Nullam mollis ex eu purus rhoncus ultricies. Nunc laoreet nunc at nisi tincidunt, ac laoreet nisi aliquet. Cras et nunc velit. Pellentesque facilisis pretium metus, quis dictum neque maximus sit amet.
<br/><br/> 
Phasellus blandit purus at laoreet aliquet. Donec ex tellus, posuere ac pretium eu, placerat ornare leo. Pellentesque ac iaculis est. Ut ut elit sit amet nibh semper luctus quis a dolor. Vestibulum placerat a dui vulputate scelerisque. Curabitur quis fermentum sapien. Mauris in ultrices mauris, eget bibendum neque. Fusce finibus neque vel venenatis condimentum. Cras vel dolor ac sem dapibus ultrices. Morbi vel lorem tristique, laoreet purus et, interdum tortor. Nulla accumsan quam id blandit placerat.
<br/><br/> 
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eu urna lorem. Aliquam erat volutpat. Nulla quis finibus mauris, in accumsan tortor. Aenean mollis dictum nulla, at rutrum metus rhoncus quis. Cras bibendum lacus non justo tempor mollis. Phasellus sit amet turpis vel sapien egestas laoreet quis viverra urna. In lorem dolor, gravida sed accumsan vel, pellentesque a est. Duis bibendum diam aliquam mi molestie, quis venenatis nisi dignissim. Integer egestas nibh et tristique vehicula. Praesent lorem lectus, cursus ut dolor eget, efficitur condimentum sem. Nullam varius nisi a dui sodales, id consectetur leo dictum. Aenean dapibus interdum sapien euismod dignissim.
<br/><br/> 
Curabitur lobortis lectus id elit blandit, at eleifend sapien tincidunt. Sed ut varius tellus. Morbi rutrum gravida diam, id vulputate nulla gravida sit amet. Proin ornare mattis condimentum. Fusce libero ex, interdum non bibendum sed, varius ut mi. Morbi dapibus est sit amet arcu molestie pulvinar. Curabitur vestibulum magna diam, vitae ultrices enim eleifend non.
<br/><br/> 
Integer finibus risus id dui tristique, non aliquam dui vehicula. Mauris eget elit tempor, feugiat nisl sit amet, iaculis magna. Proin in euismod urna. Proin mi arcu, pulvinar eget ligula in, blandit tincidunt massa. Morbi nec nulla libero. Proin justo felis, volutpat in pulvinar et, dignissim at metus. Nulla facilisi. Vestibulum mattis enim efficitur posuere vulputate.
<br/><br/> 
Morbi ligula ligula, laoreet ut sodales varius, tempus bibendum sem. Curabitur semper hendrerit lorem, eu condimentum nibh rhoncus nec. Ut convallis justo non libero posuere faucibus. Suspendisse imperdiet magna in egestas facilisis. Praesent viverra tempor eros, ac cursus eros commodo id. Donec id mauris massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex sit amet felis imperdiet lobortis. Fusce vel massa iaculis, semper tellus tempus, lobortis quam. Nulla a augue egestas, sollicitudin nunc nec, auctor neque. Quisque sodales lacus sit amet euismod posuere. Proin semper dui non lacus ornare tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac vulputate risus. Integer felis arcu, imperdiet ac nunc vitae, aliquet mollis tellus. Ut finibus ipsum ac neque suscipit, id feugiat est posuere. 

`;
texto2.innerHTML = texto.innerHTML;

body.append(texto);
body.append(texto2);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion calculo progreso
const calcScrollPercent = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return percent;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log); 

const progress$ = scroll$.pipe(
    map(calcScrollPercent),
    tap(console.log)
);

progress$.subscribe( percent => {
    progressBar.style.width = `${percent}%`;
});