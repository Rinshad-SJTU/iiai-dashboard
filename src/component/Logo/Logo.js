import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo-iiai.png';
import './Logo.css';

const Logo = () => {
	return (
		// <div className='ma1' style={{display: 'flex', justifyContent: 'flex-end'}}>
		<div className='ma1' style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', background: 'rgba(0, 0, 0, 0.4)'}}>
			<p style={{color: 'white', fontSize: '2em'}}>Inception Institute of Artificial Intelligence</p>
			<p style={{color: 'white', fontSize: '1.5em', margin: '0', position: 'absolute', bottom: '15%', left: '7.5%'}}>Diabetics Retinopathy Prediction</p>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 205 }} >
				 <div className="Tilt-inner pa1">
				 <img alt='logo' src={logo} style={{height: '95px'}}/>
				{/*<img style={{paddingTop: '23px'}} alt='logo' src={logo} />*/}
				 </div>
			 </Tilt>
		</div>
	);
}
export default Logo;