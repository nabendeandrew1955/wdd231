const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);

console.log(myinfo.get('fname'));
console.log(myinfo.get('lname'));
console.log(myinfo.get('phone'));
console.log(myinfo.get('email'));
console.log(myinfo.get('title'));
console.log(myinfo.get('membership'));
console.log(myinfo.get('feedback'));
console.log(myinfo.get('time'));

document.querySelector('#results').innerHTML = `
 <p> FIRST Name: ${myinfo.get('fname')}</P>
 <P> LAST Name: ${myinfo.get('lname') }</p>
 <p> Phone: ${myinfo.get('phone')} </P>
 <P>Email: ${myinfo.get('email')}</P> 
 <P> Title: ${myinfo.get('title')} </p>
 <p> Membership: ${myinfo.get('membership') } </p>
 <p> Time: ${myinfo.get('time') } </P>
 `