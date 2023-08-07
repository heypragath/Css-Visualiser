import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


type data = {
  name: string,
  state: boolean,
  other?: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
}

type SwitchLabelProps = data[]

export default function SwitchLabel({ data }: { data: SwitchLabelProps }) {

  return (
    <FormGroup>
      {data.map((data) => {
        return (
          <FormControlLabel control={<Switch checked={data.state}
            onChange={(e) => data.setState(data.other ? !e.target.checked : e.target.checked)} size='medium' />} label={`${data.name}`} />
        )
      })}
    </FormGroup>
  );
}