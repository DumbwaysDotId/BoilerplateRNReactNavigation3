import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../components/redux-form/TextInput';
import { create } from '../../publics/redux/actions/contact';

class ContactCreate extends React.Component {

    handleSave = (value) => {
        this.props.dispatch(create(value));
        this.props.dispatch({
            type: 'Navigation/POP'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Field
                    name="name"
                    component={TextInput}
                    placeholder="Name"
                />
                <Field
                    name="address"
                    component={TextInput}
                    placeholder="Address"
                />
                <Button
                    color="#000"
                    title="SAVE"
                    onPress={this.props.handleSubmit(this.handleSave)}
                />
            </View>
        );
    }
}

export default reduxForm({
    form: 'profile'
})(connect()(ContactCreate));

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
