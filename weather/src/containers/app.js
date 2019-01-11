import React from 'react';
import { fetchWeather } from '../actions/action';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWeather(222));
  }

  render() {
    return <div>dddd</div>
  }
}

export default connect()(App);