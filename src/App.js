/*use npm start to use*/
import {useEffect, useState} from 'react';

function App() {
  const [divs,setdivs] = useState([
  <div className='d1'>JAPAN</div>,
  <div className='d2'>CANADA</div>,
  <div className='d3'>NEPAL</div>,
  <div className='d4'>CHINA</div>,
  <div className='d5'>AMERICA</div>,
  <div className='d6'>IRAN</div>,
  <div className='d7'>SUDAN</div>,
  <div className='d8'>ROMANIA</div>,
  <div className='d9'>FRANCE</div>,
  <div className='d10'>PERU</div>,
  ]);
  let score = 0;
  let click = [0,0,0,0,0,0,0,0,0,0,];
  let count = 1;
  useEffect(()=>{
    for(let i =1;i<=10;i++)
    {
    const d1 = document.querySelector('.d'+i);
    d1.addEventListener('click',function(){
      count++;
      
      if(count%2 === 0){
      let clickn = [];
      clickn = click;
      clickn[arr[i-1]-1] = clickn[arr[i-1]-1]+1;

      click =clickn;
      console.log(click);
      
      score = score+1;
  for(let i = 1;i<=10;i++)
      {
        if(click[arr[i-1]-1]>1)
        {
          score = 0;
          click = [0,0,0,0,0,0,0,0,0,0,];
          
        }
        if(click[0]+click[1]+click[2]+click[3]+click[4]+click[5]+click[6]+click[7]+click[8]+click[9]==10)
        {
          let sc = document.querySelector('body');
      sc.innerHTML = "YOU WON";
          

          
        }
      }
      console.log(score);
      let sc = document.querySelector('.score');
      sc.innerHTML = score;
      sort();
      }


    });
    
    
    
    }
  },[]);
  let arr = [1,2,3,4,5,6,7,8,9,10];

  
  
  

  function sort(){
    arr = [];
        
    while(arr.length < 10){
      var r = Math.floor(Math.random() * 10) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    
    let divsn = [];
    for (let i = 1;i<=10;i++)
    {
      divsn[i-1] = divs[arr[i-1]-1];      
    }
    setdivs(divsn);
    
    

  }

 
  return (
    <>
    <div className= "score"></div>
    <div className="App">

    
    
      {divs}
      
    </div>
    </>
  );
}

export default App;
