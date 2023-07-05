import React from 'react'

function ControlElementUI({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h3 className='pb-2 mb-5 border-b-[1px] step-1'>PlayGround</h3>
            {children}
        </div>
    )
}

export default ControlElementUI