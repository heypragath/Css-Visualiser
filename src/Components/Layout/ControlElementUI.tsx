import React from 'react'

function ControlElementUI({ children }: { children: React.ReactNode }) {
    return (
        <div className='mt-4'>
            <h3 className=' border-b-[1px] pb-2 step-1'>PlayGround</h3>
            <div className='pt-4'>

                {children}
            </div>
        </div>
    )
}

export default ControlElementUI