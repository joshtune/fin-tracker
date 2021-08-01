import {Options, RRule} from 'rrule'

class Scheduler extends RRule {
  constructor(options: Partial<Options>) {
    super(options);
  }
}

// interface FinancialExpense {
//   amount: number;
//   schedule: Scheduler;
// }
//
// class FinancialSchedule {
//
// }

// const rent = new Scheduler({
//   freq: RRule.MONTHLY,
//   interval: 1,
//   dtstart: new Date(Date.UTC(2012, 0, 1)),
//   until: new Date(Date.UTC(2012, 3, 1))
// });
//
const paycheck = new Scheduler({
  freq: RRule.WEEKLY,
  interval: 2,
  dtstart: new Date(Date.UTC(2012, 0, 1)),
  until: new Date(Date.UTC(2012, 3, 1))
});

import moment from 'moment';

console.log(paycheck.all());

// console.log(moment.utc('2012-01-01T00:00:00.000Z,'));
console.log(moment.utc('2016-01-01T23:35:01').format('YYYY-MM-DD HH:mm:ss'));

const dates = paycheck.all();
const formattedDates = [];
const otherDates: { name: string, date: string}[] = [];

for (let i = 0; i < dates.length; ++i) {
  let date = dates[i];
  formattedDates.push({
    name: 'joe',
    date: moment(date).format('YYYY-MM-DD HH:mm:ss')
  });
}

dates.forEach(date => otherDates.push({ name: 'john', date: moment(date).format('YYYY-MM-DD HH:mm:ss')}));

console.log(formattedDates);
console.log(otherDates);
