/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserSettings from '../UserSettings/UserSettings';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
	<div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	>
		{value === index && (
			<Box p={3}>
				<Typography>{children}</Typography>
			</Box>
		)}
	</div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
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

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '80%',
      width: '100%',
      backgroundColor: '#21ba45',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function SimpleTabs() {
  const classes = useStyles();
  const customizedClasses = CustomStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
	<div className={`m-t-15 ${classes.root}`}>
		<AppBar position="static">
			<StyledTabs
				value={value}
				onChange={handleChange}
				aria-label="scrollable force settings"
				indicatorColor="primary"
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
		<TabPanel value={value} index={0}>
			<UserSettings />
		</TabPanel>
		<TabPanel value={value} index={1}>
			Company content here
		</TabPanel>
		<TabPanel value={value} index={2}>
			Job Settings
		</TabPanel>
		<TabPanel value={value} index={3}>
			Payment Options content here
		</TabPanel>
	</div>
  );
}
