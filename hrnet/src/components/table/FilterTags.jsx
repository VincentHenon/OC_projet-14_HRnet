import {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export default function FilterTags({ content, handleSort, ascOrDesc }) {
    
    const [active, setActive] = useState(null)
    const [prevActive, setPrevActive] = useState('firstName')

    const moveIndicator = (event) => {
        const allTags = document.querySelector('#tagsWrapper')
        const allTagsWidth = allTags.offsetWidth
        const oldTag = document.querySelector(`.tag_${prevActive}`)
        const newTag = event.currentTarget

        const newTagPosition = oldTag.compareDocumentPosition(newTag)
        const newTagWidth = newTag.offsetWidth / allTagsWidth
        let transitionWidth

        if(newTagPosition === 4) {
            transitionWidth = newTag.offsetLeft + newTag.offsetWidth - oldTag.offsetLeft
        } else {
            transitionWidth = oldTag.offsetLeft + oldTag.offsetWidth - newTag.offsetLeft
            allTags.style.setProperty('--_left', newTag.offsetLeft + 'px')
        }

        allTags.style.setProperty('--_width', transitionWidth / allTagsWidth)

        setTimeout(() => {
            allTags.style.setProperty('--_left', newTag.offsetLeft + 'px')
            allTags.style.setProperty('--_width', newTagWidth)
        }, 220)
    }

    return (
        <div id= 'tagsFilterContainer'>
            <div id='tagsWrapper'>
                {content.map(({ label, selector, type}) => 
                    <div className={`tags tag_${selector}`} 
                        style={{color: active === selector? 'var(--primary-color)' : null}} 
                        onClick={(event)=> {
                            setActive(selector)
                            handleSort(selector, type) 
                            moveIndicator(event)
                            setPrevActive(selector)
                        }} 
                        key={'tag_' + label} 
                        >
                        {label}
                        
                        {active === selector && ascOrDesc === 'asc'?
                            <ArrowDropUpIcon />
                        :
                            <ArrowDropDownIcon />}
                    </div>
                )}
            
            </div>
            <div id="tagsOverlayLeft"></div>
            <div id="tagsOverlayRight"></div>
        </div>
    )
}
