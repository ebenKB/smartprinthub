/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import StyledTabs from '../../../components/MaterialTab/MaterialTab';
import TabPanel from '../../../components/TabPanel/TablPanel';
import { selectAccountType } from '../../../redux/slices/app';
import BusinessSettingsTab from '../BusinessSettingsTab/BusinessSettingsTab';
import CompanyPayoutSettingsTab from '../PayoutSettingsTab/PayoutSettingsTab';
import UserProfileTab from '../UserProfileTab/UserProfileTab';
import JobSettingsTab from '../JobSettingsTab/JobSettingsTab';

const CompanySettingsTab = () => {
  const { page } = useParams();
  const history = useHistory();
  const accountType = useSelector(selectAccountType);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const indexToTabName = {
    profile: 0,
    business: 1,
    job: 2,
    payout: 3,
  };

  const tabNameToIndex = {
    0: 'profile',
    1: 'business',
    2: 'job',
    3: 'payout',
  };

  const [selectedTabValue, setSelectedTabValue] = useState(indexToTabName[page]);

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
  }));

  const CustomStyles = makeStyles(() => ({
    customized: {
      backgroundColor: '#ffff',
      color: '#000',
    },

    indicator: {
      backgroundColor: 'green',
    },
  }));

  const customizedClasses = CustomStyles();
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setSelectedTabValue(newValue);
    history.push(`/${accountType}/settings/${tabNameToIndex[newValue]}`);
  };

  return (
	<div className={`m-t-15 ${classes.root}`}>
		<AppBar position="static">
			<StyledTabs
				value={selectedTabValue}
				onChange={handleChange}
				aria-label="scrollable force settings"
				indicatorColor="primary"
				textColor="primary"
				variant="scrollable"
				scrollButtons="on"
				className={customizedClasses.customized}
			>
				<Tab label="Profile" {...a11yProps(0)} />
				<Tab label="Business" {...a11yProps(1)} />
				<Tab label="Job Settings" {...a11yProps(2)} />
				<Tab label="Payout Accounts" {...a11yProps(3)} />
			</StyledTabs>
		</AppBar>
		<TabPanel value={selectedTabValue} index={0}>
			<UserProfileTab />
		</TabPanel>
		<TabPanel value={selectedTabValue} index={1}>
			<BusinessSettingsTab />
		</TabPanel>
		<TabPanel value={selectedTabValue} index={2}>
			<JobSettingsTab />
		</TabPanel>
		<TabPanel value={selectedTabValue} index={3}>
			<CompanyPayoutSettingsTab />
		</TabPanel>
	</div>
  );
};

export default CompanySettingsTab;
