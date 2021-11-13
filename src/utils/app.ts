import { format } from "date-fns";

const amountToText = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
export default amountToText;

export const findObjectByKey = (key: string, value: string, objects: any[]) => 
  objects.find((f: { [x: string]: string; }) => f[key] === value);

export const formatRawDate = (date: string) => {
  return format(new Date(date), 'd-MM-yy h:mm:ss a')
}

export const getErrorMessage = (response: { status: number}) => {
  switch(response?.status){
    case 401: {
      return "Please login to continue"
    }

    case 402: {
      return "Connection error"
    }

    case 404: {
      return "No matching record found"
    }

    case 400: {
      return "You sent a bad request"
    }

    case 500: {
      return "A fatal error occurred"
    }

    default: {
      return "Sorry! an error occurred"
    }
  }
}

export const getSuccessMessage  = (response: { status: number}) => {
  switch(response.status) {
    case 201: {
      return "Success"
    }

    case 200: {
      return "Success"
    }

    default: {
      return "Success"
    }
  }
}