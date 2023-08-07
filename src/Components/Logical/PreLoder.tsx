import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function PreLoder() {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)


    useEffect(() => {

        const TL = gsap.timeline({
            // defaults: {
            //     ease: "power2"
            // }
        })


        TL
            .to(".apple", {
                stagger: 0.6,
                duration: .8,
                opacity: 1,
                y: -50,
                ease: "Power4.easeOut",
                delay: .5
            }, "=-0.2")
            .to(".ref-element .apple", { opacity: 0, duration: 0.1, stagger: 0.15, ease: "none", onStart: homeActive }, "-=0.4")
            .to(ref3.current, { y: "-100%", duration: 0.4, position: "absolute" })
            .to(ref2.current, { display: "none", duration: 0 })

        function homeActive() {
            gsap.to(".ref-elements", {
                duration: .01,
                opacity: 0,
                stagger: .15,
                ease: "none",
                delay: .15
            });
        }



        return () => {

            TL.kill()

        }
    }, [])



    return (
        <div>
            <div ref={ref2} className='fixed inset-0 w-full h-screen overflow-hidden z-[500]'></div>
            <div ref={ref3} className='fixed z-10 w-full h-full overflow-hidden bg-black pointer-events-none'>
                <div className='flex items-center justify-center h-full apple'>
                    <div ref={ref} className='absolute ref-element'>
                        <p className='text-9xl'>Hello</p>
                    </div>
                    <div ref={ref} className='absolute opacity-0 ref-element'>
                        <p className='text-9xl'>Namaste</p>
                    </div>
                    <div ref={ref} className='absolute opacity-0 ref-element'>
                        <p className='text-9xl'>Bonjour</p>
                    </div>
                    <div ref={ref} className='absolute opacity-0 ref-element'>
                        <p className='text-9xl'>Hola</p>
                    </div>
                    <div ref={ref} className='absolute opacity-0 ref-element'>
                        <p className='text-9xl'>Hallo</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PreLoder