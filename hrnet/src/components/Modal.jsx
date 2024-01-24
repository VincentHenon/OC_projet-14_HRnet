import '../styles/modal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Modal({ handleClose, handleBtn1, handleBtn2, isValid, textMain, displayBtn1, textBtn1, displayBtn2, textBtn2 }) {
    return (
        <div className='modalBackground' id='modal_bg' onClick={handleClose}>
            <div className='modalBox' id='modal_box'>
                <div className='modalContent' id='modal_content'>
                    {isValid? 
                        <CheckCircleIcon className='modalIcon' id='modal_icon' /> 
                    :
                        <ErrorIcon className='modalIcon' id='modal_icon'/>}
                    <p className='modalText' id='modal_text'>{textMain}</p>
                </div>
                {displayBtn2?  
                    <button className='modalBtn' id='modal_btn' onClick={handleBtn2}>{textBtn2}</button> 
                : 
                    null}
                {displayBtn1 && <button className='modalBtn' id='modal_btn' onClick={handleBtn1}>{textBtn1}</button>}
                <div className='modalXmark' id='modal_xmark' onClick={handleClose}>
                    <CloseRoundedIcon className='xMarkIcon' id='modal_xmark'/>
                </div>
            </div>
        </div>
    )
}
