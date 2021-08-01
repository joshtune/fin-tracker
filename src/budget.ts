import {Options, RRule} from 'rrule'

class Scheduler extends RRule {
  constructor(options: Partial<Options>) {
    super(options);
  }
}

interface FinancialExpense {
  amount: number;
  schedule: Scheduler;
}

class FinancialSchedule {
  
}

const mortgage = new Scheduler({
  freq: RRule.MONTHLY,
  interval: 1,
  dtstart: new Date(Date.UTC(2012, 0, 1)),
  until: new Date(Date.UTC(2012, 3, 1))
});

console.log(mortgage.all())
