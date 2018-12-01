import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { inc } from '../../publics/redux/actions/contact';

class Contact extends React.Component {

  componentDidMount() {
    // setInterval(
    //   () => this.props.dispatch(inc(this.props.contact.number + 1)
    // ), 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textCounter}>{this.props.contact.number}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
}

export default connect(mapStateToProps)(Contact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCounter: {
    fontSize: 100
  }
});
