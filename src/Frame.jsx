import React, { useState } from "react";
import "./Frame.css";

const Frame = (props) => {
  const openLayoutsPanel = props.openLayoutsPanel;

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [activated, setActivated] = useState(false);
  const [overlayShadow, setOverlayShadow] = useState(false);

  const addOverlay = props.addOverlay;

  const overlayShadowSlider = (e, start, distance, modifyFunction) => {
    const button = e.currentTarget;
    const fullSlider = button.querySelector(".fullSlider");
    const line = button.querySelector(".line");
    const value = button.querySelector(".value");

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;

    fullSlider.style.setProperty("--size", 100 - percent * 100 + "%");
    line.style.setProperty("--leftVal", percent * 100 + "%");
    value.textContent = Math.round(start + percent * distance);

    modifyFunction(percent);
  };

  const startOverlayShadowSlider = (e, start, distance,updateFunction) => {
    const handler = overlayShadowSliderHandler(start, distance,updateFunction);
    const button = e.currentTarget;
    button.addEventListener("mousemove", handler);
    button._overlayShadowSliderHandler = handler;
  };

  const stopOverlayShadowSlider = (e) => {
    const button = e.currentTarget;
    const handler = button._overlayShadowSliderHandler;
    if (handler) {
      button.removeEventListener("mousemove", handler);
      delete button._overlayShadowSliderHandler;
    }
  };

  const overlayShadowSliderHandler = (start, distance,updateFunction) => (e) => {
    overlayShadowSlider(e, start, distance,updateFunction);
  };

  const setAspectRatio = (e) => {
    const button = e.currentTarget;
    const frameItems = button.parentElement.parentElement.querySelectorAll(".frameItem");
    frameItems.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const buttonAspectRatio = button.querySelector(".framePreview").style.aspectRatio;

    document.documentElement.style.setProperty("--cardAspectRatio", buttonAspectRatio);

    const width = buttonAspectRatio.split("/")[0];
    const height = buttonAspectRatio.split("/")[1];
    console.log(document.querySelector(".frameWindow .details p"));
    document.querySelector(".frameWindow .details p").textContent = `Default ${width}:${height}`
    if(button.querySelector(".frameDetails p"))
      document.querySelector(".frameWindow .details p").textContent = `${button.querySelector(".frameDetails span:nth-child(3)").textContent} ${button.querySelector(".frameDetails p").textContent}`
    document.querySelector(".frameWindow .details span").textContent = button.querySelector(".frameDetails span").textContent;
  };

  const changeField = (e) => {
    const { name, value } = e.target;
    if (name === "width") {
      setWidth(value);
    }
    if (name === "height") {
      setHeight(value);
    }

    if(width!=0 && height!=0){
      setActivated(true);
    }else{
      setActivated(false);
    }

  };

  const hadleRatioChange = (e) => {
    e.preventDefault();
    const width = e.target.width.value;
    const height = e.target.height.value;
    document.documentElement.style.setProperty("--cardAspectRatio", `${width}/${height}`);

    setWidth(0);
    setHeight(0);

    setActivated(false);

  };
      
  const toggleOpacity = (e,hide) => {
    console.log("toggleOpacity");
    const button = e.currentTarget;
    const parent = button.parentElement;
    const active = parent.querySelector(".active");
    active.classList.remove("active");
    button.classList.add("active");
    console.log(button);
    if(hide)
      setOverlayShadow(false);
    else
      setOverlayShadow(true);
    console.log(overlayShadow);

  }

  const updateOpacity = (value) => {
    const overlayElement = document.querySelector(".overlay");
    const opacityValue = 0.25 + value * 0.70;
    console.log(opacityValue);
    overlayElement.style.setProperty("--opacity", opacityValue);
  }


  const { handleLeftBar } = props;
  return (
    <div className="panel frameWindow none">
      <div className="panel-tabs">
        <div className="tabs">
          <button type="button" class="mockupBtn" onClick={handleLeftBar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.46 5C20.86 5 22 6.141 22 7.561v11.87c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56V7.55c0-1.42 1.13-2.561 2.54-2.561h3.38ZM7.91 2c1.41 0 2.54 1.15 2.54 2.561v11.87c0 1.42-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.14-2.54-2.56V4.55c0-1.411 1.14-2.561 2.54-2.561h3.38Z"
              ></path>
            </svg>
            <span>Mockup</span>
          </button>
          <button type="button" class="frameBtn active" onClick={handleLeftBar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"
              ></path>
            </svg>
            <span>Frame</span>
          </button>
        </div>
      </div>
      <div className="selectorElem">
        <div className="btnWrapper">
          <button className="selector" onClick={()=>openLayoutsPanel(1)}>
            <div className="current">
              <div className="currentFrameIcon"></div>
            </div>
            <div className="details">
              <p>Default 4:3</p>
              <span>1920 X 1440</span>
            </div>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2 8.539c0-.797.688-1.448 1.543-1.448.421 0 .821.165 1.12.455l7.348 7.031 7.325-7.031a1.65 1.65 0 0 1 1.121-.455c.855 0 1.543.651 1.543 1.448 0 .403-.144.734-.433 1.003l-8.324 7.93c-.366.352-.766.528-1.243.528-.466 0-.866-.165-1.243-.527L2.444 9.542C2.155 9.262 2 8.932 2 8.539"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="layoutPanel none">
          <div className="custom">
            <form autoComplete="off" onSubmit={hadleRatioChange}>
              <div className="panelDim">
                <h6>W</h6>
                <input onChange={changeField} value={width==0?"":width} name="width" type="number" class="input-text" placeholder="1920" min="128" max="7680"></input>
              </div>
              <div className="panelDim">
                <h6>H</h6>
                <input  onChange={changeField} value={height==0?"":height} name="height" type="number" class="input-text" placeholder="1440" min="128" max="7680"></input>
              </div>
              <button disabled="" type="submit" className={`${activated? 'clickable':''}`}><span>Set</span></button>
            </form>
          </div>
          <div className="list">
            
          <div className="frames-wrapper">
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"16/9"}}>
                    <span>16:9</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1920 x 1080</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"3/2"}}>
                    <span>3:2</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1920 x 1280</span>
                </div>
            </button>
            <button className="frameItem active" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"4/3"}}>
                    <span>4:3</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1920 x 1440</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"5/4"}}>
                    <span>5:4</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1920 x 1536</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"1/1"}}>
                    <span>1:1</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1920 x 1920</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"4/5"}}>
                    <span>4:5</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1080 x 1350</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"3/4"}}>
                    <span>3:4</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1080 x 1440</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"2/3"}}>
                    <span>2:3</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1080 x 1620</span> 
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"9/16"}}>
                    <span>9:16</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <span>1080 x 1920</span>
                </div>
            </button>
            
          </div>
          
          <div className="headSection">
              <img src="https://shots.so/icon/socials/instagram.png" alt="" />
              <h5>Instagram</h5>
            </div>
          <div className="frames-wrapper">
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"1/1"}}>
                    <span>1:1</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Post</p>
                  <span>1080 x 1080</span>
                  <span style={{display:"none"}}>Instagram</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"4/5"}}>
                    <span>4:5</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Portrait</p>
                  <span>1080 x 1350</span>
                  <span style={{display:"none"}}>Instagram</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"9/16"}}>
                    <span>9:16</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Story</p>
                  <span>1080 x 1920</span>
                  <span style={{display:"none"}}>Instagram</span>
                </div>
            </button>
            
          </div>
          <div className="headSection">
              <img src="https://shots.so/icon/socials/twitter.png" alt="" />
              <h5>Twitter</h5>
            </div>
          <div className="frames-wrapper">
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"16/9"}}>
                    <span>16:9</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Tweet</p>
                  <span>1200 x 675</span>
                  <span style={{display:"none"}}>Twitter</span>
                </div>
            </button>
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"3/1"}}>
                    <span>3:1</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Cover</p>
                  <span>1500 x 500</span>
                  <span style={{display:"none"}}>Twitter</span>
                </div>
            </button>

            
          </div>

          <div className="headSection">
              <img src="https://shots.so/icon/socials/dribbble.png" alt="" />
              <h5>Dribbble</h5>
            </div>
          <div className="frames-wrapper">
            <button className="frameItem" onClick={setAspectRatio}>
                <div className="frameIcon" >
                  <div className="framePreview" style={{aspectRatio:"4/3"}}>
                    <span>4:3</span>
                  </div>
                </div>
                <div className="frameDetails">
                  <p>Shot</p>
                  <span>2800 x 2100</span>
                  <span style={{display:"none"}}>Dribble</span>
                </div>
            </button>

            
          </div>


          </div>
          
        </div>
      </div>
      <div className="scroll">
        <div className="container">
          <div className="element">
            <div className="title">Overlay Shadow</div>
            <div className="col1-grid">
              <div
                className={`slider ${overlayShadow?"":"inactive"}`}
                style={{ transition: "none" }}
                onMouseDown={(e) => startOverlayShadowSlider(e, 10, 70,updateOpacity)}
                onMouseUp={stopOverlayShadowSlider}
                onMouseLeave={stopOverlayShadowSlider}
              >
                <div className="fullSlider"></div>
                <div className="line"></div>
                <div className="labels">
                  <div className="name">Opacity</div>
                  <div className="value">40</div>
                </div>
              </div>

              <div className="grid">
                <div className="panelBtn" style={{ aspectRatio: "16/9" }} onClick={(e)=>{addOverlay(e,0);toggleOpacity(e,true);}}>
                  <div className="preview active" >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M3.575 7.088A9.7 9.7 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 1.79 0 3.468-.483 4.911-1.326l-1.104-1.104A8.25 8.25 0 0 1 3.75 12a8.2 8.2 0 0 1 .929-3.808zm15.686 8.831A8.25 8.25 0 0 0 12 3.75a8.2 8.2 0 0 0-3.92.988L6.981 3.639A9.7 9.7 0 0 1 12 2.25c5.384 0 9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-1.39 5.018z"
                        ></path>
                        <rect
                          width="1.89"
                          height="26.833"
                          x="1.788"
                          y="3.211"
                          fill="currentColor"
                          rx="0.945"
                          ry="0.945"
                          transform="rotate(-45 1.789 3.211)"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="panelBtn" style={{ aspectRatio: "16/9" }} onClick={(e)=>{addOverlay(e,1,"https://assets.shots.so/shadow-overlays/011.png");toggleOpacity(e,false)}}>
                  <div className="preview">
                    <div className="image">
                      <img src="https://shots.so/shadows/011.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="panelBtn" style={{ aspectRatio: "16/9" }} onClick={(e)=>{addOverlay(e,1,"https://assets.shots.so/shadow-overlays/020.png");toggleOpacity(e,false)}}>
                  <div className="preview">
                    <div className="image">
                      <img src="https://shots.so/shadows/020.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="panelBtn" style={{ aspectRatio: "16/9" }} onClick={(e)=>{addOverlay(e,1,"https://assets.shots.so/shadow-overlays/028.png");toggleOpacity(e,false)}}>
                  <div className="preview">
                    <div className="image">
                      <img src="https://shots.so/shadows/028.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="panelBtn" style={{ aspectRatio: "16/9" }} onClick={(e)=>{addOverlay(e,1,"https://assets.shots.so/shadow-overlays/029.png");toggleOpacity(e,false)}}>
                  <div className="preview">
                    <div className="image">
                      <img src="https://shots.so/shadows/029.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                  <div className="preview">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M1.29 12c0 1.188 1.017 2.16 2.262 2.16s2.244-.972 2.244-2.16-1-2.158-2.244-2.158-2.263.97-2.263 2.158zM12 14.16c-1.245 0-2.263-.972-2.263-2.16S10.755 9.842 12 9.842s2.244.97 2.244 2.158-1 2.16-2.244 2.16m8.448 0c-1.263 0-2.263-.972-2.263-2.16s1-2.158 2.263-2.158c1.245 0 2.244.97 2.244 2.158s-1 2.16-2.244 2.16"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="title">Effects</div>
            <div
              className="slider"
              style={{ transition: "none" }}
              onMouseDown={(e) => startOverlayShadowSlider(e, 0, 100)}
              onMouseUp={stopOverlayShadowSlider}
              onMouseLeave={stopOverlayShadowSlider}
            >
              <div className="fullSlider" style={{ "--size": "100" }}></div>
              <div className="line" style={{ "--leftVal": "0" }}></div>
              <div className="labels">
                <div className="name">Noise</div>
                <div className="value">0</div>
              </div>
            </div>
            <div
              className="slider"
              style={{ transition: "none" }}
              onMouseDown={(e) => startOverlayShadowSlider(e, 0, 100)}
              onMouseUp={stopOverlayShadowSlider}
              onMouseLeave={stopOverlayShadowSlider}
            >
              <div className="fullSlider" style={{ "--size": "100" }}></div>
              <div className="line" style={{ "--leftVal": "0" }}></div>
              <div className="labels">
                <div className="name">Blur</div>
                <div className="value">0</div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="title">Background</div>
            <div className="col1-grid">
              <div className="grid">
                <div className="panelBtn textInside active">
                  <div className="preview">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <rect
                          width="24"
                          height="24"
                          fill="url(#transparent_svg__a)"
                          fillOpacity="0.4"
                          rx="6"
                        ></rect>
                        <rect
                          width="23"
                          height="23"
                          x="0.5"
                          y="0.5"
                          stroke="#fff"
                          strokeOpacity="0.16"
                          rx="5.5"
                        ></rect>
                        <defs>
                          <pattern
                            id="transparent_svg__a"
                            width="1"
                            height="1"
                            patternContentUnits="objectBoundingBox"
                          >
                            <use
                              xlinkHref="#transparent_svg__b"
                              transform="scale(.01563)"
                            ></use>
                          </pattern>
                          <image
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA40lEQVR4Xu3bQQ6EQAhEUbj/oXsO8Sdh4XOvJAi/qkF3Zt6E6710++xuiD6T40uACtACqYlzD2IACFKBkoHcgmSQDJJBMngKIT6ADygF6DSYfcCLTzg/z0eGrASogDbT0gKxB2MB5pkiBoBgrEEMwIBjLx9fAAiCIAhygmkkRgYjhWMHditsL2AvYC+QIHjdwzk+BmAABmBAWc1kCF0bKRAEQRAEQRAMGaACbaCUz/P5BRiKxhQaiV07uRjfYgQDMKDpGAhGCMUCzD4CBEEw1iAGYIBPZMJh+g8/P8cKpAJfV4EfMee/sLtaEFIAAAAASUVORK5CYII="
                            id="transparent_svg__b"
                            width="64"
                            height="64"
                          ></image>
                        </defs>
                      </svg>
                    </div>
                    Transparent
                  </div>
                </div>
                <div className="panelBtn textInside ">
                  <div className="preview">
                    <div
                      className="icon"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(255,255,255)",
                          width: "24px",
                          height: "24px",
                          borderRadius: "20px",
                        }}
                      ></div>
                    </div>
                    #ffffff
                  </div>
                </div>
                <div className="panelBtn textInside ">
                  <div className="preview">
                    <div
                      className="icon"
                      style={{ width: "24px", height: "24px", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"
                        ></path>
                      </svg>
                    </div>
                    Image
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="title">Solid color</div>
            <div className="colorsGrid">
              <button
                className="color"
                style={{ backgroundColor: "white" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(222, 226, 230)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(173, 181, 189)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(73, 80, 87)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(33, 37, 41)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(21, 22, 23)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(255, 89, 94)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(255, 146, 76)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(255, 202, 58)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(197, 202, 48)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(138, 201, 38)" }}
              ></button>
              <button
                className="color"
                style={{ backgroundColor: "rgb(63, 201, 93)" }}
              ></button>
            </div>
          </div>
          <div className="element">
            <div className="title">Gradient</div>
            <div className="grid">
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview active"
                  style={{
                    background:
                      "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
                  }}
                ></div>
              </div>
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview"
                  style={{
                    background:
                      "linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))",
                  }}
                ></div>
              </div>
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(238, 221, 243), rgb(238, 146, 177), rgb(99, 48, 180))",
                  }}
                ></div>
              </div>
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview"
                  style={{
                    background:
                      "linear-gradient(113.96deg, rgb(69, 190, 232) 13.54%, rgb(214, 161, 172) 50%, rgb(232, 140, 93) 85.42%)",
                  }}
                ></div>
              </div>
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview"
                  style={{
                    background:
                      "linear-gradient(113.96deg, rgb(69, 233, 159) 11.98%, rgb(213, 168, 155) 50%, rgb(232, 70, 152) 85.42%)",
                  }}
                ></div>
              </div>
              <div className="panelBtn" style={{ aspectRatio: "16/9" }}>
                <div
                  className="preview"
                  style={{
                    background:
                      "linear-gradient(113.96deg, rgb(69, 223, 232) 11.98%, rgb(211, 170, 175) 50%, rgb(232, 103, 100) 85.42%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
