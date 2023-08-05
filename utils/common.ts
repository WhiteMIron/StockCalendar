import moment from 'moment';

export const isEmpty = function <T>(value: T) {
  if (
    value == '' ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

export const cmpToday = (date: string) => {
  let result = moment(moment().format('YYYY-MM-DD')).isSame(moment(date.replaceAll('/', '-')));
  return result;
};
