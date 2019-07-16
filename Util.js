import React from 'react';
import {Text, View} from 'react-native';
import GenericModal from "expo-modal/GenericModal";

export default class Util {
    static setModalRef(ref) {
        if(ref) {
            Util.modalRef = ref;
        }
    }
    static wrapIntoModal(comp, containerStyle) {
        const newChild=(<GenericModal key={'expo-modal'} containerStyle={containerStyle} ref={ref=> Util.setModalRef(ref)} />);

        // append the newChild while creating the clone element
        const newElement=React.cloneElement(comp,comp.props, [comp.props.children, newChild])
        return newElement;
    }

    static showModal(component) {
        Util.modalRef.showModal(component);
    }

    static dismissModal() {
        Util.modalRef.dismissModal();
    }
}