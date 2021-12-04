import { getStatusValues, Status } from "enums/status.enum";
import React from "react";
import "./jobStatus.css"

const JobStatus = ({ status }: { status: number | string}) => {
  const getJobStatus = () => {
		switch(status) {
			case Status.PENDING:
				return <span className="job_card pending_job">{getStatusValues(status)}</span>;

			case Status.DONE:
				return <span className="job_card success_job">{getStatusValues(status)}</span>;
		
			case Status.QUERIED:
				return <span className="job_card queried_job">{getStatusValues(status)}</span>;

			case Status.REJECTED:
				return <span className="job_card rejected_job">{getStatusValues(status)}</span>;

			default: return ""
		}
	}

  return ( <>{getJobStatus()}</> )
}

export default JobStatus;
