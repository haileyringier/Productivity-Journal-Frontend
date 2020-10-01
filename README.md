# Productivity Journal
> Final Project with Flatiron SE Program in Denver

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Contact](#contact)
* [License](#license)

## General info
Productivity Journal is a virtual journal to assist in organizing your day and increasing your productivity. On the dashboard a user has an overview of their upcoming events, their daily goals and a visual representation of the habits they are tracking. A user can add and delete tasks, view their events in a monely and daily calendar, review all of their journal entries in chronological order and can updated the status of the habits they are tracking.  


## Intro Video
[Capstone/Final Presentation on Youtube](https://www.youtube.com/channel/UCv8YpacxVgL9ShVduwb3Blg?view_as=subscriber)

## Technologies
* React
* Material UI
* Chart.js
* HTML5
* CSS
* JavaScript
* React Big Calendar
* Moment.js

## Setup
The frontend of Productivity Journal has been deployed using firebase and can be found [here](https://productivity-day-journal.web.app)
1. The backend of this project is not deployed and needs be forked and cloned. [Backend](https://github.com/haileyringier/productivity-backend)
1. Once you fork and clone the backend repo, you will need to run:
    $ npm install
1. Now in the terminal of the frontend directory, run:
    $ npm start or node index.js
    $ then navigate to the url of the ap.

## Code Examples
```javaScript
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
```

```javascript
    const data = {
        labels: [
            `Goal Days: ${goal}`,
            `Completed: ${currentDays}`,
        ],
        datasets: [{
            data: [goal, currentDays],
            backgroundColor: [ teal, coral ],
            hoverBackgroundColor: [ teal, coral ]
        }]
    };
    const addDay = () => {
        let newCurrent = current + 1
        setCompleted(true)
        setCurrentDays(newCurrent)
        addCurrentDay(id, newCurrent)
    }
```

## Features
* Dashboard with an overview of events, tasks, habits, and journal entries
* Add and delete tasks as they arise and are completed
* Add a completed habit to the tracker
* View all journal entries in chronological order
* View your events in a monthly or daily calendar
* Greeted with a daily quote at the top of the page

## Status
Project is: Looking to add Authentication and login features and deploy the backend using Heroku.


## Contact
Created by [Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) 

Feel free to contact me! 

## License
[Click to view]()