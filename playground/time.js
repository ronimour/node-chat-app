const moment = require('moment');

var date = moment();
console.log(date.format('hh:mm a'));
var past = date.subtract(15,'minutes');
console.log(past.fromNow());
