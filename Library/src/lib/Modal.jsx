import './styles/modal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Modal({ handleClose, handleBtn1, handleBtn2, isValid, textMainValid, textMainError, displayBtn1, textBtn1, displayBtn2, textBtn2 }) {
    return (
        <div className='modalBackground' id='modal_bg' 
            onClick={(e) =>{ 
                if (e.target.className === "modalBackground") {
                    handleClose()
                }
            }}
        >
            <div className='modalBox' id='modal_box'>
                <div className='modalContent' id='modal_content'>
                    {isValid? 
                        <CheckCircleIcon className='modalIcon checkIcon' id='modal_icon' /> 
                    :
                        <ErrorIcon className='modalIcon errorIcon' id='modal_icon'/>}
                    <p className='modalText' id='modal_text'>{isValid? textMainValid : textMainError}</p>
                </div>
                <div className='modalButtonsWrapper' id='modal_btns'>
                    {displayBtn1 && <button className='modalBtn modalBtn1' id='modal_btn1' onClick={handleBtn1}>{textBtn1}</button>}
                    {displayBtn2 && <button className='modalBtn modalBtn2' id='modal_btn2' onClick={handleBtn2}>{textBtn2}</button>}
                </div>
                <CloseRoundedIcon className='xMarkIcon modalIcon' id='modal_xmark' onClick={handleClose}/>
            </div>
        </div>
    )
}
