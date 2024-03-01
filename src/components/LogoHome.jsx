import { useEffect } from "react"
import HR_green from '../assets/logo/HR_green.svg'
import HR_blue from '../assets/logo/HR_blue.svg'
import HR_purple from '../assets/logo/HR_purple.svg'

export default function Logo() {

    useEffect(() => {
        const images = document.querySelectorAll('img')
        const net = document.getElementById('net')
        const logo = document.getElementById('imgWrapper')
        const rect = logo.getBoundingClientRect()
        const radius = 1000

        const handleMouseMove = (e) => {
            const centerX = rect.left + (rect.width / 2)
            const centerY = rect.top + (rect.height / 2)
    
            const rangeX = (e.clientX - centerX) / radius
            const rangeY = (e.clientY - centerY) / radius

            shiftAll(images, rangeX, rangeY, net)
        }

        const handleMouseLeave = (e) => {
            shiftAll(images, 0, 0, net)
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        
        const shiftAll = (images ,rangeX, rangeY, net) => {
            images.forEach((image, index) => {
                shift(image, index, rangeX, rangeY)
            })

            const netTranslation = `${24 * 4 * rangeX}% ${24 * 4* rangeY}%`

            net.animate({
                translate: netTranslation
            }, {duration: 750, fill: 'forwards', easing: 'ease'})
            
        }

        const shift = (image, index, rangeX, rangeY) => {
            const maxTranslate = 24 * (index + 1)
            const currentTranslate = `${maxTranslate * rangeX}% ${maxTranslate * rangeY}%`
            image.animate({
                translate: currentTranslate
            }, {duration: 750, fill: 'forwards', easing: 'ease'})
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
          }
    }, [])

    return (
        <>
            <div id='logoWrapper'>
                <div id='imgWrapper'>
                    <img src={HR_green} alt="" />
                    <img src={HR_blue} alt="" />
                    <img src={HR_purple} alt="" />
                </div>
                <div id='net'>
                    NET
                </div>
            </div>
        </>
    )
}
