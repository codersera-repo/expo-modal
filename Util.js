export default class Util {
    static setModalRef(ref) {
        if(ref) {
            Util.modalRef = ref;
        }
    }

    static showModal(component) {
        Util.modalRef.showModal(component);
    }

    static dismissModal() {
        Util.modalRef.dismissModal();
    }
}