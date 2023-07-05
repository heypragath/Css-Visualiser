import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


type propTypes = {

    name: string,
    value: number,
    setValue: (value: number) => void
}

type propTypesBox = {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    boolean?: boolean,
    name: string

}


export default function ContinuousSlider({ props }: { props: propTypes | propTypesBox }) {

    const handleChange = (e: any) => {
        const value = e.target.value
        props.setValue(value)
    }
    return (
        <div className='flex items-center justify-between w-full gap-8'>
            <h1>{props.name}</h1>
            <Stack spacing={2} direction="row" sx={{ mb: 1, flex: 1 }} alignItems="center">
                <Slider value={props.value} onChange={handleChange} sx={{ flex: 1 }} />
            </Stack>
            <div>
                <input type="number" value={props.value} className='bg-transparent w-7 text-violet-700' />
            </div>
        </div>
    );
}