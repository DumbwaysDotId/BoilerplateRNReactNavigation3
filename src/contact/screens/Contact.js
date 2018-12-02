import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

import { get } from '../../publics/redux/actions/contact';

class Contact extends React.Component {

  componentDidMount() {
    this.props.dispatch(get())
    .then(res => {
      alert('success')
    })
    .catch(err => {
      alert('err')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.contact.isLoading ? <ActivityIndicator size="large" /> : null}
        <ScrollView>
        {
          this.props.contact.data.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))
        }
        </ScrollView>
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
    paddingTop: 20
  },
  textCounter: {
    fontSize: 100
  },
  item: {
    padding: 20,
    borderBottomColor: '#bebebe',
    borderBottomWidth: 0.5
  }
});
