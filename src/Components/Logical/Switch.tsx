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




export default function SwitchLabel({ data, setVar }: {
  data: SwitchLabelProps, setVar: React.Dispatch<React.SetStateAction<boolean>>,
}) {


  // const data2 = data.map((data, index) => {
  //   if(data2.length)

  // })

  // data[index]?.other === data[data.length - index]?.other && data[index]?.other || data[index - 1]?.other !== true

  // for (let index = 0; index < data.length; index++) {
  //   if (data[index]?.other === false) {
  //     console.log("broke")
  //     break

  //   } else if (data[index]?.other === true) {
  //     if (data[data.length - index]?.other === true)
  //       //   data[index].other = false
  //       // data[data.length - index].other = false
  //       console.log("All are True now")
  //   }

  // }


  return (
    <FormGroup>
      {data.map((data) => {
        return (
          <FormControlLabel control={
            <Switch
              checked={data.state}
              onChange={(e) => data.setState(data.other ? !e.target.checked : e.target.checked)}
              size='medium' />
          }
            label={`${data.name}`} />
        )
      })}
    </FormGroup>
  );
}