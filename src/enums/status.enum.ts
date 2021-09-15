export enum Status {
  PENDING= 1,
  APPROVED= 2,
  REJECTED= 3,
  DONE= 4,
  QUERIED = 5
}

export const getStatusValues  = (status:number) => {
  switch(status) {
    case Status.PENDING: {
      return "Pending"
    }

    case Status.APPROVED: {
      return "Approved"
    }

    case Status.REJECTED: {
      return "Rejected"
    }

    case Status.DONE: {
      return "Done"
    }

    case Status.QUERIED: {
      return "Queried"
    }
    
    default: {
      return ""
    }
  }
}