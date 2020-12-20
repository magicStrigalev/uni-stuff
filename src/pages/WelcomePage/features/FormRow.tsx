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
            COMMON INFO
          </Typography>
        </Box>

        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                Software Dev
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                ITechArt / November 2019 - now
              </Typography>
              <Typography variant='body2' component='p'>
                Posle NG poidu v drugie kompanii sobesitsya. Vdrug bolshe predlojat. Esli stavka budet kak 1.4-1.5 moei
                - ne dumaya yidu
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                Student
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                BSU / September 2017 - June 2021
              </Typography>
              <Typography variant='body2' component='p'>
                Reshil uchitsya v BSU IBMT na UIRe po recomedaciam druzei. Bolshe sovetov ne sprashivau
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box fontWeight='fontWeightLight' m={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                Human
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                21 years old human trash
              </Typography>
              <Typography variant='body2' component='p'>
                Nothing to say more
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default FormRow;
