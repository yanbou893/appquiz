import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



// Route関連
import { Link } from 'react-router-dom';

class Home extends React.Component {
    buttons_info = [
    { label: 'start',link_to:'/Main'}];
    
    buttons = this.buttons_info.map( (button_info, index) => {
      return (
        <BottomNavigationAction
          value={button_info.link_to}
          label={button_info.label}
          component={Link}
          to={button_info.link_to}
        />
      );
    })
    
    render() {
        return (
        <div>
          <p>Quiz</p>
          <BottomNavigation
          children={this.buttons}
          />
        </div>
        );
    }
}

export default Home;
