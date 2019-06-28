import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');


class GenericModal extends Component {

    static propTypes = {
      containerStyle: PropTypes.object,
    };
    state = {
        isVisible: false,
        component: null,
    };

    dismissModal = () => {
        this.setState({
            isVisible: false,
        });
    };

    showModal = (component) => {
        this.setState({
            isVisible: true,
            component,
        });
    };

    render() {
        const { isVisible, component } = this.state;
        const {containerStyle} = this.props;
        if (!isVisible) return null;

        return (
            <View style={[styles.container, containerStyle]}>
                {component}
            </View>);
    }
}

export default GenericModal;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 100,
    },
});
