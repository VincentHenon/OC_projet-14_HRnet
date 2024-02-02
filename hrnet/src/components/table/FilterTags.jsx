import React, { useState, useRef, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function FilterTags({ content, handleSort, ascOrDesc }) {
    const [active, setActive] = useState(null)
    const [displayLeftChevron, setDisplayLeftChevron] = useState(false)
    const [displayRightChevron, setDisplayRightChevron] = useState(true)
    const tagsRef = useRef(null)
    let startX = 0
    
    // handling scroll X position
    const handleScroll = () => {
        if (tagsRef.current) {
            startX = tagsRef.current.scrollLeft
            setDisplayLeftChevron(startX !== 0)
            setDisplayRightChevron(startX + tagsRef.current.clientWidth < tagsRef.current.scrollWidth)
        }
    }

    // check X positions
    useEffect(() => {
        if (tagsRef.current) {
            tagsRef.current.addEventListener('scroll', handleScroll)
        
            // create an error message
            /* return () => {
                 tagsRef.current.removeEventListener('scroll', handleScroll)
            }*/
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tagsRef])

    return (
        <div id='tagsFilterContainer'>
            <div id='tagsWrapper' ref={tagsRef}>
                {content.map(({ label, selector, type}) => 
                    <div className={`tags tag_${selector}`} 
                        style={{color: active === selector? 'var(--primary-color)' : null}} 
                        onClick={()=> {
                            setActive(selector)
                            handleSort(selector, type) 
                        }}
                        key={'tag_' + label} 
                        onScroll={() => {
                            handleScroll()
                        }}
                        >
                        {label}
                        
                        {active === selector && ascOrDesc === 'asc'?
                            <ArrowDropUpIcon />
                        :
                            <ArrowDropDownIcon />}
                    </div>
                )}
            {displayLeftChevron&& <div id='tagsOverlayLeft'> <ChevronLeftRoundedIcon/></div>}
            {displayRightChevron&& <div id='tagsOverlayRight'><ChevronRightRoundedIcon/></div>}
        </div>    
            </div>
    )
}
