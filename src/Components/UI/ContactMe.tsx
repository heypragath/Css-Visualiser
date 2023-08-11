import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactMe() {

  interface DataType {
    name: string,
    icon: React.ReactNode,
    address: string,
    link: string
  }

  const Data: DataType[] = [
    {
      name: 'Email',
      icon: <EmailIcon />,
      address: "HeyPragath@gmail.com",
      link: "mailto:HeyPragath@gmail.com"
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      address: "@PragathRao",
      link: "https://twitter.com/PragathRao"
    },
    {
      name: 'Linkedln',
      icon: <LinkedInIcon />,
      address: "@PragathRao",
      link: "https://www.linkedin.com/in/pragath-is-ambitious/"
    },
  ]

  return (
    <div className='mt-8'>
      <h5 className=' border-t-[1px] pt-4 step-1'>Contact Me</h5>
      <div className='grid py-3 mt-2 gap grid-auto'>
        {Data.map((item) => {
          return (
            <a target='blank' href={item.link}>

              <div className="flex flex-col gap-0.5 p-5 box">
                {item.icon}
                <h3>{item.name}</h3>
                <h4>{item.address}</h4>
              </div>
            </a>

          )
        })}
      </div>
    </div>
  )
}

export default ContactMe