import React from 'react';
import { Grid, Box, Typography, Avatar } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Andrew from '../../img/andrey.jpg';
import FormRow from './features/FormRow';
import FormRowTwo from './features/FormRowTwo';

const useStyles = makeStyles({
  avatar: {
    width: '200px',
    height: '200px',
    marginLeft: 20,
  },
  wrapper: {
    marginBottom: 90,
  },
});

const WelcomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Route exact path='/'>
      <div className={classes.wrapper}>
        <Grid container direction='column' justify='space-between' alignItems='center'>
          <Grid>
            <Box fontWeight='fontWeightLight' m={3} justifyContent='center'>
              <Avatar alt='AndrewStrigaliov' src={Andrew} className={classes.avatar} />
            </Box>
            <Box fontWeight='fontWeightLight' m={3}>
              <Typography variant='h2' component='p' color='primary'>
                RESUME
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box fontWeight='fontWeightLight' m={4}>
              <Typography variant='h6' color='textSecondary' component='p'>
                Koroche tut korotko pro menya
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid container item xs={6} spacing={2}>
            <FormRow />
          </Grid>
          <Grid container item xs={6} spacing={2}>
            <FormRowTwo />
          </Grid>
        </Grid>
      </div>
    </Route>
  );
};

export default WelcomePage;
