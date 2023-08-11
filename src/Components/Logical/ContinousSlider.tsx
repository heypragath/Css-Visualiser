import React, { useEffect, useContext } from 'react'
import Slider from '@mui/material/Slider';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { SliderTypes, Values } from '../../Types/Types';
import { CreateFluidContext } from '../../Context/FluidContext';



const currencies = ['px', 'rem']

const New = ["vw", "vh"]

export default function ContinuousSlider({ props }: { props: SliderTypes }) {

    const { dispatch } = useContext(CreateFluidContext)


    let HandleUnit: string[] = []

    if (props.unit == "vw" || props.unit === "vh") {
        HandleUnit = New
    } else {
        HandleUnit = currencies
    }

    useEffect(() => {
        const unit = props.name === "Maximum Value" ? "rem" : "px"
        if (dispatch) {
            dispatch({ type: Values.setFinalUnit, payload: unit })
        }
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        console.log(value)
        if (props.setValue) props.setValue({ payload: value as number })
        if (props.setUseState) props.setUseState(value)
    }

    function Onchange(e) {
        const value = e.target.value
        if (props.setUnit) props.setUnit({ payload: value as string })
    }

    return (
        <div className='flex items-center justify-between w-full gap-8'>
            <h1>{props.name}</h1>
            <Slider valueLabelDisplay={props.setUnit === undefined ? "off" : "on"} step={props.max === 3 ? 0.1 : 1} value={Number(props.value)} onChange={handleChange} sx={{ flex: 1 }} max={props.max || (props.unit === "rem" ? props.name === "Maximum Value" ? 50 : 10 : 100)} />
            <div className='flex'>
                <TextField id="standard-basic" value={props.value} sx={{ display: `${props.setUnit === undefined ? "not-hidden" : "none"}` }} variant="standard" size='small' className={`w-[42px]`} />
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    defaultValue={props.unit === "vw" ? "vw" : props.name === "Maximum Value" || props.name === "Final Value" ? "rem" : "px"}
                    sx={{ display: `${props.setUnit === undefined ? "none" : "not-hidden"}` }}
                    onChange={(e: SelectChangeEvent) => Onchange(e)}
                    autoWidth
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