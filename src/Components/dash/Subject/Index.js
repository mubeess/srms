import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Divider } from '@material-ui/core';
import AddSubject from './AddSubject';
import RegisteredSubject from './RegisteredSubject';
import AddNew from './AddNew';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
    backgroundColor: theme.palette.background.paper,
    marginLeft:'20%',
    marginTop:'10px'
  },
}));

export default function Subject() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Divider></Divider>
      <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Manage Subjects
      </Typography>

      <Divider></Divider>
      
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{backgroundColor:'#1E7F95',borderRadius:'10px',color:'white',margin:'20px'}} label="Assign Subject" {...a11yProps(0)} />
          <Tab style={{backgroundColor:'#1E7F95',borderRadius:'10px',color:'white',margin:'20px'}} label="View Registered Subjects" {...a11yProps(1)} />
          <Tab style={{backgroundColor:'#1E7F95',borderRadius:'10px',color:'white',margin:'20px'}} label="Add New Subject" {...a11yProps(2)}/>
        </Tabs>

      <TabPanel value={value} index={0}>
      <AddSubject></AddSubject>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <RegisteredSubject></RegisteredSubject>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AddNew></AddNew>
      </TabPanel>
    </div>
  );
}
