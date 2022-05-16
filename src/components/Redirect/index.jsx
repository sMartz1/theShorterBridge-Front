import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getUrl from "../../utils/getUrl";


export default function RedirectCustom() {
  const { short } = useParams();
  const getUrlF = async()=>{
    const response = await getUrl(short);
    if(response.status === 200){
        window.location.href = response.data;
    }else{
        console.log("No se encuentra");
    }
    
  }
  useEffect(() => {
    console.log("e")
    getUrlF();
  },[])

  
 return <div>Loading...</div>;
}
