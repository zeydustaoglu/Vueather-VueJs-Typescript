// Getting today
const today = new Date();
const day: Intl.DateTimeFormatOptions = { day: 'numeric' };
const month: Intl.DateTimeFormatOptions = { month: 'long' };

const getToday = today.toLocaleDateString('en-US', day);
const getMonth = today.toLocaleDateString('en-US', month);

// Getting tomorrow
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
if (tomorrow.getMonth() !== today.getMonth() && tomorrow.getDate() !== 1) {
  tomorrow.setDate(1);
  tomorrow.setMonth(tomorrow.getMonth() + 1);
}

const getTomorrowDay = tomorrow.toLocaleDateString('en-US', day);
const getTomorrowMonth = tomorrow.toLocaleDateString('en-US', month);


export { getToday, getMonth, getTomorrowDay, getTomorrowMonth };