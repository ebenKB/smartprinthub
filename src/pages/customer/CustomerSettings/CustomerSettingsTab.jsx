/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserSettings from '../../UserSettings/UserSettings';
import CompanySettings from '../../company/CompanySettings';
import JobSettings from '../CustomerJobSettings/JobSettings';
import PaymentSettings from '../../PaymentSettings/PaymentSettings';
import { selectAccountType } from '../../../redux/slices/app';
import TabPanel from '../../../components/TabPanel/TablPanel';
import StyledTabs from '../../../components/MaterialTab/MaterialTab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

// const StyledTabs = withStyles({
//   indicator: {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     '& > span': {
//       maxWidth: '80%',
//       width: '100%',
//       backgroundColor: '#3f51b5',
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function SimpleTabs() {
  const indexToTabName = {
    profile: 0,
    company: 1,
    job: 2,
    payment: 3,
  };

  const accountType = useSelector(selectAccountType);
  const classes = useStyles();
  const customizedClasses = CustomStyles();
  const history = useHistory();
  const { page } = useParams();
  const [selectedTabValue, setSelectedTabValue] = React.useState(indexToTabName[page]);

  const tabNameToIndex = {
    0: 'profile',
    1: 'company',
    2: 'job',
    3: 'payment',
  };

  const handleChange = (event, newValue) => {
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
				<Tab label="Company" {...a11yProps(1)} />
				<Tab label="Job Settings" {...a11yProps(2)} />
				<Tab label="Payment Options" {...a11yProps(3)} />
			</StyledTabs>
		</AppBar>
		<TabPanel value={selectedTabValue} index={0}>
			<div className="m-t-20">
				<UserSettings />
			</div>
		</TabPanel>
		<TabPanel value={selectedTabValue} index={1}>
			<div className="m-t-20">
				<CompanySettings />
			</div>
		</TabPanel>
		<TabPanel value={selectedTabValue} index={2}>
			<div className="m-t-20">
				<JobSettings />
			</div>
		</TabPanel>
		<TabPanel value={selectedTabValue} index={3}>
			<div className="m-t-20">
				<PaymentSettings />
			</div>
		</TabPanel>
	</div>
  );
}
