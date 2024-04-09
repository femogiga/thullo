import moment from 'moment';

export const dateFormatter = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = moment(date).format('Do MMMM [at] HH:mm');
  return formattedDate;
};

//const originalDateString = '2024-04-08T19:01:40.946Z';

//const result = (dateFormatter(originalDateString))

//console.log(result)
