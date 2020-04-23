import moment from 'moment';

// const rightNow = moment();
// console.log(rightNow);

// const birthday = moment('1987-01-4', 'YYYY-MM-DD');
// console.log(birthday.format('LLLL'));

// console.log(birthday.fromNow());

// const twoWeeksFromNow = moment().add(14, 'weeks');
// console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.toString());