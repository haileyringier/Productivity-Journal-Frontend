import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
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

    return(
        <TimelineItem>
            <TimelineOppositeContent className='start-time'>
                <Typography variant="body2" color="textSecondary">
                     {startTime}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                     {formatedDate}
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

  
//     <Timeline align="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="textSecondary">
//             9:30 am
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               Eat
//             </Typography>
//             <Typography>Because you need strength</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="textSecondary">
//             10:00 am
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               Code
//             </Typography>
//             <Typography>Because it&apos;s awesome!</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector className={classes.secondaryTail} />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               Sleep
//             </Typography>
//             <Typography>Because you need rest</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.paper}>
//             <Typography variant="h6" component="h1">
//               Repeat
//             </Typography>
//             <Typography>Because this is the life you love!</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }
