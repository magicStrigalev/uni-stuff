import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white'
  }
}));

export default function Footer() {
  const classes = useStyles();

  //TODO: don't forget to put exact values;

  return (
    <div>
      <Container className={classes.wrapper}>
        <Typography variant='h6' align='center' gutterBottom>
          Postavte plz zachet
        </Typography>
        <Typography variant='subtitle1' align='center' component='p'>
          Ya prosto tak ustal!
        </Typography>
      </Container>
    </div>
  );
}
