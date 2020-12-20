import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FormRow: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Box fontWeight='fontWeightLight' m={2}>
          <Typography variant='h5' color='primary' component='p'>
            SOME PROJECTS
          </Typography>
        </Box>

        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                RNL
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Summer 2020
              </Typography>
              <Typography variant='body2' component='p'>
                Pervii commerceski proekt posle kovida, ochen on bil plohoi, rad chto ego zakrili
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                ADA
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Basically all Autumn 2020
              </Typography>
              <Typography variant='body2' component='p'>
                Ochen chillovi proekt, rabotal po 4-6 chasov v den, mnogo vremeni na sebya bilo
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                PSBA
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Shas
              </Typography>
              <Typography variant='body2' component='p'>
                Hardworking one. Real popotet nado inogda, no mne nrav, znaniya boostit
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default FormRow;
