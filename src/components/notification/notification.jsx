import React, { useState } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './notification.scss';
import { Button } from 'semantic-ui-react';

const Notification = () => {
  const [canShowPreview, setCanShowPreview] = useState(false);
  return (
	<div className="notification-wrapper">
		<div className="m-r-10 notification-wrapper__content">
			<Button
				className="transparent"
				onClick={() => setCanShowPreview(!canShowPreview)}
			>
				<NotificationsNoneIcon />
				<div className="notification-label" />
			</Button>
		</div>
		{canShowPreview && (
			<div className="notification__preview">This is the notification preview</div>
		)}
	</div>
  );
};

export default Notification;
