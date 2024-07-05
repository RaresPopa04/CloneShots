import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
	const [preview, setPreview] = useState(null);
	const [previewTwo, setPreviewTwo] = useState(null);
	const [twoCanvases, setTwoCanvases] = useState(false);
	
	const ref = useRef();
	
	const handleDownload = () => {
		if(ref.current){
			console.log(ref.current);
			html2canvas(ref.current).then(canvas => {
				const link = document.createElement('a');
				link.download = 'image.png';
				link.href = canvas.toDataURL();
				link.click();
			});
		}
	}
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if(file &&(file.type === 'image/jpeg' || file.type === 'image/png') ){
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
				
				const img = new Image();
				img.onload = ()=>{
					const width = img.width;
					const height = img.height;
					const aspectRatio = width/height;
					document.documentElement.style.setProperty('--aspect-ratio', aspectRatio);
					console.log(aspectRatio);
				}
				img.src = reader.result;
			}
			reader.readAsDataURL(file);
		}
		else{
			setPreview(null);
			alert("Please select a valid file type");
		}
	}
	const applyStyleTwo = (styleNumber) => {
		const dropboxParents = document.querySelectorAll('.canvas .uploadBox');
		const centeredDropbox = document.querySelector('.canvas .centeredDropbox');
		centeredDropbox.classList.add('two-canvases');
		dropboxParents[1].classList.remove('none');
		
		for(let attri of centeredDropbox.classList){
			if(attri.includes("style-") || attri.includes("styletwo-")){
				centeredDropbox.classList.remove(attri);
			}
		}
		centeredDropbox.classList.add(`styletwo-${styleNumber}`)
		const button = document.querySelector(`.card-wrapper .card:nth-child(${4+styleNumber+1})`);
		const activeButtons = document.querySelectorAll('.card-wrapper .card.active');
		activeButtons.forEach((button)=>{
			button.classList.remove('active');
		})
		button.classList.add('active');
		
		
	}
	const handleClickInputFile = () => {
		
		const inputFile = document.getElementById("fileInput");
		inputFile.click();
	}
	
	const handleClickInputFileTwo = () => {
		
		const inputFile = document.getElementById("fileInputTwo");
		inputFile.click();
	}
	
	const handleFileChangeTwo = (e) => {
		const file = e.target.files[0];
		if(file &&(file.type === 'image/jpeg' || file.type === 'image/png') ){
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewTwo(reader.result);
				
				const img = new Image();
				img.onload = ()=>{
					const width = img.width;
					const height = img.height;
					const aspectRatio = width/height;
					document.documentElement.style.setProperty('--aspect-ratio2', aspectRatio);
					console.log(aspectRatio);
				}
				img.src = reader.result;
			}
			reader.readAsDataURL(file);
		}
		else{
			setPreviewTwo(null);
			alert("Please select a valid file type");
		}
	}
	
	
	
	const applyStyle = (styleNumber,two) => {
		const hideDropbox = document.querySelectorAll('.canvas .uploadBox');
		hideDropbox[1].classList.add('none');
		const centeredDropbox = document.querySelector('.canvas .centeredDropbox');
		centeredDropbox.classList.remove('two-canvases');
		
		const dropboxParent = document.querySelector('.canvas .centeredDropbox');
		for(let attri of dropboxParent.classList){
			if(attri.includes('style-') || attri.includes('styletwo-')){
				dropboxParent.classList.remove(attri);
			}
		}
		dropboxParent.classList.add(`style-${styleNumber}`)
		
		const button = document.querySelector(`.card-wrapper .card:nth-child(${styleNumber+1})`);
		const activeButtons = document.querySelectorAll('.card-wrapper .card.active');
		activeButtons.forEach((button)=>{
			button.classList.remove('active');
		})
		button.classList.add('active');
		
		
		
	}
	
	return (
		<div className="container">
			<div className="left-bar">
				
			</div>
			<input type="file" onChange = {handleFileChange} id="fileInput" style={{display:"none"}}/>
			<input type="file" onChange = {handleFileChangeTwo} id="fileInputTwo" style={{display:"none"}}/>
			
			<div className="canvas" >
				<div className="canvasContainer">
					<div className="frame" >
						<div className="innerFrame" ref={ref}>
							<div className="background">
							</div>
							<div className="dropboxParent">
								<div className="dropbox">
									<div className="centeredDropbox" >
										<div className="uploadBox" onClick={handleClickInputFile}>
											{preview ==null &&
												<div class="content default">
													<div class="svg-loader undefined">
														<div>
															<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57 -.22.29-.41.6-.6.92 -.48.78-1.03 1.69-1.97 2.22 -1.38.76-2.42.05-3.17-.45 -.29-.19-.56-.37-.83-.49 -.68-.29-1.28.04-2.18 1.17 -.48.59-.94 1.18-1.41 1.77 -.29.35-.22.89.16 1.13 .6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12 .35-.86.532-1.89.19-2.75 -.12-.29-.28-.55-.52-.79 -.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51 -1.13-2.5-2.5-2.5Z"></path></svg>
														</div>
													</div>
													<h3>Drop or Paste</h3>
													<span>(PNG or JPEG)</span>
													<p class="screen-info">Adapts to image</p>
												</div>
											}
											{preview &&
												<div className="imgContainer">
													<img src={preview} alt="preview" />
												</div>}
										</div>
										<div className="uploadBox none" onClick={handleClickInputFileTwo}>
											{previewTwo ==null &&
												<div class="content default">
													<div class="svg-loader undefined">
														<div>
															<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57 -.22.29-.41.6-.6.92 -.48.78-1.03 1.69-1.97 2.22 -1.38.76-2.42.05-3.17-.45 -.29-.19-.56-.37-.83-.49 -.68-.29-1.28.04-2.18 1.17 -.48.59-.94 1.18-1.41 1.77 -.29.35-.22.89.16 1.13 .6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12 .35-.86.532-1.89.19-2.75 -.12-.29-.28-.55-.52-.79 -.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51 -1.13-2.5-2.5-2.5Z"></path></svg>
														</div>
													</div>
													<h3>Drop or Paste</h3>
													<span>(PNG or JPEG)</span>
													<p class="screen-info">Adapts to image</p>
												</div>
											}
											{previewTwo &&
												<div className="imgContainer">
													<img src={previewTwo} alt="preview" />
												</div>}
										</div>
										
									</div>
									
									
								</div>
								
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
			<button className="handleDownload" onClick={handleDownload}>
				Download as PNG
			</button>
			<div className="right-bar">
				<div className="scroller">
					<div className="card-wrapper">
          {
							Array.from({length:4}).map((_,i)=>{
								return (<div className="card" onClick={()=>applyStyle(i)}>
									<div className="frame" >
										<div className="innerFrame" ref={ref}>
											<div className="background">
											</div>
											<div className="dropboxParent">
												<div className="dropbox">
													<div className={`centeredDropbox style-${i}`} >
														<div className="uploadBox" >
															{preview ==null &&
																<div class="content default">
																	
																</div>
															}
															{preview &&
																<div className="imgContainer">
																	<img src={preview} alt="preview" />
																</div>}
														</div>
														
														
													</div>
													
													
												</div>
												
											</div>
										</div>
										
									</div>
								</div>)
							})
							
						}
						{
							Array.from({length:10}).map((_,i)=>{
								return (<div className="card" onClick={()=>applyStyleTwo(i)}>
									<div className="frame" >
										<div className="innerFrame" ref={ref}>
											<div className="background">
											</div>
											<div className="dropboxParent">
												<div className="dropbox">
													<div className={`centeredDropbox two-canvases styletwo-${i}`} >
														<div className="uploadBox">
															{preview ==null &&
																<div class="content default">
																	
																</div>
															}
															{preview &&
																<div className="imgContainer">
																	<img src={preview} alt="preview" />
																</div>}
														</div>
														<div className="uploadBox">
															{previewTwo ==null &&
																<div class="content default">
																	
																</div>
															}
															{previewTwo &&
																<div className="imgContainer">
																	<img src={previewTwo} alt="preview" />
																</div>}
														</div>
														
													</div>
													
													
												</div>
												
											</div>
										</div>
										
									</div>
								</div>)
							})
						}
            {
							Array.from({length:2}).map((_,i)=>{
								return (<div className="card" onClick={()=>applyStyle(i+14)}>
									<div className="frame" >
										<div className="innerFrame" ref={ref}>
											<div className="background">
											</div>
											<div className="dropboxParent">
												<div className="dropbox">
													<div className={`centeredDropbox style-${i+14}`} >
														<div className="uploadBox" >
															{preview ==null &&
																<div class="content default">
																	
																</div>
															}
															{preview &&
																<div className="imgContainer">
																	<img src={preview} alt="preview" />
																</div>}
														</div>
														
														
													</div>
													
													
												</div>
												
											</div>
										</div>
										
									</div>
								</div>)
							})
							
						}
						
						
					</div>
				</div>
				
			</div>
		</div>
		
	);
}

export default App;
