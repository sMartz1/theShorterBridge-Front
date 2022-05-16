import React , {useState} from 'react'
import './index.scss'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Link({currentLink}) {
const urlM =`http://localhost:3000/${currentLink.shortUrl}`
const [open,setOpen] = useState(false)
const copyUrl = url=>{
  navigator.clipboard.writeText(url);
  setOpen(true)
}

const handleClose = ()=>{
  setOpen(false);
}

  return (
    <div className="link-container">
        <div className="left-side">
        <div className="link-title">Tu link</div> 
        <div className='text-box' onClick={()=>copyUrl(urlM)} >{urlM}</div>
        <img src={currentLink.screenshot} alt="" />
       
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha copiado la url!
        </Alert>
      </Snackbar>
    </div>
  )
}
