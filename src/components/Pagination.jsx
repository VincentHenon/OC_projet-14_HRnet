import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function Pagination({ currentPage, handlePrevPage, handleNextPage, maxPage }) {
  return (
    <div id='paginationWrapper'>
        <div className='pageBtn' onClick={handlePrevPage} 
             style={{color: currentPage === 1? 'var(--grey-color)' : undefined }}
        >
            <KeyboardArrowLeftIcon id='chevronIconLeft'>{currentPage - 1 }</KeyboardArrowLeftIcon>
        </div>
        <div id='currentPage'>{currentPage}</div>
        <div className='pageBtn' onClick={handleNextPage} 
             style={{color: currentPage === maxPage? 'var(--grey-color)' : undefined }}
        >
            <KeyboardArrowRightIcon id='chevronIconRight' >{currentPage + 1 }</KeyboardArrowRightIcon>
        </div>
    </div>
  )
}
