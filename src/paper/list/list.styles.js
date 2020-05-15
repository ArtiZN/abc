import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '10px 24px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 270,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
