function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function parseISODate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function addDays(date, days) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function getMonday(dateStr) {
  const date = parseISODate(dateStr);
  const day = date.getUTCDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const diff = day === 0 ? -6 : 1 - day;
  return addDays(date, diff);
}

module.exports = { toISODate, parseISODate, addDays, getMonday };
