import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});

export default class Counter extends Component {
  static propTypes = {
    counter: React.PropTypes.number,
    decrement: React.PropTypes.func,
    increment: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment}
            style={styles.button}
        >
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}
            style={styles.button}
        >
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
