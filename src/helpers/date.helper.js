export const formatDate = (date) => {
  const d = new Date(date);
  console.log(d.getMonth());
  return `${d.getFullYear()}-${formatMonth(d.getMonth() + 1)}-${d.getDate()}`;
};

const formatMonth = (month) => {
  return month >= 10 ? month : "0" + month;
};
