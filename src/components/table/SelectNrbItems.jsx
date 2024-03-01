import { useState, useEffect } from "react"
import useStore from '../../store/store'

export default function SelectNrbItems({ handleItemsPerPage, totalItems }) {
    const storedIsSmallScreen = useStore(state => state.userScreen)
    const active = {color:'var(--primary-color)', borderColor: 'var(--primary-color)', backgroundColor: 'var(--primary-light-color)', fontWeight: '500'}
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [isSmallScreen, setIsSmallScreen] = useState(storedIsSmallScreen)

    useEffect(() => {
        setIsSmallScreen(storedIsSmallScreen)
    }, [storedIsSmallScreen])

    useEffect(()=> {
        handleItemsPerPage(itemsPerPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsPerPage])

    const handleBtn = (value) => {
        setItemsPerPage(value)
    }


    return (
        <div id='selectItemsWrapper'>
            <div id='nbrItems'>
                <div className='paginationBtn' onClick={() => handleBtn(1)} style={itemsPerPage === 1? active : null}>01</div>
                <div className='paginationBtn' onClick={() => handleBtn(5)} style={itemsPerPage === 5? active : null}>05</div>
                <div className='paginationBtn' onClick={() => handleBtn(10)} style={itemsPerPage === 10? active : null}>10</div>
                <div className='paginationBtn' onClick={() => handleBtn(25)} style={itemsPerPage === 25? active : null}>25</div>
                <div className='paginationBtn' onClick={() => handleBtn(totalItems)} style={itemsPerPage === totalItems? active : null}>∞</div>
            </div>
            {!isSmallScreen ?
                <div>items per page</div>
            :
                null
            }
        </div>
    )
}
