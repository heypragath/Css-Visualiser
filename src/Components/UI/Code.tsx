import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';


const Code = ({ children }) => {

    const [Copy, setCopy] = useState(false)

    function HandleCopy() {
        navigator.clipboard.writeText(children)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    }


    return (
        <div className='inline-block my-7'>
            <div className='bg-[#37414e] px-1 py-0.5 flex justify-between items-center'>
                <p className='step--2'>Generated Code</p>
                <button onClick={() => HandleCopy()}>
                    {!Copy ? <ContentCopyIcon fontSize="small" /> : "Copied"}
                </button>
            </div>
            <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{
                background: '#0a0118',
                width: `min(15rem + 10vw, 600px)`,
                maxHeight: 'min-content',
                paddingRight: `min(0.7rem + 1vw, 2rem)`,
                fontSize: `min(0.7rem + 1vw, 1rem)`,
                wordWrap: "break-word",
                whiteSpace: "pre-wrap"
            }} >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default Code;