import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectJobCount, selectJobDrafts, addNewJob, addJobAsDraft, removeAllJobDrafts,
} from '../../redux/slices/job';
import { asyncAdd } from '../../redux/actions/job';

const ExampleJob = () => {
  const jobCount = useSelector(selectJobCount);
  const jobDrafts = useSelector(selectJobDrafts);
  const dispatch = useDispatch();
  return (
	<div className="m-t-40">
		<h1>Job counter is here</h1>
		<h1>{jobCount}</h1>
		<button
			type="button"
			onClick={() => dispatch(addNewJob())}
		>
			Add job
		</button>
		<button
			type="button"
			onClick={() => dispatch(asyncAdd())}
		>
			Async add
		</button>
		<h1>Drafts are here</h1>
		<button
			type="submit"
			onClick={() => dispatch(addJobAsDraft({ name: 'eben job', cost: 90 }))}
		>
			Add new draft
		</button>
		<h1>
			{jobDrafts && (
				<div>{jobDrafts.length}</div>
			)}
		</h1>
		<button
			type="button"
			onClick={() => dispatch(removeAllJobDrafts())}
		>
			Remove All Drafts
		</button>
	</div>
  );
};

export default ExampleJob;
