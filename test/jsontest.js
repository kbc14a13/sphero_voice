const jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
const contact = JSON.parse(jsontext);
console.log(contact.surname + ", " + contact.firstname);
console.log(contact.phone[1]);