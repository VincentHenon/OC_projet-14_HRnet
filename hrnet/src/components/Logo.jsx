import { useEffect } from "react"
import useStore from "../store/store"
import HR_green from '../assets/logo/HR_green.svg'
import HR_blue from '../assets/logo/HR_blue.svg'
import HR_purple from '../assets/logo/HR_purple.svg'

export default function Logo() {
    const storedIsSmallScreen = useStore(state => state.userScreen) 
    
    useEffect(() => {       
        const handleMouseMove = (e) => {
            const images = document.querySelectorAll('img')
            const logo = document.getElementById('imgWrapper')
            const rect = logo.getBoundingClientRect()
            
            const radius = 1000;
            
            const centerX = rect.left + (rect.width / 2)
            const centerY = rect.top + (rect.height / 2)
    
            const rangeX = (e.clientX - centerX) / radius
            const rangeY = (e.clientY - centerY) / radius

            shiftAll(images, rangeX, rangeY)
        }

        if (!storedIsSmallScreen) {
            window.addEventListener('mousemove', handleMouseMove)
        } else {
            window.removeEventListener('mousemove', handleMouseMove)
        }
         
        const shiftAll = (images ,rangeX, rangeY) => {
            images.forEach((image, index) => {
                shift(image, index, rangeX, rangeY)
            })
        }

        const shift = (image, index, rangeX, rangeY) => {
            const maxTranslate = 8 * (index + 1)
            const currentTranslate = `${maxTranslate * rangeX}% ${maxTranslate * rangeY}%`
            image.animate({
                translate: currentTranslate
            }, {duration: 750, fill: 'forwards', easing: 'ease'})
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
          }
    }, [storedIsSmallScreen])

    return (
        !storedIsSmallScreen? 
            <div id='logoWrapper'style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                <div id='imgWrapper'>
                    <img className='logoImg' src={HR_green} alt="" />
                    <img className='logoImg' src={HR_blue} alt="" />
                    <img className='logoImg' src={HR_purple} alt="" />
                </div>
            <div style= {{color: 'var(--primary-color)', fontWeight: 'bold'}}>NET</div>
            </div>
        : 
            null
    )
}
