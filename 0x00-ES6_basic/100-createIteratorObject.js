export default function createIteratorObject(report) {
  const employees = [];
  for (const key of Object.values(report.allEmployees)) {
    employees.push(...key);
  }
  return employees;
}
