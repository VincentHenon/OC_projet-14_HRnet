import {useState, useEffect} from 'react'
import './styles.css'
import Modal from "./lib/Modal"
import ToggleSwitch from './components/ToggleSwitch'
import ClearIcon from './components/ClearIcon'

const App = () => {
  const [isModal, setIsModal] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [displayBtn1, setDisplayBtn1] = useState(true)
  const [displayBtn2, setDisplayBtn2] = useState(false)
  const [textMainValid, setTextMainValid] = useState("It's all good!")
  const [textMainError, setTextMainError] = useState("Something is wrong.")
  const [textBtn1, setTextBtn1] = useState('Ok')
  const [textBtn2, setTextBtn2] = useState('Cancel')
  const [isON, setIsON] = useState(false)
  
  // fallback main text
  useEffect(() => {
    if (textMainValid.length === 0) {
      setTextMainValid("It's all good")
    }
    if (textMainError.length === 0) {
      setTextMainError("Something is wrong.")
    }
  }, [textMainValid, textMainError, isValid])

  // fallback btns text
  useEffect(() => {
    if (textBtn1.length === 0) {
      setTextBtn1('Button 1')
    }
    if (textBtn2.length  === 0) {
      setTextBtn2('Button 2')
    }
  }, [textBtn1, textBtn2])

  // close the modal
  const closeModal = () => {
    setIsModal(false)
  }

  // button 1 action
  const handleBtn1 = () => {
    alert("button 1 clicked.")
    closeModal()
  }

  // button 2 action
  const handleBtn2 = () => {
    alert("button 2 clicked.")
    closeModal()
  }

  // close the modal
  const handleClose = () => {
    alert("modal closed.")
    closeModal()
  }

  const handleClear = (e) => {
    const parent = e.target.parentNode.parentNode
    console.log(parent.id)

    if (parent.id === 'manageModalBtns') {
      console.log('clear the btns')
      const inputs = parent.querySelectorAll('input')
      inputs.forEach((input) => {input.value = ''})
      setTextBtn1('')
      setTextBtn2('')
      setDisplayBtn1(true)
      setDisplayBtn2(false)
    }
    if (parent.id === 'manageModalContent') {
      console.log('clear the content')
      const inputs = parent.querySelectorAll('input')
      inputs.forEach((input) => {input.value = ''})
      setIsValid(true)
      setTextMainValid('')
      setTextMainError('')
    }
  }

  const handleSwitch = () => {
    setIsON(!isON)
    console.log('toggled!')
  }

  return (
    <main>
      <h1>Simple Modal Library for React</h1>
      <div className='manualWrapper'>
        <p>Import the modal library and include it in your JSX. Declare all props within the component.</p>
        <pre>
          <code>
            {`
            import Modal from "SimpleModal" 
              const YourComponent = () => {
                return (
                  <Modal 
                    handleBtn1= {handlerBtn1}
                    handleBtn2= {handlerBtn2}
                    handleClose= {handleClose}
                    isValid= {true}>
                    textMainValid= {"It's all good!"}
                    textMainError= {"Something went wrong"}
                    textBtn1= {"button 1"}
                    textBtn2= {"button 2"}
                    displayBtn1= {true}
                    displayBtn2= {false}
                  </Modal>
                )
              }
            `}
          </code>
        </pre>
      </div>
      
      <div className='manualWrapper'>
        <p>Here are all props needed: </p>
        <div className='statesWrapper'>
          <p>‣ <strong>isValid</strong>: <em>(boolean)</em> will display an error or valid message.</p>  
          <p>‣ <strong>textMainValid</strong>: <em>(string)</em> main message when isValid is set to true.</p>  
          <p>‣ <strong>textMainError</strong>: <em>(string)</em> main message when isValid is set to false.</p>  
          <p>‣ <strong>textBtn1</strong>: <em>(string)</em> text for button 1.</p>  
          <p>‣ <strong>textBtn2</strong>: <em>(string)</em> text for button 2.</p>  
          <p>‣ <strong>displayBtn1</strong>: <em>(boolean)</em> will display or hide button 1.</p>  
          <p>‣ <strong>displayBtn2</strong>: <em>(boolean)</em> will display or hide button 2.</p>  
          <p>‣ <strong>handleClose</strong>: <em>(function)</em> to close the modal</p>  
          <p>‣ <strong>handleBtn1</strong>: <em>(function)</em> custom on button 1 click</p>  
          <p>‣ <strong>handleBtn2</strong>: <em>(function)</em> custom on button 2 click</p>  
        </div>    
      </div>

      <div className='manualWrapper' id='manageModalContent'> 
        <ClearIcon handleClear={handleClear}/>
        <p>Set <strong>'isValid'</strong>, <strong>'textMainValid'</strong> and <strong>'textMainError'</strong> props to display 2 different messages dynamically.</p>
        
        <div className='buttonsWrapper'>
         {/*<button className= 'btnExample' onClick={ () => setIsValid(!isValid)}>Toggle message</button>*/}
          <ToggleSwitch switchLabel={'isValid'} handleSwitch={() => setIsValid(!isValid)} isON={isValid}/>
          <div className='inputWrapper'>
            <label htmlFor="textMainValid">valid message</label>
            <input type="text" id="TextMainValid" name="textMainValid" placeholder="type here..." onChange={(e) => setTextMainValid(e.target.value)}></input>
          </div>
          <div className='inputWrapper'>
            <label htmlFor="textMainError">error message</label>
            <input type="text" id="TextMainError" name="textMainError" placeholder="type here..." onChange={(e) => setTextMainError(e.target.value)}></input>
          </div>
        </div>
      </div>

      <div className='manualWrapper' id='manageModalBtns'> 
        <ClearIcon handleClear={handleClear}/>
        <p>Specify <strong>'displayBtn1'</strong> and <strong>'displayBtn2'</strong> to choose which button to show, and set <strong>'textBtn1'</strong> and <strong>'textBtn2'</strong> accordingly. Additionally, use the <strong>'handleBtn1'</strong> and <strong>'handleBtn2'</strong> props for defining actions associated with the buttons.</p>
        <div className='buttonsWrapper'>
          {/*<button className= 'btnExample'onClick={ () => setDisplayBtn1(!displayBtn1) }>Display button 1</button>*/}
          <ToggleSwitch switchLabel={'displayBtn1'} handleSwitch={() => setDisplayBtn1(!displayBtn1)} isON={displayBtn1}/>
          <div className='inputWrapper'>
            <label htmlFor='textBtn1'>button 1 text</label>
            <input type="text" id="inputTextBtn1" name="textBtn1" placeholder="type here..." onChange={(e) => setTextBtn1(e.target.value)}></input>
          </div>
        </div>
        <div className='buttonsWrapper'>
          {/* <button className= 'btnExample'onClick={ () => setDisplayBtn2(!displayBtn2) }>Display button 2</button> */}
          <ToggleSwitch switchLabel={'displayBtn2'} handleSwitch={() => setDisplayBtn2(!displayBtn2)} isON={displayBtn2}/>
          <div className='inputWrapper'>
            <label htmlFor='textBtn2'>button 2 text</label>
            <input type="text" id="inputTextBtn2" name="textBtn2" placeholder="type here..." onChange={(e) => setTextBtn2(e.target.value)}></input>
          </div>
        </div> 
      </div>

      <div className='manualWrapper'> 
        <p>Clicking outside the modal or the "X" mark icon in the top-right corner will trigger the 'handleClose' function. 
          You can customize this logic according to your needs.</p>
      </div>

      <div className='manualWrapper'>
          <p>Additionally, you have the flexibility to style each element of the modal using CSS:</p> 
          <pre>
              <code>{`
                .modalBackground {
                  backdrop-filter: blur(5px);
                }

                .modalBox {
                  background-color: rgb(232323);
                }

                .modalIcon {
                  color: rgb(119, 23, 46);
                }

                ...
                
              `}</code>
          </pre>   
      </div>

      <div className='manualWrapper'>
        <p>Here you can find how you set each props of the modal: </p>
        <div className='statesWrapper'>
          
          <p>‣ <strong>isValid</strong> is set to {isValid? <span className='active'>true</span> : <span className='notActive'>'false'</span>}.</p>
          <p>‣ <strong>textMainValid</strong> message is set as <em><strong>'{textMainValid}'</strong></em>.</p>
          <p>‣ <strong>textMainError</strong> message is set as <em><strong>'{textMainError}'</strong></em>.</p>
          <p>‣ <strong>displayBtn1</strong> is set to {displayBtn1? <span className='active'>true</span> : <span className='notActive'>false</span>}. Button 1 is {displayBtn1? <span className='active'>active</span> : <span className='notActive'>not active</span>}.</p>
          <p>‣ <strong>displayBtn2</strong> is set to {displayBtn2? <span className='active'>true</span> : <span className='notActive'>false</span>}. Button 2 is {displayBtn2? <span className='active'>active</span> : <span className='notActive'>not active</span>}.</p>
          <p>‣ <strong>textBtn1</strong> is set as <em><strong>'{textBtn1}'</strong></em>.</p>
          <p>‣ <strong>textBtn2</strong> is set as <em><strong>'{textBtn2}'</strong></em>.</p>
        </div>
      </div>

      <button className= 'openModalButton' onClick={ () => setIsModal(true) }>Open Modal</button>

      {isModal?
        <Modal 
          handleBtn1= {handleBtn1} // call action on button 1
          handleBtn2={handleBtn2} // call action on button 2
          handleClose={handleClose} // call how modal closes
          isValid= {isValid} // toggle the icon (error or valid)
          textMainValid={textMainValid} // text for a valid modal (ex: the form is valid.)
          textMainError={textMainError} // text for a not valid modal (ex: the form has errors.)
          displayBtn1={displayBtn1} // display the first button
          textBtn1={textBtn1} // text for the first button (ex: OK)
          displayBtn2= {displayBtn2} // display a second button
          textBtn2={textBtn2} // text for the second button
        /> 
      : 
        null}
    </main>
  )
}

export default App