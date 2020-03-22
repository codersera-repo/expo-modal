import React from 'react';
import GenericModal from "./GenericModal";
import Util from "./Util";
import PropTypes from 'prop-types';

class Modal extends React.Component {

    static propTypes = {
        containerStyle: PropTypes.object
    };

    render() {
        return (
            <GenericModal containerStyle={this.props.containerStyle} ref={ref=> Util.setModalRef(ref)} />
        )
    }
}

export default {
    Modal,
    showModal: Util.showModal,
    dismissModal: Util.dismissModal,
    wrapIntoModal: Util.wrapIntoModal,
};
