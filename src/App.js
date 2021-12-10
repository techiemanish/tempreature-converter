import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
	const [temp, updatedTemp] = React.useState({f : 0 , c : 0});
	
	const toCelcius = (event) => updatedTemp({
		c : event.target.value,
		f : (+event.target.value * 9/5 + 32).toFixed(2)
	});
	
	const toFahrenheit = (event) => updatedTemp({
		c : ((+event.target.value - 32) * 5/9).toFixed(2),
		f : event.target.value
	});
	
  return (
    <div id="header">
      <h1>Tempreature Converter</h1>
	  <div className="tempreature"><label for="celcius">Celcius</label><br/>
	  <input name = "celcius"  placeholder = "Enter Tempreature in C" value = {temp.c} onChange ={toCelcius} /><br/>
	  &nbsp;&nbsp;&#8693;&nbsp;&nbsp;</div><br/>
	  <div className="tempreature"><label for="fahrenheit">Fahrenheit</label><br/>
	  <input name = "fahrenheit" placeholder = "Enter Tempreature in F" value = {temp.f} onChange ={toFahrenheit}/></div>
    </div>
  );
}export default App;
