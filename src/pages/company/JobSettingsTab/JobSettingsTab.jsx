import React, { useState } from 'react';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';

const JobSettingsTab = () => {
  const [canShowNotification, setCanShowNotification] = useState(true);

  const handleChange = () => {
    setCanShowNotification(!canShowNotification);
  };

  return (
	<RoundContentWrapper
		heading="Job settings"
		classes="medium center opaque container m-t-40 m-b-40"
		isRounded
	>
		<div className="m-t-20">
			<div className="flex space-out">
				<div>Receive notification for incoming job</div>
				<input type="checkbox" checked={canShowNotification} onChange={handleChange} />
			</div>
		</div>
	</RoundContentWrapper>
  );
};

export default JobSettingsTab;
