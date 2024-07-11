import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import ScreenshotPosition from './ScreenshotPositions';

function App() {
	const [preview, setPreview] = useState(null);
	const [previewTwo, setPreviewTwo] = useState(null);
	const [twoCanvases, setTwoCanvases] = useState(false);
	const [bo, setSliderValue] = useState(50);
	
	const ref = useRef();

	const layoutsNames = ["Screenshot", "Browser","Minimal Phone","Minimal Desktop","Iphone15","Iphone 15 Plus", "Iphone 15 Pro", "Iphone 15 Pro Max","Nothing Phone","Pixel 7 Pro","Iphone 14","Iphone 14 Plus","Iphone 14 Pro", "Iphone 14 Pro Max","Iphone 13","Iphone 13 Pro","Iphone SE","iPad Pro 11","iPad Pro 13","iPad Air","iPadMini","Macbook Pro 16","Macbook Air M2","Mackbook Air 13","Macbook Pro 13","Macbook Pro 15","Surface Book","iMac24","Pro Display XDR","Studio Display","iMac Pro","iMax Retina","Apple Watch Ultra","Apple Watch Series 8"]
	const layoutsNum = [16,9,14,10,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,8,8,8,8,8,8,9,9,9,9,9,10,10]
	const cover = [
		"https://shots.so/mockups/Screenshot/thumbs/1.png",
		"https://shots.so/mockups/Browser/thumbs/1.png",
		"https://shots.so/mockups/Minimal%20Phone/thumbs/1.png",
		"https://shots.so/mockups/Minimal%20Desktop/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2015/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2015%20Plus/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2015%20Pro/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2015%20Pro%20Max/thumbs/1.png",
		"https://shots.so/mockups/Nothing%20Phone/thumbs/1.png",
		"https://shots.so/mockups/Pixel%207%20Pro/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2014/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2014%20Plus/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2014%20Pro/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2014%20Pro%20Max/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2013/thumbs/1.png",
		"https://shots.so/mockups/iPhone%2013%20Pro/thumbs/1.png",
		"https://shots.so/mockups/iPhone%20SE/thumbs/1.png",
		"https://shots.so/mockups/iPad%20Pro%2011/thumbs/1.png",
		"https://shots.so/mockups/iPad%20Pro%2013/thumbs/1.png",
		"https://shots.so/mockups/iPad%20Air/thumbs/1.png",
		"https://shots.so/mockups/iPad%20Mini/thumbs/1.png",
		"https://shots.so/mockups/Macbook%20Pro%2016/thumbs/1.png",
		"https://shots.so/mockups/Macbook%20Air%20M2/thumbs/1.png",
		"https://shots.so/mockups/Macbook%20Air%2013/thumbs/1.png",
		"https://shots.so/mockups/Macbook%20Pro%2013/thumbs/1.png",
		"https://shots.so/mockups/Macbook%20Pro%2015/thumbs/1.png",
		"https://shots.so/mockups/Surface%20Book/thumbs/1.png",
		"https://shots.so/mockups/iMac%2024/thumbs/1.png",
		"https://shots.so/mockups/Pro%20Display%20XDR/thumbs/1.png",
		"https://shots.so/mockups/Studio%20Display/thumbs/1.png",
		"https://shots.so/mockups/iMac%20Pro/thumbs/1.png",
		"https://shots.so/mockups/iMac%20Retina/thumbs/1.png",
		"https://shots.so/mockups/Apple%20Watch%20Ultra/thumbs/1.png",
		"https://shots.so/mockups/Apple%20Watch%20Series%208/thumbs/1.png",
	]
	const previewImages = [
		[
			"https://shots.so/mockups/Screenshot/styles/default.png",
			"https://shots.so/mockups/Screenshot/styles/glass-light.png",
			"https://shots.so/mockups/Screenshot/styles/glass-dark.png",
		],
		[
			"https://shots.so/mockups/Browser/styles/safari-light.png",
			"https://shots.so/mockups/Browser/styles/chrome-light.png",
			"https://shots.so/mockups/Browser/styles/arc-light.png",
		],
		[
			"",
			"",
			"",
		],
		[
			"",
			"",
			"",
		],
		[
			"https://shots.so/mockups/iPhone%2015/styles/black.png",
			"https://shots.so/mockups/iPhone%2015/styles/blue.png",
			"https://shots.so/mockups/iPhone%2015/styles/green.png"
		],
		[
			"https://shots.so/mockups/iPhone%2015%20Plus/styles/black.png",
			"https://shots.so/mockups/iPhone%2015%20Plus/styles/blue.png",
			"https://shots.so/mockups/iPhone%2015%20Plus/styles/green.png"
		],
		[
			"https://shots.so/mockups/iPhone%2015%20Pro/styles/dark-blue.png",
			"https://shots.so/mockups/iPhone%2015%20Pro/styles/black-titanium.png",
			"https://shots.so/mockups/iPhone%2015%20Pro/styles/natural-titanium.png"
		],
		[
			"https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/dark-blue.png",
			"https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/black-titanium.png",
			"https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/natural-titanium.png"
		],
		[
			"https://shots.so/mockups/Nothing%20Phone/styles/white.png",
			"https://shots.so/mockups/Nothing%20Phone/styles/black.png",
			""
		],
		[
			"https://shots.so/mockups/Pixel%207%20Pro/styles/hazel.png",
			"https://shots.so/mockups/Pixel%207%20Pro/styles/obsidian.png",
			"https://shots.so/mockups/Pixel%207%20Pro/styles/snow.png"
		],
		[
			"https://shots.so/mockups/iPhone%2014/styles/midnight.png",
			"https://shots.so/mockups/iPhone%2014/styles/blue.png",
			"https://shots.so/mockups/iPhone%2014/styles/purple.png"
		],
		[
			"https://shots.so/mockups/iPhone%2014%20Plus/styles/midnight.png",
			"https://shots.so/mockups/iPhone%2014%20Plus/styles/blue.png",
			"https://shots.so/mockups/iPhone%2014%20Plus/styles/purple.png"
		],
		[
			"https://shots.so/mockups/iPhone%2014%20Pro/styles/space-black.png",
			"https://shots.so/mockups/iPhone%2014%20Pro/styles/silver.png",
			"https://shots.so/mockups/iPhone%2014%20Pro/styles/deep-purple.png"
		],
		[
			"https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/space-black.png",
			"https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/silver.png",
			"https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/deep-purple.png"
		],
		[
			"https://shots.so/mockups/iPhone%2013/styles/midnight.png",
			"https://shots.so/mockups/iPhone%2013/styles/starlight.png",
			"https://shots.so/mockups/iPhone%2013/styles/blue.png"
		],
		[
			"https://shots.so/mockups/iPhone%2013%20Pro/styles/graphit.png",
			"https://shots.so/mockups/iPhone%2013%20Pro/styles/silver.png",
			"https://shots.so/mockups/iPhone%2013%20Pro/styles/sierra-blue.png"
		],
		[
			"https://shots.so/mockups/iPhone%20SE/styles/black.png",
			"https://shots.so/mockups/iPhone%20SE/styles/white.png",
			"https://shots.so/mockups/iPhone%20SE/styles/red.png"
		],
		[
			"https://shots.so/mockups/iPad%20Pro%2011/styles/space-grey.png",
			"https://shots.so/mockups/iPad%20Pro%2011/styles/silver.png",
			""
		],
		[
			"https://shots.so/mockups/iPad%20Pro%2013/styles/space-grey.png",
			"https://shots.so/mockups/iPad%20Pro%2013/styles/silver.png"
		],
		[
			"https://shots.so/mockups/iPad%20Air/styles/space-grey.png",
			"https://shots.so/mockups/iPad%20Air/styles/starlight.png",
			"https://shots.so/mockups/iPad%20Air/styles/blue.png"
		],
		[
			"https://shots.so/mockups/iPad%20Mini/styles/space-grey.png",
			"https://shots.so/mockups/iPad%20Mini/styles/starlight.png",
			"https://shots.so/mockups/iPad%20Mini/styles/pink.png"
		],
		[
			"","",""
		],
		[
			"https://shots.so/mockups/Macbook%20Air%20M2/styles/midnight.png",
			"https://shots.so/mockups/Macbook%20Air%20M2/styles/silver.png",
			"https://shots.so/mockups/Macbook%20Air%20M2/styles/space-gray.png"
		],
		[
			"https://shots.so/mockups/Macbook%20Air%2013/styles/space-grey.png",
			"https://shots.so/mockups/Macbook%20Air%2013/styles/silver.png",
			"https://shots.so/mockups/Macbook%20Air%2013/styles/gold.png"
		],
		[
			"https://shots.so/mockups/Macbook%20Pro%2013/styles/space-grey.png",
			"https://shots.so/mockups/Macbook%20Pro%2013/styles/silver.png",
			""
		],
		[
			"https://shots.so/mockups/Macbook%20Pro%2015/styles/space-grey.png",
			"https://shots.so/mockups/Macbook%20Pro%2015/styles/silver.png",
			""
		],
		[
			"","",""
		],
		[
			"https://shots.so/mockups/iMac%2024/styles/silver.png",
			"https://shots.so/mockups/iMac%2024/styles/blue.png",
			"https://shots.so/mockups/iMac%2024/styles/purple.png"
		],
		[
			"","",""
		],
		[
			"","",""
		],
		[
			"","",""
		],
		[
			"","",""
		],
		[
			"https://shots.so/mockups/Apple%20Watch%20Ultra/styles/apple-watch-ultra.png",
			"https://shots.so/mockups/Apple%20Watch%20Ultra/styles/midnight-ocean-band.png",
			"https://shots.so/mockups/Apple%20Watch%20Ultra/styles/orange-alpine-loop.png"
		],
		[
			"https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-midnight.png",
			"https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-silver.png",
			"https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-starlight.png"
		]
	]
	const extraPreview = [6,3,0,0,2,2,1,1,0,0,2,2,1,1,2,1,0,0,0,2,1,0,1,0,0,0,0,4,0,0,0,0,1,0];
		
	useEffect(()=>{
		const activeBtnRight = document.querySelector('.active-btn.right');
		activeBtnRight.style.setProperty('--position', '82%');

		const  firstLayout  = document.querySelector('.layoutPanel .list .grid button');
		const firstFilter = document.querySelector('.layoutPanel .filters .buttons button');
		firstFilter.classList.add('active');
		firstLayout.classList.add('active');

	},[])
	const handleFrameChange = (e) => {	
			
		const panelBtns = document.querySelectorAll('.panelBtn .preview');
		panelBtns.forEach((panelBtns)=>{
			panelBtns.classList.remove('active');
		})
		console.log(e.target);
		e.target.querySelector('.preview').classList.add('active');

		const uploadBoxes = document.querySelectorAll('.uploadBox');
		uploadBoxes.forEach((uploadBox)=>{
			if(uploadBox.querySelector('.screenshot-glass')){
				uploadBox.querySelector('.screenshot-glass').remove();
			}
			if(uploadBox.querySelector('.stack1')){
				uploadBox.querySelector('.stack1').classList.add('none');
			}
			if(uploadBox.querySelector('.stack2')){
				uploadBox.querySelector('.stack2').classList.add('none');
			}
			const elem = document.createElement('div')
			elem.classList.add("screenshot-glass");
			elem.classList.add(e.target.id);
			if(e.target.id === 'screenshot-stack' || e.target.id === "screenshot-stack2"){
				const div1 = document.querySelectorAll('.stack1');
				div1.forEach((div11)=>{
					div11.classList.remove('none');
				})
				const div2 = document.querySelectorAll('.stack2');
				div2.forEach((div22)=>{
					div22.classList.remove('none');
				})
				uploadBox.prepend(elem);
				return;
			}
			if(e.target.id === 'screenshot-retro' || e.target.id === "screenshot-card"){
				const div1 = document.querySelectorAll('.stack1');
				div1.forEach((div11)=>{
					div11.classList.remove('none');
				})
				uploadBox.prepend(elem);
				return;
			}


			uploadBox.prepend(elem);

		})

	}
	
	const handleDownload = () => {
		console.log(ref.current);	
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

	const handleSliderChange = (e) => {
		const slider = e.currentTarget;
		const fullSlider = slider.querySelector('.fullSlider');
		const line = slider.querySelector('.line');
		const labels = slider.querySelector('.labels');
		const value = labels.querySelector('.value');

		const rect = slider.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const width = rect.width;
		const percent = x/width;
		fullSlider.style.setProperty('--size', (100-percent*100)+"%");
		line.style.setProperty('--leftVal', percent*100+"%");
		value.innerHTML = Math.round(percent*40);

		if(labels.innerHTML.includes('Radius')){
			document.documentElement.style.setProperty('--border-radius', percent*20+"px");
		
		}
		
		const activeBtn = slider.nextElementSibling.querySelector('.active-btn');
		if(activeBtn == null){
			return;
		}
		if(value.innerHTML === '0'){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '17%');
		}else if(value.innerHTML === '20'){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '50%');
			
		}else if(value.innerHTML === '40'){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '82%');
		}else{
			activeBtn.classList.add('none');
		}



	}

	const modifyBorderButton = (value) => {
		const slider = document.querySelector('.slider');
		const fullSlider = slider.querySelector('.fullSlider');
		const line = slider.querySelector('.line');
		const labels = slider.querySelector('.labels');
		const activeBtn = slider.nextElementSibling.querySelector('.active-btn');
		const valueLabel = labels.querySelector('.value');
		valueLabel.innerHTML = Math.round(value*40);
		fullSlider.style.setProperty('--size', (100-value*100)+"%");
		line.style.setProperty('--leftVal', value*100+"%");
		if(labels.innerHTML.includes('Radius')){
			document.documentElement.style.setProperty('--border-radius', value*40+"px");
		}
		if(value === 0){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '17%');
		}else if(value === 0.5){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '50%');
			
		}else if(value === 1){
			activeBtn.classList.remove('none');
			activeBtn.style.setProperty('--position', '82%');
		}else{
			activeBtn.classList.add('none');
		}
	}

	const handleOpacityChange = (e) => {
		const slider = e.currentTarget;
		const fullSlider = slider.querySelector('.fullSlider');
		const line = slider.querySelector('.line');
		const labels = slider.querySelector('.labels');
		const value = labels.querySelector('.value');

		const rect = slider.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const width = rect.width;
		const percent = x/width;
		fullSlider.style.setProperty('--size', (100-percent*100)+"%");
		line.style.setProperty('--leftVal', percent*100+"%");
		value.innerHTML = 10+Math.round(percent*60);
		const content = document.querySelectorAll('.uploadBox');
		content.forEach((content)=>{
			content.style.setProperty('--shadowOpacity', 10+Math.round(percent*60)+"%");
		})

	}

	const modifyOpacity = (e,value) => {
		console.log(value);
		if(value == 1){
			const slider = document.querySelectorAll('.slider')[1];
			const content = document.querySelectorAll('.uploadBox');
			content.forEach((content)=>{
				content.style.setProperty('--shadowOpacity', 10+Math.round(0*60)+"%");
			})
			slider.classList.add('inactive');
			const activeBtn = e.currentTarget;
			const parentActiveBtn = activeBtn.parentElement.querySelector('.active-btn');
			parentActiveBtn.style.setProperty('--position', '17%');
		}
		else if(value == 2){
			const slider = document.querySelectorAll('.slider')[1];
			
			slider.classList.remove('inactive');
			const labels = slider.querySelector('.labels');
			const valueLabel = labels.querySelector('.value');
			
			const content = document.querySelectorAll('.uploadBox');
			content.forEach((content)=>{
				content.style.setProperty('--shadowOpacity', valueLabel.innerHTML+"%");
				content.style.setProperty('--offsetX', '0px');
				content.style.setProperty('--offsetY', '0px');
			})
			const activeBtn = e.currentTarget;
			const parentActiveBtn = activeBtn.parentElement.querySelector('.active-btn');
			parentActiveBtn.style.setProperty('--position', '50%');
		}
		else if(value == 3){
			const slider = document.querySelectorAll('.slider')[1];
			
			slider.classList.remove('inactive');
			const labels = slider.querySelector('.labels');
			const valueLabel = labels.querySelector('.value');
			const content = document.querySelectorAll('.uploadBox');
			content.forEach((content)=>{
				content.style.setProperty('--shadowOpacity', valueLabel.innerHTML+"%");
				content.style.setProperty('--offsetX', '8px');
				content.style.setProperty('--offsetY', '8px');
			})
			const activeBtn = e.currentTarget;
			const parentActiveBtn = activeBtn.parentElement.querySelector('.active-btn');
			parentActiveBtn.style.setProperty('--position', '82%');
		
		}

	}

	const startSliderOpacity = (e) => {
		handleOpacityChange(e);
		const slider = e.currentTarget;
		slider.addEventListener('mousemove', handleOpacityChange);
	}

	const stopSliderOpacity = (e) => {
		const slider = e.currentTarget;
		slider.removeEventListener('mousemove', handleOpacityChange);
	}

	const handleSliderScale = (e) => {
		const slider = e.currentTarget;
		const fullSlider = slider.querySelector('.fullSlider');
		const line = slider.querySelector('.line');
		const labels = slider.querySelector('.labels');
		const value = labels.querySelector('.value');

		const rect = slider.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const width = rect.width;
		const percent = x/width;
		fullSlider.style.setProperty('--size', (100-percent*100)+"%");
		line.style.setProperty('--leftVal', percent*100+"%");
		value.innerHTML = Math.round(percent*100);
		const content = document.querySelectorAll('.centeredDropbox');
		content.forEach((content)=>{
			content.style.setProperty('--scale', 0.5+ percent);
		})


	}
	const startSliderScale = (e) => {
		handleSliderScale(e);
		const slider = e.currentTarget;
		slider.addEventListener('mousemove', handleSliderScale);
	}

	const stopSliderScale = (e) => {
		const slider = e.currentTarget;
		slider.removeEventListener('mousemove', handleSliderScale);
	}

	const startSlider = (e) => {
		handleSliderChange(e);
		const slider = e.currentTarget;
		slider.addEventListener('mousemove', handleSliderChange);
	}

	const stopSlider = (e) => {
		const slider = e.currentTarget;
		slider.removeEventListener('mousemove', handleSliderChange);
	}


	const handlePositionMove = (e,id) => {
		const button = e.currentTarget;
		const colParent = button.parentElement;
		const gridParent = colParent.parentElement;
		const wholeParent = gridParent.parentElement;
		const selectBtn = wholeParent.querySelector('.selectBtn');

		let posXBtn = 0;
		let posYBtn = 0;

		if(id >=1 && id <= 5){
			posXBtn = 0;
			posYBtn = 44.8*(id-1);
		}else if(id >=6 && id <= 10){
			posXBtn = 44.8;
			posYBtn = 44.8*(id-6);
		}else if(id >=11 && id <= 15){
			posXBtn = 89.6;
			posYBtn = 44.8*(id-11);
		}else if(id >=16 && id <= 20){
			posXBtn = 134.4;
			posYBtn = 44.8*(id-16);
		}else if(id >=21 && id <= 25){
			posXBtn = 179.2;
			posYBtn = 44.8*(id-21);
		}

		selectBtn.style.setProperty('--transformX', `${posXBtn}px`);
		selectBtn.style.setProperty('--transformY', `${posYBtn}px`);

		const boxPositionX = posXBtn/179.2;
		const boxPositionY = posYBtn/179.2;

		const uploadBoxes = document.querySelectorAll('.centeredDropbox');
		uploadBoxes.forEach((uploadBox)=>{
			
			uploadBox.style.setProperty('--timeTrans',"0.2s");
			uploadBox.style.setProperty('--transformX', -50+100*boxPositionX+"%");
			uploadBox.style.setProperty('--transformY',	-50+100*boxPositionY+"%");
		})

		

	}

	const handlePositionDrag = (e) => {
		const button = e.currentTarget;
		const gridParent = button.parentElement;

		const currentX = e.clientX;
		const currentY = e.clientY;
		const rect = gridParent.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const x = currentX - rect.left;
		const y = currentY - rect.top;

		console.log(width+ " "+ height);

		let posXBtn = x;
		let posYBtn = y;

		console.log(posXBtn);
		console.log(posYBtn);

		if(posXBtn < 22.4){
			posXBtn = 22.4;
		}
		if(posXBtn > width-22.4){
			posXBtn = width-22.4;
		}
		if(posYBtn < 22.4){
			posYBtn = 22.4;
		}
		if(posYBtn > height-22.4){
			posYBtn = height-22.4;
		}

		button.style.setProperty('--transformX', `${posXBtn-22.4}px`);
		button.style.setProperty('--transformY', `${posYBtn-22.4}px`);
		const boxPositionX = posXBtn/179.2;
		const boxPositionY = posYBtn/179.2;

		const uploadBoxes = document.querySelectorAll('.centeredDropbox');

		
		uploadBoxes.forEach((uploadBox)=>{
			uploadBox.style.setProperty('--timeTrans',"0s");
			uploadBox.style.setProperty('--transformX', -50+100*boxPositionX+"%");
			uploadBox.style.setProperty('--transformY',	-50+100*boxPositionY+"%");
			
		})
	}

	const startPositionDrag = (e) => {
		handlePositionDrag(e);
		const button = e.currentTarget;
		const sibling = button.nextElementSibling;
		const buttons = button.parentElement.querySelectorAll('.propBtn');
		buttons.forEach((button)=>{
			button.classList.add('none');
		});

		button.addEventListener('mousemove', handlePositionDrag);
	}

	const stopPositionDrag = (e) => {
		const button = e.currentTarget;
		const buttons = button.parentElement.querySelectorAll('.propBtn');
		buttons.forEach((button)=>{
			button.classList.remove('none');
		});
		button.removeEventListener('mousemove', handlePositionDrag);
	}

	const hideMockup = ()=>{
		const centeredDropbox = document.querySelectorAll('.centeredDropbox');
		centeredDropbox.forEach((elem)=>{
			elem.classList.add('none');
		})
		const panelElements = document.querySelectorAll('.left-bar .element');
		panelElements.forEach((elem)=>{
			elem.classList.add("none");
		})
		const hiddenMockup = document.querySelector('.hiddenMockup');
		hiddenMockup.classList.remove("none");
	}

	const showMockup = () =>{
		const centeredDropbox = document.querySelectorAll('.centeredDropbox');
		centeredDropbox.forEach((elem)=>{
			elem.classList.remove('none');
		})
		const panelElements = document.querySelectorAll('.left-bar .element');
		panelElements.forEach((elem)=>{
			elem.classList.remove("none");
		})
		const hiddenMockup = document.querySelector('.hiddenMockup');
		hiddenMockup.classList.add("none");
	}

	const handleShadowMove = (e,id) =>{
		const button = e.currentTarget;
		const colParent = button.parentElement;
		const gridParent = colParent.parentElement;
		const wholeParent = gridParent.parentElement;
		const selectBtn = wholeParent.querySelector('.selectBtn');

		let posXBtn = 0;
		let posYBtn = 0;

		if(id >=1 && id <= 5){
			posXBtn = 0;
			posYBtn = 44.8*(id-1);
		}else if(id >=6 && id <= 10){
			posXBtn = 44.8;
			posYBtn = 44.8*(id-6);
		}else if(id >=11 && id <= 15){
			posXBtn = 89.6;
			posYBtn = 44.8*(id-11);
		}else if(id >=16 && id <= 20){
			posXBtn = 134.4;
			posYBtn = 44.8*(id-16);
		}else if(id >=21 && id <= 25){
			posXBtn = 179.2;
			posYBtn = 44.8*(id-21);
		}
		console.log(posXBtn);

		selectBtn.style.setProperty('--transformX', `${posXBtn}px`);
		selectBtn.style.setProperty('--transformY', `${posYBtn}px`);

		const boxPositionX = posXBtn/179.2;
		const boxPositionY = posYBtn/179.2;

		const uploadBox = document.querySelectorAll(".uploadBox")
		const posX = -20+Math.round(10*posXBtn/44.8);
		const posY = -20+Math.round(10*posYBtn/44.8);
		console.log("shadow" + Math.round(10*posXBtn/44.8) + " "+ posY);
		uploadBox.forEach((box)=>{
			box.style.setProperty('--offsetX', -posX+"px");
			box.style.setProperty('--offsetY', -posY+"px");
		})

	}

	const handleShadowDrag = (e) => {
		const button = e.currentTarget;
		const gridParent = button.parentElement;

		const currentX = e.clientX;
		const currentY = e.clientY;
		const rect = gridParent.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const x = currentX - rect.left;
		const y = currentY - rect.top;


		let posXBtn = x;
		let posYBtn = y;

		if(posXBtn < 22.4){
			posXBtn = 22.4;
		}
		if(posXBtn > width-22.4){
			posXBtn = width-22.4;
		}
		if(posYBtn < 22.4){
			posYBtn = 22.4;
		}
		if(posYBtn > height-22.4){
			posYBtn = height-22.4;
		}

		button.style.setProperty('--transformX', `${posXBtn-22.4}px`);
		button.style.setProperty('--transformY', `${posYBtn-22.4}px`);
		const boxPositionX = posXBtn/179.2;
		const boxPositionY = posYBtn/179.2;

		const uploadBoxes = document.querySelectorAll('.uploadBox');

		
		const posX = -20+Math.round(10*posXBtn/44.8);
		const posY = -20+Math.round(10*posYBtn/44.8);
		console.log("shadow" + Math.round(10*posXBtn/44.8) + " "+ posY);
		uploadBoxes.forEach((box)=>{
			box.style.setProperty('--offsetX', -posX+"px");
			box.style.setProperty('--offsetY', -posY+"px");
		})
		
	}

	const startShadowDrag = (e) => {
		handleShadowDrag(e);
		const button = e.currentTarget;
		const sibling = button.nextElementSibling;
		const buttons = button.parentElement.querySelectorAll('.propBtn');
		buttons.forEach((button)=>{
			button.classList.add('none');
		});

		button.addEventListener('mousemove', handleShadowDrag);
	}

	const stopShadowDrag = (e) => {
		const button = e.currentTarget;
		const buttons = button.parentElement.querySelectorAll('.propBtn');
		buttons.forEach((button)=>{
			button.classList.remove('none');
		});
		button.removeEventListener('mousemove', handleShadowDrag);
	}

	const activateGrid = (e)=>{
		const parent = e.currentTarget.parentElement;
		const grid = parent.querySelector('.propertyGridElement');
		grid.classList.toggle('none');

	}

	const openLayoutsPanel = (e) => {
		const layoutPanel = document.querySelector('.layoutPanel');
		const arrow = document.querySelector('.left-bar .selector .arrow');
		
		arrow.classList.toggle('rotate');
		layoutPanel.classList.toggle('none');
	}

	const [layoutsName, setLayoutsName] = useState("Screenshot");

	const handleLayoutChange = (e,index) => {
		const pressedButton = e.currentTarget;
		const activeButton = document.querySelector(".layoutPanel .list .grid button.active");
		const coverImg = document.querySelector('.selector .current img');

		activeButton.classList.remove('active');
		pressedButton.classList.add('active');

		const title = document.querySelector(".selector .details p")
		title.innerHTML = layoutsNames[index];
		coverImg.src = cover[index];

		if(index === 2){
			document.documentElement.style.setProperty('--aspect-ratio', 6/13);
			document.documentElement.style.setProperty('--aspect-ratio2', 6/13);
			document.documentElement.style.setProperty('--aspect-ratio3', 6/13);

			document.querySelector(".infoElem p").innerHTML = "6:13";
		}

	}
	
	return (
		<div className="container">
			<div className="left-bar">
				<div className="navbar">
					<div className="left">
						<div className="logo">
							<img src="	https://shots.so/image/shots-logo.png" alt="" />
						</div>
						<div className="name">
							<h4>Shots</h4>
						</div>
						<div className="beta-tag">BETA</div>

					</div>
					<div className="right">
						<button type="button" class="message">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.44 2.52H4.56c-1.32 0-2.4 1.08-2.4 2.4V15c0 1.32 1.08 2.4 2.4 2.4h1.92v4.08l6-4.08h6.96c1.32 0 2.4-1.08 2.4-2.4V4.92c0-1.32-1.08-2.4-2.4-2.4M7.392 7.32h4.896c.408 0 .72.312.72.72s-.312.72-.72.72H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72m8.736 4.8H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72h8.736c.408 0 .72.312.72.72s-.312.72-.72.72"></path>
							</svg>
						</button>
						<button type="button" class="more">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="currentColor" d="M7.91 13.46c1.41 0 2.54 1.14 2.54 2.56v3.4c0 1.41-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.14-2.57 2.54-2.57h3.38Zm11.54 0c1.4 0 2.54 1.14 2.54 2.56v3.4c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.57 2.54-2.57h3.38ZM7.9 1.99c1.41 0 2.54 1.15 2.54 2.561v3.4c0 1.42-1.13 2.56-2.54 2.56H4.52c-1.4 0-2.54-1.14-2.54-2.56v-3.41c0-1.411 1.14-2.561 2.54-2.561H7.9Zm11.54 0c1.4 0 2.54 1.15 2.54 2.561v3.4c0 1.42-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.14-2.54-2.56v-3.41a2.55 2.55 0 0 1 2.54-2.561h3.38Z"></path>
							</svg>
						</button>
					</div>
					
				</div>
				<div className="panel">
					<div className="panel-tabs">
						<div className="tabs">
						<button type="button" class="mockupBtn">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.46 5C20.86 5 22 6.141 22 7.561v11.87c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56V7.55c0-1.42 1.13-2.561 2.54-2.561h3.38ZM7.91 2c1.41 0 2.54 1.15 2.54 2.561v11.87c0 1.42-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.14-2.54-2.56V4.55c0-1.411 1.14-2.561 2.54-2.561h3.38Z">
								</path>
							</svg>
							<span>Mockup</span>
						</button>
						<button type="button" class="frameBtn">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z">
								</path>
							</svg>
							<span>Frame</span>
						</button>
						</div>
						
					</div>
					<div className="selectorElem">
						<div className="btnWrapper">
							<button className="selector" onClick={openLayoutsPanel}>
								<div className="current">
									<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/thumbs/1.png" alt="Thumbnail">
									</img>
								</div>
								<div className="details">
									<p>Screenshot</p>
									<span>Adapts to image</span>
								</div>
								<div className="arrow">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<path fill="currentColor" d="M2 8.539c0-.797.688-1.448 1.543-1.448.421 0 .821.165 1.12.455l7.348 7.031 7.325-7.031a1.65 1.65 0 0 1 1.121-.455c.855 0 1.543.651 1.543 1.448 0 .403-.144.734-.433 1.003l-8.324 7.93c-.366.352-.766.528-1.243.528-.466 0-.866-.165-1.243-.527L2.444 9.542C2.155 9.262 2 8.932 2 8.539">
										</path>
									</svg>
								</div>
							</button>
						</div>
						
						<div className="layoutPanel none">
								<div className="filters">
									<div className="buttons">
										<button><span>All</span></button>
										<button><span>Phone</span></button>
										<button><span>Tablet</span></button>
										<button><span>Laptop</span></button>
										<button><span>Desktop</span></button>
										<button><span>Wearable</span></button>
									</div>
									
								</div>
								<div className="list">
									<div className="grid">
										{
											previewImages.map((layout,index)=>{
												return(
													<button className="item" onClick={(e)=>handleLayoutChange(e,index)}>
														<div className="details">
															<h6>{layoutsNames[index]}</h6>
															<p>{layoutsNum[index]} layouts</p>
														</div>
														<div className="img">
															<img src={`${cover[index]}`} alt="" />
														</div>
														<div className="preview">
															{
																Array.from({length:3}).map((_,index2)=>{
																	if(previewImages[index][index2] !== "")
																		return (
																			<div>
																				<img src={`${previewImages[index][index2]}`} alt="" />
																			</div>
																		)
																	return (
																		<div style={{visibility:"hidden"}}>
																			<img src={`${cover[index]}`} alt="" />
																		</div>
																	)
																	
																})
															}
															{
																extraPreview[index] !== 0 ?
																<div>
																	<span>+ {extraPreview[index]}</span>
																</div>
																:
																<div style={{visibility:"hidden"}}>
																	<span>+ 6</span>
																</div>
															}
														</div>
													</button>
												)
											})
										}
										
										
									</div>
								</div>
							</div>

					</div>
					<div className="scroll">
						<div className="container">
							
							<div className="element">
								<div className="title">
									Style
								</div>
								<div className="grid">
									<div className="panelBtn" id = "none" onClick={handleFrameChange}>
										<div className="preview">
												<div className="image">
													<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/default.png" alt="Default mockup style">
													</img>
												</div>
										</div>
										<p>Default</p>
									</div>
									<div className="panelBtn" id ="glass-light"onClick={handleFrameChange}>
										<div className="preview">
											{ <div className="image">
												<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/glass-light.png" alt="Default mockup style">
												</img>
											</div> }
										</div>
										<p>Glass Light</p>
									</div>
									<div className="panelBtn" id = "glass-dark" onClick={handleFrameChange}>
										<div className="preview">
											{ <div className="image">
												<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/glass-dark.png" alt="Default mockup style">
												</img>
											</div> }
										</div>
										<p>Glass Dark</p>
									</div>
									<div className="panelBtn" id = "screenshot-outline" onClick={handleFrameChange}>
										<div className="preview">
												<div className="image">
													<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/outline.png" alt="Default mockup style">
													</img>
												</div>
										</div>
										<p>Outline</p>
									</div>
									<div className="panelBtn" id = "screenshot-border" onClick={handleFrameChange}>
										<div className="preview">
											{ <div className="image">
												<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/border.png" alt="Default mockup style">
												</img>
											</div> }
										</div>
										<p>Border</p>
									</div>
									<div className="panelBtn" id = "screenshot-retro" onClick={handleFrameChange}>
										<div className="preview">
											{ <div className="image">
												<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/retro.png" alt="Default mockup style">
												</img>
											</div> }
										</div>
										<p>Retro</p>
									</div>
									<div className="panelBtn" id = "screenshot-card" onClick={handleFrameChange}>
										<div className="preview">
												<div className="image">
													<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/card.png" alt="Default mockup style">
													</img>
												</div>
										</div>
										<p>Card</p>
									</div>
									<div className="panelBtn"  id = "screenshot-stack" onClick={handleFrameChange}>
										<div className="preview">
												<div className="image">
													<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/stack.png" alt="Default mockup style">
													</img>
												</div>
										</div>
										<p>Stack</p>
									</div>
									<div className="panelBtn" id = "screenshot-stack2" onClick={handleFrameChange}>
										<div className="preview">
											{ <div className="image">
												<img crossorigin="anonymous" loading="eager" src="https://shots.so/mockups/Screenshot/styles/stack-2.png" alt="Default mockup style">
												</img>
											</div> }
										</div>
										<p>Stack 2</p>
									</div>
									
									
								</div>
							</div>
							<div className="element">
								<div className="title">
									Border
								</div>
								<div className="col1-grid">
									<div className="slider" style={{transition:"none"}} onMouseDown={startSlider} onMouseUp={stopSlider} onMouseLeave={stopSlider}>
										<div className="fullSlider"></div>
										<div className="line"></div>
										<div className="labels">
											<div className="name">Radius</div>
											<div className="value">20</div>
										</div>
									</div>
									<div className="buttons">
										<div className="button" onClick={()=>modifyBorderButton(0)}>
											<div className="visual">
											</div>
											<p>Sharp</p>
										</div>
										<div className="button" onClick={()=>modifyBorderButton(0.5)}>
											<div className="visual">
											</div>
											<p>Curved</p>
										</div>
											
										<div className="button" onClick={()=>modifyBorderButton(1)}>
											<div className="visual">
											</div>
											<p>Round</p>
										</div>
										<div className="active-btn"></div>
									</div>
									
								</div>
							</div>

							<div className="element">
								<div className="title">
									Shadow
								</div>
								<div className="col1-grid">
									<div className="slider" style={{transition:"none"}} onMouseDown={startSliderOpacity} onMouseUp={stopSliderOpacity} onMouseLeave={stopSliderOpacity}>
										<div className="fullSlider"></div>
										<div className="line"></div>
										<div className="labels">
											<div className="name">Opacity</div>
											<div className="value">40</div>
										</div>
										
									</div>
									<div className="buttons">
										<div className="button" onClick={(e)=>modifyOpacity(e,1)}>
											<img src="https://shots.so/image/shadow-modes/shadow-none.png" alt="" />
											<p>None</p>
										</div>
										<div className="button" onClick={(e)=>modifyOpacity(e,2)}>
											<img src="https://shots.so/image/shadow-modes/shadow-hug.png" alt="" />
											<p>Hug</p>
										</div>
											
										<div className="button" onClick={(e)=>modifyOpacity(e,3)}>
											<img src="https://shots.so/image/shadow-modes/shadow-spread.png" alt="" />
											<p>Spread</p>
										</div>
										<div className="active-btn right"></div>
									</div>
									<div className="propertyGridElement none">
										<div className="selectBtn" onMouseDown={startShadowDrag} onMouseLeave={stopShadowDrag} onMouseUp={stopShadowDrag}>

										</div>
										<div className="propertyGrid">
											<div className="col">
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,1)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,2)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,3)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,4)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,5)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,6)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,7)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,8)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,9)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,10)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,11)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,12)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,13)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,14)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,15)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,16)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,17)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,18)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,19)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,20)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,21)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,22)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,23)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,24)}></div>
												<div className="propBtn" onClick={(e)=>handleShadowMove(e,25)}></div>
											</div>
											
										</div>

									</div>
									<button className="shadowPos" onClick={activateGrid}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.29 12c0 1.188 1.017 2.16 2.262 2.16s2.244-.972 2.244-2.16-1-2.158-2.244-2.158-2.263.97-2.263 2.158zM12 14.16c-1.245 0-2.263-.972-2.263-2.16S10.755 9.842 12 9.842s2.244.97 2.244 2.158-1 2.16-2.244 2.16m8.448 0c-1.263 0-2.263-.972-2.263-2.16s1-2.158 2.263-2.158c1.245 0 2.244.97 2.244 2.158s-1 2.16-2.244 2.16" clip-rule="evenodd"></path></svg>
									</button>
									
									
								</div>
							</div>
							<div className="element">
								<div className="title">
									Size & Position
								</div>
								<div className="col1-grid">
									<div className="slider" style={{transition:"none"}} onMouseDown={startSliderScale} onMouseUp={stopSliderScale} onMouseLeave={stopSliderScale}>
										<div className="fullSlider"></div>
										<div className="line"></div>
										<div className="labels">
											<div className="name">Scale</div>
											<div className="value">50</div>
										</div>
										
									</div>
									<div className="propertyGridElement">
										<div className="selectBtn" onMouseDown={startPositionDrag} onMouseUp={stopPositionDrag} onMouseLeave={stopPositionDrag}>

										</div>
										<div className="propertyGrid">
											<div className="col">
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,1)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,2)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,3)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,4)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,5)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,6)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,7)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,8)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,9)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,10)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,11)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,12)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,13)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,14)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,15)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,16)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,17)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,18)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,19)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,20)}></div>
											</div>
											<div className="col">
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,21)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,22)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,23)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,24)}></div>
												<div className="propBtn" onClick={(e)=>handlePositionMove(e,25)}></div>
											</div>
											
										</div>

									</div>
									
									
								</div>
							</div>
							<div className="element">
								<div className="title">
									Details
								</div>
								<div className="col1-grid">
									<div className="infoElem">
										<div className="elem">
											<div className="row">
												<span>Screen pixels</span>
												<p>Adapts to image</p>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							<div className="element">
								<div className="title">
									Visibility
								</div>
								<div className="col1-grid">
									<button className="hideMockup" onClick={hideMockup}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"></path></svg>								
										<span>Hide Mockup</span>
									</button>
								</div>
								
							</div>
							
							<div className="hiddenMockup none">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"></path></svg>
								<span className='title'>Mockup is hidden</span>
								<span className="small">Show mockup to start editing</span>
								<button class = "showMockup" onClick={showMockup}>
									<span>Show mockup</span>
								</button>
							</div>
						</div>

					</div>
					{/* <button className="handleDownload" onClick={handleDownload}>
						Download as PNG
					</button> */}

				</div>
				
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
									<div className="centeredDropbox style-0" >
										
									
										<div className="uploadBox" onClick={handleClickInputFile} >
											
											<div className='stack2 none'>
												{
													preview &&
													<div className="imgContainer">
														<img src={preview} alt="preview" style={{filter:"blur(2em)"}}/>
													</div>
												}
											</div>
											<div className='stack1 none'>
												{preview &&
														<div className="imgContainer">
															<img src={preview} alt="preview" style={{filter:"blur(2em)"}}/>
														</div>}
											</div>
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
											<div className='stack2 none'>
													{
														previewTwo &&
														<div className="imgContainer">
															<img src={previewTwo} alt="preview" style={{filter:"blur(2em)"}}/>
														</div>
													}
											</div>
											<div className='stack1 none'>
												{previewTwo &&
														<div className="imgContainer">
															<img src={previewTwo} alt="preview" style={{filter:"blur(2em)"}}/>
														</div>}
											</div>
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
			
			<div className="right-bar">
				<div className="scroller">
					<ScreenshotPosition preview = {preview} preview2 = {previewTwo} applyStyle={applyStyle} applyStyleTwo = {applyStyleTwo}/>
				</div>
				
			</div>
		</div>
		
	);
}

export default App;