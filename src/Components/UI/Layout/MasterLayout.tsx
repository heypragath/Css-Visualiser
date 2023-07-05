import React from 'react'
import Header from '../../Header'
import ContactMe from '../ContactMe'
import Footer from '../Footer'

function Layout({ children }: { children: React.ReactNode }) {
    return (
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
    )
}

export default Layout