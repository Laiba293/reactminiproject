import React from "react";



function App(){
    
let currDate = new Date(2023 , 2 , 26 , 10);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};


if(currDate >= 1 && currDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if (currDate>=12 && currDate< 19){
  greeting = "Good Afternoon";
  cssStyle.color = 'orange';
}else{
  greeting = "Good Night";
  cssStyle.color = 'black';
}


return(
    <>
    <div>
        <h1>
          Hello sir,<span style ={cssStyle}> {greeting}</span>
        </h1>
    </div>
    </>
);
}
export default App;
