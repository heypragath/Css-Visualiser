import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Code from '../UI/Code';

export default function ToggleButtons({ data }: { data: any }) {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment)
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            color='primary'
        >
            {
                data?.map(data => {
                    return (
                        <ToggleButton onFocus={() => data.setState(data.index)} onBlur={() => data.setState(0)} value={data.value} aria-label="left aligned">
                            <Code width='100'>
                                {data.code}
                            </Code>
                        </ToggleButton>
                    )
                })
            }
        </ToggleButtonGroup>
    );
}