export default function createEmployeesObject(department, employees) {
  const employeesObj = {};
  employeesObj[department] = employees;
  return employeesObj;
}

export default function createReportObject(employees) {
  const report = {};
  for (const department in employees) {
    report[department] = employees[department];
  }
  return report;
}

export default function* createIteratorObject(report) {
  for (const department in report) {
    const employees = report[department];
    for (const employee of employees) {
      yield employee;
    }
  }
}

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}

