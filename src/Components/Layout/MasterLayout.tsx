import React from 'react'
import Header from '../UI/Header'
import ContactMe from '../UI/ContactMe'
import Footer from '../UI/Footer'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function MasterLayout({ children }: { children: React.ReactNode }) {

    // gsap.registerPlugin(ScrollTrigger)

    // const ref = useRef(null)

    // useEffect(() => {



    //     return () => {

    //     }
    // }, [])




    return (

        <>


            <div className='overflow-hidden layout-grid' >
                <Header />
                <div className='grow-[99] max-w-full'>
                    <main className='min-h-screen mx-auto mt-2 width px gridTempate'>
                        <div>

                        </div>
                        <div className=''>
                            {children}
                            <ContactMe />
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    )
}

export default MasterLayout