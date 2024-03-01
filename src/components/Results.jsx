import { useState, useEffect } from "react"
import useStore from "../store/store"

export default function Results({ foundItems, totalItems, firstItem, lastItem }) {
  const storedIsSmallScreen = useStore(state => state.userScreen)
  const [isSmallScreen, setIsSmallScreen] = useState(storedIsSmallScreen)

  useEffect(()=> {
    setIsSmallScreen(storedIsSmallScreen)
  },[storedIsSmallScreen])

  return (
    <div id='resultsWrapper'>
    {!isSmallScreen ? (
      <>
        showing {firstItem + 1} to {lastItem} {foundItems !== totalItems ? `items of ${foundItems} filtered ` : null} results from a total of {totalItems} entries
      </>
    ) : (
      <>
        {firstItem + 1} to {lastItem} from {totalItems}
      </>
    )}
    </div>
  )
}