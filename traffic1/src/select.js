
import {useState} from 'react';
import {Signal} from './signal'
export const Select=()=>{
	const [selected,setSelected]=useState(3);
	const selectHandler=(event)=>{
		setSelected(event.target.value);
		console.log(event.target.value);
	}
	return(
		<>
			<select style={{width:200+'px',margin:'auto',position:'relative',top:10+'px'}} class="form-select" aria-label="Default select example" onChange={selectHandler}>
				<option>select any value</option>
				<option>3</option>
				<option>5</option>
				<option>10</option>
			</select>
			<Signal item={selected} />
		</>
		)
}