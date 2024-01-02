import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
export default function Modal({handleClose, text}) {
    return (<>
        <div id='modalBackground' onClick={handleClose}>
            <div id='modalWrapper'>
                <div id='modalClosingWrapper' onClick={handleClose}>
                    <CloseRoundedIcon id='xMarkIcon'/>
                </div>
                <p id='modalText'>{text}</p>
                <button id='modalBtn' onClick={handleClose}>OK</button>
            </div>
        </div>

    </>
    )
}
