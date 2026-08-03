 const getstring = window.location.search;
console.log(getstring);

const myinfo = new URLSearchParams(window.location.search);

console.log(myinfo);

// console.log(myinfo.get('fname'));
// console.log(myinfo.get('lname'));
// console.log(myinfo.get('phone'));
// console.log(myinfo.get('membership'));
// console.log(myinfo.get('feedback'));
// console.log(myinfo.get('time'));
// console.log(myinfo.get('title'));

 document.querySelector('#results').innerHTML = `
<p>Appointment for ${myinfo.get('fname')} ${myinfo.get('lname')}</p>
 <p>contact ${myinfo.get('phone')} on ${myinfo.get('time')} in the organisation ${myinfo.get('title')}</p>
 <p>Your phone: ${myinfo.get('phone')}</p>`
