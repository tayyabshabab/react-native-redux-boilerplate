import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';

/* actions */
import * as actionCreators from '../actions/counterActions';

@connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch),
)
class App extends Component {
  static propTypes = {
    count: React.PropTypes.number,
    decrement: React.PropTypes.func,
    increment: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment, decrement } = this.props;
    return (
      <Counter
          counter={count}
          decrement={decrement}
          increment={increment}
      />
    );
  }
}

export default App;
