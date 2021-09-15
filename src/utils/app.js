import { format } from "date-fns";

const amountToText = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
export default amountToText;

export const findObjectByKey = (key, value, objects) => objects.find((f) => f[key] === value);

export const formatRawDate = (date) => {
  return format(new Date(date), 'd-MM-yy h:mm:ss a')
}
