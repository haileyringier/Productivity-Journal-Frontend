import { createMuiTheme } from '@material-ui/core/styles';

const teal = '#3e7575'
const coral = '#e6b9a8'

export default createMuiTheme({
  palette: {
    common: {
        green: `${teal}`,
        orange: `${coral}`,
    },
    primary: {
        main: `${teal}`,
    },
    secondary: {
        main: `${coral}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1.5rem',
      fontWeight: '500',
      textTransform: 'none'
    },
    tabButton: {
      fontFamily: 'Raleway',
      fontSize: '1.5rem',
      fontWeight: '500',
      textTransform: 'none',
      borderRadius: '10px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '50px'
    }
  }
});
