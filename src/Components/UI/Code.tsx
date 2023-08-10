import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';


const Code = ({ children, width }: { children: string, width?: string }) => {

    const [Copy, setCopy] = useState(false)

    const CodeWidth = width === "100" ? "w-full" : "w-wrapper-code-width"


    function HandleCopy() {
        navigator.clipboard.writeText(children)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    }


    return (
        <div className={`flex flex-col ${CodeWidth}`}>
            <div className='bg-[#37414e] px-1 py-0.5 flex justify-between items-center'>
                <p className='step--2'>Generated Code</p>
                <button onClick={() => HandleCopy()}>
                    {!Copy ? <ContentCopyIcon fontSize="small" /> : "Copied"}
                </button>
            </div>
            <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{
                background: '#0a0118',
                paddingRight: `min(0.7rem + 1vw, 2rem)`,
                fontSize: `min(0.7rem + 1vw, 1rem)`,
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",

            }} >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default Code;