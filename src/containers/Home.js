import React from 'react';
import PropTypes from 'prop-types';


import Search from '@material-ui/icons/Search';


const styles = theme => ({
  titleImage: {
    width: '100%',
    maxWidth: 700,
  },
  
  button: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
    width: 250,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class Home extends React.Component {
    render() {
    // Material-ui関連
    const { classes } = this.props;
        return (
        <div>
          <p>Quiz</p>
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          >Start
          </Button>
        </div>
        );
    }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};