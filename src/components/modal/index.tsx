import {FC} from 'react'
import './index.css'

const Modal: FC<{open: boolean, handlerCloseModal: () => void}> = ({open, handlerCloseModal}) => {

    return (
        <div className={`modal ${open === true ? 'modal-open': ''}`} onClick={handlerCloseModal}>
            <div>ALOHA</div>
        </div>
    )
}

export default Modal