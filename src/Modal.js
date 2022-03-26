import * as React from "react";
import Box from "@material-ui/core/Box"
import MuiModal from "@material-ui/core/Modal"
import { styled } from "@material-ui/core";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Modal = ({ content, header, handleClose = () => {}, open }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function onClose() {
        setIsOpen(false);
        handleClose();
    }

    React.useEffect(() => {
        if (open) {
            setIsOpen(true);
        }
    }, [open])

    if (!isOpen) {
        return null;
    }

    return (
        <MuiModal open={isOpen} onClose={onClose} header={header} style={style}>
            {content}
        </MuiModal>
    )
};

export default Modal;