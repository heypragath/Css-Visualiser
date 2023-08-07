import Slider from '@mui/material/Slider';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { SliderTypes } from '../../Types/Types';

const currencies = ['px', 'rem']

const New = ["vw", "vh"]

export default function ContinuousSlider({ props }: { props: SliderTypes }) {
    let HandleUnit: string[] = []

    if (props.unit == "vw" || props.unit === "vh") {
        HandleUnit = New
    } else {
        HandleUnit = currencies
    }

    const handleChange = (e: any) => {
        const value = e.target.value
        props.setValue({ type: "", payload: value })
    }

    return (
        <div className='flex items-center justify-between w-full gap-8'>
            <h1>{props.name}</h1>
            <Slider valueLabelDisplay={props.setUnit === undefined ? "off" : "on"} value={Number(props.value)} onChange={handleChange} sx={{ flex: 1 }} max={props.unit === "rem" ? 10 : 100} />
            <div className='flex'>
                <TextField id="standard-basic" value={props.value} sx={{ display: `${props.setUnit === undefined ? "not-hidden" : "none"}` }} variant="standard" size='small' className={`w-[42px]`} />
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    defaultValue={props.unit === "vw" ? "vw" : "px"}
                    sx={{ display: `${props.setUnit === undefined ? "none" : "not-hidden"}` }}
                    onChange={(e: SelectChangeEvent) => props.setUnit!({ type: "", payload: e.target.value })}
                    autoWidth
                    label="Age"
                    variant='standard'
                >
                    {HandleUnit.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    );
}