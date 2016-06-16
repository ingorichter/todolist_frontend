import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TodayIcon from 'material-ui/svg-icons/action/today';
import AllIcon from 'material-ui/svg-icons/places/all-inclusive';

import Constants from "../constants/Constants";
import FilterActions from "../actions/FilterActions";

export default class TodoTabs extends React.Component {
  handleChange(value) {
    FilterActions.changeDueFilter(value)
  }

  render() {
    return(
      <Tabs ref="tabs" initialSelectedIndex={3} onChange={this.handleChange.bind(this)}>
        <Tab
          icon={<TodayIcon />}
          label="Today"
          value={Constants.TODAY}
        />
        <Tab
          icon={<TodayIcon />}
          label="Tomorrow"
          value={Constants.TOMORROW}
        />
        <Tab
          icon={<TodayIcon />}
          label="This week"
          value={Constants.THIS_WEEK}
        />
        <Tab
          icon={<AllIcon />}
          label="All todos"
          value={Constants.ALL}
        />
      </Tabs>
    )
  }
}

