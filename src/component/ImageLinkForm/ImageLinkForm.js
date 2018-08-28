import React from 'react';
import './ImageLinkForm.css';
import Camera from './photo-camera.png';
import Dropzone from  'react-dropzone';

const ImageLinkForm = ({fileSelectHandler, fileUploadHandler, imageURL, upload, onImageDrop, onImageClick}) => {
	return (
		<div>
			<div className='center'>
				<div className='form pa3'>
					<div style={{width: '49.5%', float: 'left', display: 'grid'}}>
						<div className='mb2' style={{backgroundColor: '#00172d', float: 'left', color: 'white', height: '300px'}}>
						{/*<div className='mb2' style={{backgroundColor: 'rgb(56,58,76)', float: 'left', color: 'white', height: '300px'}}>*/}
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
	        									alt='' 
	        									className='original' 
	        									src={imageURL[0] === null ? Camera : image.preview}
	        									onClick={onImageClick.bind(this, index)}
	        								/>
	        							</div>
	      							))}
      							</div>
							</div>
						</div>
						<div className='' style={{backgroundColor: '#00172d', color: 'white', height: '300px'}}>
							<div style={{display: 'grid'}}>
								<label id='meta'>Meta</label>
							</div>
							<div style={{overflowY: 'auto', height: '14.9em', margin: '15px 5px'}}>
								<div style={{float: 'left'}}>
									<ul id='ol' style={{display: 'none'}}>
										<li>
											<p id='x' style={{color: '#6C75C0'}}>Meta: X</p>
										</li>
										<li>
											<p id='y' style={{color: '#B24C8D'}}>Meta: Y</p>
										</li>
										<li>
											<p id='z' style={{color: '#B1A64B'}}>Meta: Z</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='' style={{backgroundColor: '#00172d', float: 'right', width: '49.5%', color: 'white', height: '608px'}}>
						<div style={{display: 'grid'}}>
							<label id='enlarge'>Inference</label>
						</div>
						<div id='enlargeDiv' className='enlargeDiv'>
							<img id='result' className='enImage' alt='' src={imageURL[0] === null ? Camera : imageURL[0].preview} />
						</div>
					</div>
				</div>
			</div>
		</div>
	); 
}
export default ImageLinkForm;