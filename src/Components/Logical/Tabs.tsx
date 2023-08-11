import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;

}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ setProperty }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setProperty(newValue);
    };

    const Data = ["Block", "Inline-Block", "Block", "Hidden"]

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Block" {...a11yProps(0)} />
                    <Tab label="Inline-Block" {...a11yProps(1)} />
                    <Tab label="Inline" {...a11yProps(2)} />
                    <Tab label="Hidden" {...a11yProps(3)} />
                </Tabs>
            </Box>

            {Data.map((val, index) => {
                return (
                    <CustomTabPanel key={index} value={value} index={index}>
                        <div className={`h-[20vh] bg my-4 `}>
                            <div className={`p-3 ${index === 0 && "block"} ${index === 1 && "inline-block"} bg-violet-900 rounded-2xl ${index === 2 && "inline"} ${index === 3 && "hidden"}`}>
                                {val}
                            </div>
                        </div>
                    </CustomTabPanel>

                )
            })}
        </Box>
    );
}