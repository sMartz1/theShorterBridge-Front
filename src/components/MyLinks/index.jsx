import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import getAllLinks from "../../utils/getAllLinks";
import { Button } from "@mui/material";
import "./index.scss";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function MyLinks() {
  const { user } = useAuth();
  const [list, setList] = useState(null);
  const [open,setOpen] = useState(false)
  const navigate = useNavigate();
  const fetchData = async () => {
    const data = await getAllLinks(user.uid);
    setList(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(list);
  const copyUrl = url=>{
    navigator.clipboard.writeText(url);
    setOpen(true)
  }

  const handleClose = ()=>{
    setOpen(false);
  }
  const ListItem = ({ screenshot, shortUrl, url, views, _id }) => {
    return (
      <div className="list-item">
        <div className="screenshot">
          <img src={screenshot} alt="" />
        </div>
        <div className="link-data">
          <div className="text-box original-url" onClick={()=>copyUrl(url)}>
            Original URL<p>{`${url.substring(0,30)}...`}</p>
          </div>
          <div className="text-box short-url" onClick={()=>copyUrl(`http://localhost:3000/${shortUrl}`)}>
            Short URL<p>{`http://localhost:3000/${shortUrl}`}</p>
          </div>
          <div className="views">
            <p>{`Views : ${views}`}</p>
          </div>
        </div>
      </div>
    );
  };

  if (list === null) return <p>Loading</p>;
  if (list !== null)
    return (
      <div className="my-list-container">
        <h2>Mis links</h2>
        <div className="link-list">
        <div className="button-container">
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
        >
          Crear nuevo link
        </Button>
        </div>
        
        {list.map((e) => (
          <ListItem key={e._id} {...e} />
        ))}
        </div>
   
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha copiado la url!
        </Alert>
      </Snackbar>
      </div>
    );
}
