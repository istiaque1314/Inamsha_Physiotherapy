import React, { useEffect } from "react";

function GoogleMap(){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=22.538701161135947;
        const lon=88.32069251143666;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            
            <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
            </div>
            
        </div>
    );
}
export default GoogleMap;