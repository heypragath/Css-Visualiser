import React from 'react'

function Info({ info, children }: { info: string, children: React.ReactNode }) {
    return (
        <div>
            <h1 className='border-b-[1px] pb-1 mb-3 step-3'>{info}</h1>
            <p className="step-0">{children}</p>
        </div>
    )
}

export default Info