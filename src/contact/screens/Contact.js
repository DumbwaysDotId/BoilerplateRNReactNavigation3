import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';
import { ListItem, Text, Body, Fab } from 'native-base'

import { get } from '../../publics/redux/actions/contact';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    // this.props.dispatch(get())
    // .then(res => {
    //   alert('success')
    // })
    // .catch(err => {
    //   alert('err')
    // })
  }

  renderItem = ({ item, index }) => {
    return (
      <ListItem key={index}>
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.address}</Text>
        </Body>
      </ListItem>
    )
  }

  handleCreate = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ContactCreate'
    })
  }

  _keyExtractor = ( item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.contact.data}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          extraData={this.props.contact}
        />
        <Fab
          containerStyle={{ justifyContent: 'center', alignItems: 'center'}}
          style={{ backgroundColor: '#000' }}
          position="bottomRight"
          onPress={this.handleCreate}>
          <Text>+</Text>
        </Fab>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
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
