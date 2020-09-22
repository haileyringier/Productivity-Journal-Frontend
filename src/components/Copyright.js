import Typography from '@material-ui/core/Typography';
import React from 'react';
import Link from '@material-ui/core/Link';


export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Productivity Journal
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }