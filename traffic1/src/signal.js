import {useState,useEffect,useRef} from 'react';
import './signal.css';
export const Signal=(props)=>{
	var intial=0;
	const [count,setCount]=useState(intial);
	const signal1=useRef(false);
	const signal2=useRef(false);
	const signal3=useRef(false);
	const signal4=useRef(false);

  useEffect(()=>{

   setInterval(()=>{
      setCount(old=>old+1);
    },1000) 
  },[])
  useEffect(()=>{
  	setCount(intial)
	},[props.item])
  if(count>=0 && count<props.item*1)
      {
        signal1.current=true
        signal2.current=false
        signal3.current=false
        signal4.current=false
      }
      else if(count>props.item*1 && count<props.item*2)
      {
        signal1.current=false
        signal2.current=true
        signal3.current=false
        signal4.current=false
      }
      else if(count>props.item*2 && count<props.item*3)
      {
        signal1.current=false
        signal2.current=false
        signal3.current=true
        signal4.current=false
      }
      else if(count>props.item*3 && count<props.item*4)
      {
        signal1.current=false
        signal2.current=false
        signal3.current=false
        signal4.current=true
      }
      else if(count>props.item*4)
      {
      	setCount(intial)
      }
	return(
		<>
			<h1 style={{position:'relative',top:25+'px'}}>{count}</h1>
			<div className="first" style={{background:signal1.current?"green":"red"}}>
				<h3>Road - 1</h3>
			</div>
			<div className="second" style={{background:signal2.current?"green":"red"}}>
				<h3>Road - 2</h3>
			</div>
			<div className="third" style={{background:signal3.current?"green":"red"}}>
				<h3>Road - 3</h3>
			</div>
			<div className="four" style={{background:signal4.current?"green":"red"}}>
				<h3>Road - 5</h3>
			</div>
		</>
		)
}