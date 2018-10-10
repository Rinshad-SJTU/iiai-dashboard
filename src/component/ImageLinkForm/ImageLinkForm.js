import React from 'react';
import './ImageLinkForm.css';
import Camera from './photo-camera.png';
import Dropzone from  'react-dropzone';

const ImageLinkForm = ({fileSelectHandler, fileUploadHandler, imageURL, upload, onImageDrop, onImageClick, checkboxHandler}) => {
	return (
		<div>
			<div className='center'>
				<div className='form pa3'>
					<div style={{width: '49.5%', float: 'left', display: 'grid'}}>
						<div className='mb2' style={{backgroundColor: '#00172d', float: 'left', color: 'white', height: '350px', marginBottom: '10px'}}>
						{/*<div className='mb2' style={{backgroundColor: '#00172d', float: 'left', color: 'white', height: '300px'}}>*/}
							<div style={{display: 'grid'}}>
								<button hidden id='plus' onClick={upload}>Browse</button>
								<input id='selectImage' hidden type="file" multiple="multiple" onChange={fileSelectHandler} />
							</div>
							<div>
								<Dropzone
									className='dropZone'
									multiple={true}
									accept="image/*"
									onDrop={onImageDrop}
							    >
							    	Drop images
							    </Dropzone>
							    <div style={{overflowY: 'auto', height: '13.5em', marginTop: '7.5px'}}>
									{imageURL.map((image, index) => (
										<div className='boxmodel' key={index}>
	        								<img 
	        									id={index} 
	        									alt={imageURL[0] === null ? '' : image.name} 
	        									className='original' 
	        									src={imageURL[0] === null ? Camera : image.preview}
	        									onClick={
	        										imageURL[0] === null ? '' : onImageClick.bind(this, index, imageURL[0] === null ? '' : image.name)
	        									}
	        								/>
	        							</div>
	      							))}
      							</div>
							</div>
						</div>
						<div className='' style={{backgroundColor: '#00172d', color: 'white', height: '350px'}}>
						{/*<div className='' style={{backgroundColor: '#00172d', color: 'white', height: '300px'}}>*/}
							<div style={{display: 'grid'}}>
								<label id='meta'>Metadata</label>
							</div>
							<div style={{overflowY: 'auto', height: '14.9em', margin: '15px 5px', textAlign: 'left'}}>
								<div id='header' style={{display: 'none'}}>
									<div style={{marginTop: '10px'}}>
										<label style={{fontSize: '1.5em'}}>Filename: <span id='filename'></span></label>
									</div>
									<div style={{marginTop: '25px'}}>
										<label style={{fontSize: '1.5em'}}>Grade: <span id='grade'></span></label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='' style={{backgroundColor: '#00172d', float: 'right', width: '49.5%', color: 'white', height: '710px',
						display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'center'}}>
					{/*<div className='' style={{backgroundColor: '#00172d', float: 'right', width: '49.5%', color: 'white', height: '608px',
						display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'center'}}>*/}
						<div style={{display: 'grid', position: 'absolute', top: '0px', left: '0px'}}>
							<label id='enlarge'>Inference</label>
						</div>
						<div id='enlargeDiv' className='enlargeDiv'>
							<canvas hidden id="myCanvas" width={640} height={640}></canvas>
							<canvas hidden id="myCanvas2" width={640} height={640}></canvas>
							<canvas hidden id="myCanvas3" width={640} height={640}></canvas>
							<canvas hidden id="myCanvas4" width={640} height={640}></canvas>
							<canvas hidden id="myCanvas5" width={640} height={640}></canvas>
							<img id='result' style={{maxHeight: '640px'}} className='enImage' alt='' src={imageURL[0] === null ? Camera : imageURL[0].preview} />
							<div id='ul' style={{display: 'none', position: 'absolute', right: '5px', top: '3px', width: '165px'}}>
								<fieldset 
									style={{textAlign: 'initial', 
									backgroundColor: 'rgba(50, 50, 50, 0.5)', 
									fontSize: '12px',
									border: 'none'
									}}>
	    							<legend>Legend</legend>
	    							<div>
										<input id='1' style={{float: 'left', marginRight: '5px'}} onChange={checkboxHandler.bind(this, 1)} type="checkbox" name="checkbox" value="value" />
	    								<p style={{color: 'rgba(255, 255, 0, 255)'}}>Microaneurysms(MA)</p>
	    							</div>
	    							<div>
										<input id='2' style={{float: 'left', marginRight: '5px'}} onChange={checkboxHandler.bind(this, 2)} type="checkbox" name="checkbox" value="value" />
	    								<p style={{color: 'rgba(0, 255, 255, 255)'}}>Haemorrhages(HE)</p>
	    							</div>
	    							<div>
										<input id='3' style={{float: 'left', marginRight: '5px'}} onChange={checkboxHandler.bind(this, 3)} type="checkbox" name="checkbox" value="value" />
	    								<p style={{color: 'rgba(255, 0, 255, 255)'}}>Hard_Exudates(EX)</p>
	    							</div>
	    							<div>
										<input id='4' style={{float: 'left', marginRight: '5px'}} onChange={checkboxHandler.bind(this, 4)} type="checkbox" name="checkbox" value="value" />
	    								<p style={{color: 'rgba(255, 0, 0, 255)'}}>Soft_Exudates(SE)</p>
	    							</div>
	    							<div>
										<input id='5' style={{float: 'left', marginRight: '5px'}} onChange={checkboxHandler.bind(this, 5)} type="checkbox" name="checkbox" value="value" />
	    								<p style={{color: 'rgba(0, 0, 255, 255)'}}>Optic Disc(OD)</p>
	    							</div>
								</fieldset>
							</div>
						</div>
						<div style={{position: 'absolute', textAlign: 'center'}}>
							<div class="loader" id='loader'></div>
							<p id="processing" style={{display: 'none', margin: 'auto', fontSize: '1.5em'}}>Processing</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	); 
}
export default ImageLinkForm;