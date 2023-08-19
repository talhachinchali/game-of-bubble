import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState(0);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const [bubbleContent, setBubbleContent] = useState([]);
  const bubbleStadium = useRef(null);
  const changeFind = () => {
    
      setVal(Math.floor(Math.random() * 10));
  }
  
  
useEffect(() => {

 changeFind();
  const list=[];
  for(var i=0;i<390;i++){
list.push(<div class='bg-green-800 rounded-full w-[40px] h-[40px] flex justify-center items-center text-white font-bold'>{Math.floor(Math.random()*10)}</div>);
  }
setBubbleContent(list);
}, [])




  
useEffect(() => {
  const interval=setInterval(() => {
    if(timer>0)
  setTimer(timer-1);
  }, 1000);
  return () => {
    clearInterval(interval);
  }
}, [timer])

 

  





  

 

  return (
    <div className="App h-[100vh] flex justify-center items-center text-black">
      <div className='bg-white shadow-2xl box box-border border w-[80vw] h-[80%] rounded-[20px] overflow-hidden'>
        <div className='bg-green-800 flex justify-between items-center h-[15%] relative w-full pl-[20vw] pr-[20vw]'>
          <div
            className='bg-white flex gap-5 text-md p-3 w-fit rounded-[10px]'
          >
            <h1>Find :</h1>
            <h1 className='font-extrabold'>{timer>0?val:<h1>0</h1>}</h1>
          </div>
          <div className='bg-white flex gap-5 text-md p-3 w-fit rounded-[10px]'>
            <h1>Timer :</h1>
            <h1 className='font-extrabold'>{timer}</h1>
          </div>
          <div className='bg-white flex gap-5 text-md p-3 w-fit rounded-[10px]'>
            <h1>Score :</h1>
            <h1 className='font-extrabold'>{score}</h1>
          </div>
        </div>
        <div ref={bubbleStadium} id="stadium" className='flex  gap-2 w-full flex-wrap p-5' onClick={(e)=>{

          if(e.target.textContent==val)
          setScore(prevScore=>prevScore+5)
          else
          setScore(prevScore=>prevScore-5)

          changeFind();
        }} >
          {timer>0&&bubbleContent}
          {timer==0&&<div className='h-[60vh] w-full flex flex-col gap-5 justify-center font-extrabold items-center'><h1 className=' text-2xl'> your score is : {score}</h1>
          <div className=' button p-4 rounded-[10px] sha shadow-2xl box box-border  text-white' onClick={()=>{
            setTimer(30);
            setScore(5);
          }}>RESTART</div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
