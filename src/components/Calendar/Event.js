import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
      paper: {
        padding: '6px 16px',
        textAlign: 'center'
      },
      secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
      },
    }));
    
export default function Event(props){
    const classes = useStyles();
    const { title, content, startTime, date} = props

    const formatedDate = date.slice(0, 10)
    const formatedTime= startTime.slice(0, 5)

    return(
        <TimelineItem>
            <TimelineOppositeContent className='start-time'>
                <Typography variant="body2" color="textSecondary">
                    {formatedTime}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {formatedDate.slice(5, 10)}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary'/>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                {title}
                </Typography>
                <Typography>{content}</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}
