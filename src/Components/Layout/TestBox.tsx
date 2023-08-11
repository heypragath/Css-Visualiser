import React, { useContext, useEffect, useRef } from 'react'
import { CreateFluidContext } from '../../Context/FluidContext'
import { Values } from '../../Types/Types'

function TestBox({ children, AddClass }: { children: React.ReactNode, AddClass?: string, }) {

    let timeoutRef

    const { dispatch } = useContext(CreateFluidContext)

    const ref = useRef(null)

    const handleResize = (entries) => {
        clearTimeout(timeoutRef);

        timeoutRef = setTimeout(() => {

            for (const entry of entries) {
                if (entry.target === ref.current) {
                    console.log('Div width changed:', entry.contentRect.width);
                    dispatch!({ type: Values.calcWidth, payload: Math.floor(entry.contentRect.width) })
                }
            }
        }, 100)
    };

    useEffect(() => {
        const observer = new ResizeObserver(handleResize);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);



    return (
        <div ref={ref} className={`bg min-w-min justify-center items-center max-w-7xl my-margin-clamp ${AddClass} `}>
            {children}
        </div>
    )
}

export default TestBox