import React from 'react'
import DailyGoals from './components/Goals/DailyGoals'
import HabitTracker from './components/Habits/HabitTracker'
import Journal from './components/Journal/Journal'
import Calendar from './components/Calendar/Calendar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home(props) {

  const classes = useStyles()

  const { myEvents, habits, journalEntries, dailyGoals } = props
        
  return (
    <div className="home-page">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Calendar myEvents={myEvents} /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><DailyGoals dailyGoals={dailyGoals}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><HabitTracker habits={habits}/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Journal journalEntries={journalEntries} /></Paper>
        </Grid>
      </Grid>
          </div>
        );
    }

  
  