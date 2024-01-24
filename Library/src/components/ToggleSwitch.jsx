export default function ToggleSwitch({ switchLabel, handleSwitch, isON }) {
  return (
    <div className='toggleSwitchWrapper'>
        <p className='toggleSwitchLabel'>{switchLabel}</p>
        <div onClick={handleSwitch} className={isON?'toggleSwitch toggleSwitchON' : 'toggleSwitch toggleSwitchOFF'}>
            <div className={isON?'switch switchON' : 'switch switchOFF'}></div>
            <svg className={isON? 'checkIconON' : 'checkIconOFF'} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M24.1423 0.315433C25.018 0.900736 25.2634 2.09921 24.6908 2.9942L11.813 23.1237C11.6629 23.3582 11.4648 23.5567 11.2324 23.7053C11 23.8539 10.7387 23.9492 10.4667 23.9845C10.1947 24.0199 9.91849 23.9944 9.65706 23.91C9.39563 23.8255 9.15527 23.684 8.95258 23.4953L0.619897 15.7532C0.248221 15.4078 0.0260075 14.9257 0.00214108 14.4129C-0.0217253 13.9001 0.15471 13.3986 0.492634 13.0187C0.830558 12.6388 1.30229 12.4117 1.80405 12.3873C2.30581 12.3629 2.79651 12.5432 3.16818 12.8886L9.85857 19.104L21.5213 0.875961C21.7962 0.446473 22.2267 0.146153 22.7183 0.0410385C23.2098 -0.0640756 23.722 0.0346235 24.1423 0.315433Z"/>
            </svg>
        </div>
    </div>
  )
}
