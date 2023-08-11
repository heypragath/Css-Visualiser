import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordianMenu from './AccordianMenu';

export default function Accordian({ menu, title }) {

    return (
        <Accordion sx={{ background: "none" }} elevation={0} defaultExpanded= {true} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#211e70d9" }}
            >
                <p className='text-white'>{title}</p>
            </AccordionSummary>
            <AccordionDetails>
                <AccordianMenu menu={menu} />
            </AccordionDetails>
        </Accordion>
    );
}

