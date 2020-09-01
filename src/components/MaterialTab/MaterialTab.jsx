/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '80%',
      width: '100%',
      backgroundColor: '#3f51b5',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default StyledTabs;
