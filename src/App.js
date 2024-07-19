import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";
import ScreenshotPosition from "./ScreenshotPositions";
import MinimalPhonePosition from "./MinimalPhonePosition";
import IphonePosition from "./IphonePosition";
import Frame from "./Frame";

function App() {
  const [preview, setPreview] = useState(null);
  const [previewTwo, setPreviewTwo] = useState(null);
  const [previewThree, setPreviewThree] = useState(null);
  const [seeMockup, setSeeMockup] = useState(true);
  const [currentDevice, setCurrentDevice] = useState("");

  const [layoutsName, setLayoutsName] = useState("layout-0");
  const ref = useRef();

  const layoutsNames = [
    "Screenshot",
    "Browser",
    "Minimal Phone",
    "Minimal Desktop",
    "Iphone15",
    "Iphone 15 Plus",
    "Iphone 15 Pro",
    "Iphone 15 Pro Max",
    "Nothing Phone",
    "Pixel 7 Pro",
    "Iphone 14",
    "Iphone 14 Plus",
    "Iphone 14 Pro",
    "Iphone 14 Pro Max",
    "Iphone 13",
    "Iphone 13 Pro",
    "Iphone SE",
    "iPad Pro 11",
    "iPad Pro 13",
    "iPad Air",
    "iPadMini",
    "Macbook Pro 16",
    "Macbook Air M2",
    "Mackbook Air 13",
    "Macbook Pro 13",
    "Macbook Pro 15",
    "Surface Book",
    "iMac24",
    "Pro Display XDR",
    "Studio Display",
    "iMac Pro",
    "iMax Retina",
    "Apple Watch Ultra",
    "Apple Watch Series 8",
  ];
  const layoutsNum = [
    16, 9, 14, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16,
    16, 16, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10,
  ];
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
  ];
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
    ["", "", ""],
    ["", "", ""],
    [
      "https://shots.so/mockups/iPhone%2015/styles/black.png",
      "https://shots.so/mockups/iPhone%2015/styles/blue.png",
      "https://shots.so/mockups/iPhone%2015/styles/green.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2015%20Plus/styles/black.png",
      "https://shots.so/mockups/iPhone%2015%20Plus/styles/blue.png",
      "https://shots.so/mockups/iPhone%2015%20Plus/styles/green.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2015%20Pro/styles/dark-blue.png",
      "https://shots.so/mockups/iPhone%2015%20Pro/styles/black-titanium.png",
      "https://shots.so/mockups/iPhone%2015%20Pro/styles/natural-titanium.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/dark-blue.png",
      "https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/black-titanium.png",
      "https://shots.so/mockups/iPhone%2015%20Pro%20Max/styles/natural-titanium.png",
    ],
    [
      "https://shots.so/mockups/Nothing%20Phone/styles/white.png",
      "https://shots.so/mockups/Nothing%20Phone/styles/black.png",
      "",
    ],
    [
      "https://shots.so/mockups/Pixel%207%20Pro/styles/hazel.png",
      "https://shots.so/mockups/Pixel%207%20Pro/styles/obsidian.png",
      "https://shots.so/mockups/Pixel%207%20Pro/styles/snow.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2014/styles/midnight.png",
      "https://shots.so/mockups/iPhone%2014/styles/blue.png",
      "https://shots.so/mockups/iPhone%2014/styles/purple.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2014%20Plus/styles/midnight.png",
      "https://shots.so/mockups/iPhone%2014%20Plus/styles/blue.png",
      "https://shots.so/mockups/iPhone%2014%20Plus/styles/purple.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2014%20Pro/styles/space-black.png",
      "https://shots.so/mockups/iPhone%2014%20Pro/styles/silver.png",
      "https://shots.so/mockups/iPhone%2014%20Pro/styles/deep-purple.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/space-black.png",
      "https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/silver.png",
      "https://shots.so/mockups/iPhone%2014%20Pro%20Max/styles/deep-purple.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2013/styles/midnight.png",
      "https://shots.so/mockups/iPhone%2013/styles/starlight.png",
      "https://shots.so/mockups/iPhone%2013/styles/blue.png",
    ],
    [
      "https://shots.so/mockups/iPhone%2013%20Pro/styles/graphit.png",
      "https://shots.so/mockups/iPhone%2013%20Pro/styles/silver.png",
      "https://shots.so/mockups/iPhone%2013%20Pro/styles/sierra-blue.png",
    ],
    [
      "https://shots.so/mockups/iPhone%20SE/styles/black.png",
      "https://shots.so/mockups/iPhone%20SE/styles/white.png",
      "https://shots.so/mockups/iPhone%20SE/styles/red.png",
    ],
    [
      "https://shots.so/mockups/iPad%20Pro%2011/styles/space-grey.png",
      "https://shots.so/mockups/iPad%20Pro%2011/styles/silver.png",
      "",
    ],
    [
      "https://shots.so/mockups/iPad%20Pro%2013/styles/space-grey.png",
      "https://shots.so/mockups/iPad%20Pro%2013/styles/silver.png",
    ],
    [
      "https://shots.so/mockups/iPad%20Air/styles/space-grey.png",
      "https://shots.so/mockups/iPad%20Air/styles/starlight.png",
      "https://shots.so/mockups/iPad%20Air/styles/blue.png",
    ],
    [
      "https://shots.so/mockups/iPad%20Mini/styles/space-grey.png",
      "https://shots.so/mockups/iPad%20Mini/styles/starlight.png",
      "https://shots.so/mockups/iPad%20Mini/styles/pink.png",
    ],
    ["", "", ""],
    [
      "https://shots.so/mockups/Macbook%20Air%20M2/styles/midnight.png",
      "https://shots.so/mockups/Macbook%20Air%20M2/styles/silver.png",
      "https://shots.so/mockups/Macbook%20Air%20M2/styles/space-gray.png",
    ],
    [
      "https://shots.so/mockups/Macbook%20Air%2013/styles/space-grey.png",
      "https://shots.so/mockups/Macbook%20Air%2013/styles/silver.png",
      "https://shots.so/mockups/Macbook%20Air%2013/styles/gold.png",
    ],
    [
      "https://shots.so/mockups/Macbook%20Pro%2013/styles/space-grey.png",
      "https://shots.so/mockups/Macbook%20Pro%2013/styles/silver.png",
      "",
    ],
    [
      "https://shots.so/mockups/Macbook%20Pro%2015/styles/space-grey.png",
      "https://shots.so/mockups/Macbook%20Pro%2015/styles/silver.png",
      "",
    ],
    ["", "", ""],
    [
      "https://shots.so/mockups/iMac%2024/styles/silver.png",
      "https://shots.so/mockups/iMac%2024/styles/blue.png",
      "https://shots.so/mockups/iMac%2024/styles/purple.png",
    ],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    [
      "https://shots.so/mockups/Apple%20Watch%20Ultra/styles/apple-watch-ultra.png",
      "https://shots.so/mockups/Apple%20Watch%20Ultra/styles/midnight-ocean-band.png",
      "https://shots.so/mockups/Apple%20Watch%20Ultra/styles/orange-alpine-loop.png",
    ],
    [
      "https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-midnight.png",
      "https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-silver.png",
      "https://shots.so/mockups/Apple%20Watch%20Series%208/styles/aluminum-starlight.png",
    ],
  ];
  const extraPreview = [
    6, 3, 0, 0, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 2, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0,
    0, 0, 4, 0, 0, 0, 0, 1, 0,
  ];

  useEffect(() => {
    const activeBtnRight = document.querySelector(".active-btn.right");
    activeBtnRight.style.setProperty("--position", "82%");

    const firstLayout = document.querySelector(
      ".layoutPanel .list .grid button"
    );
    const firstFilter = document.querySelector(
      ".layoutPanel .filters .buttons button"
    );
    firstFilter.classList.add("active");
    firstLayout.classList.add("active");
  }, []);
  const handleFrameChange = (e) => {
    const panelBtns = document.querySelectorAll(".panelBtn .preview");
    panelBtns.forEach((panelBtns) => {
      panelBtns.classList.remove("active");
    });
    console.log(e.target);
    e.target.querySelector(".preview").classList.add("active");

    const uploadBoxes = document.querySelectorAll(".uploadBox");
    uploadBoxes.forEach((uploadBox) => {
      if (uploadBox.querySelector(".screenshot-glass")) {
        uploadBox.querySelector(".screenshot-glass").remove();
      }
      if (uploadBox.querySelector(".stack1")) {
        uploadBox.querySelector(".stack1").classList.add("none");
      }
      if (uploadBox.querySelector(".stack2")) {
        uploadBox.querySelector(".stack2").classList.add("none");
      }
      const elem = document.createElement("div");
      elem.classList.add("screenshot-glass");
      elem.classList.add(e.target.id);
      if (
        e.target.id === "screenshot-stack" ||
        e.target.id === "screenshot-stack2"
      ) {
        const div1 = document.querySelectorAll(".stack1");
        div1.forEach((div11) => {
          div11.classList.remove("none");
        });
        const div2 = document.querySelectorAll(".stack2");
        div2.forEach((div22) => {
          div22.classList.remove("none");
        });
        uploadBox.prepend(elem);
        return;
      }
      if (
        e.target.id === "screenshot-retro" ||
        e.target.id === "screenshot-card"
      ) {
        const div1 = document.querySelectorAll(".stack1");
        div1.forEach((div11) => {
          div11.classList.remove("none");
        });
        uploadBox.prepend(elem);
        return;
      }

      uploadBox.prepend(elem);
    });
  };

  const handleDownload = () => {
    console.log(ref.current);
    if (ref.current) {
      console.log(ref.current);
      html2canvas(ref.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };
  const handleFileChange = (e, num) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (num == 1) setPreview(reader.result);
        else if (num == 2) setPreviewTwo(reader.result);
        else if (num == 3) setPreviewThree(reader.result);
        console.log(num + " " + previewTwo);
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const aspectRatio = width / height;
          if (layoutsName == "layout-0")
            if (num == 1)
              document.documentElement.style.setProperty(
                "--aspect-ratio",
                aspectRatio
              );
            else if (num == 2)
              document.documentElement.style.setProperty(
                "--aspect-ratio2",
                aspectRatio
              );
            else if (num == 3)
              document.documentElement.style.setProperty(
                "--aspect-ratio3",
                aspectRatio
              );
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      if (num == 1) setPreview(null);
      else if (num == 2) setPreviewTwo(null);
      else if (num == 3) setPreviewThree(null);
      alert("Please select a valid file type");
    }
  };

  const handleClickInputFile = (num) => {
    let inputFile;
    console.log(num);
    if (num == 1) inputFile = document.getElementById("fileInput");
    else if (num == 2) inputFile = document.getElementById("fileInputTwo");
    else if (num == 3) inputFile = document.getElementById("fileInputThree");
    inputFile.click();
  };

  const applyStyle = (styleNumber, classToAdd, styleNo, containerNumb) => {
    const hideDropbox = document.querySelectorAll(".canvas .zone");
    if (styleNo == 0) {
      hideDropbox[1].classList.add("none");
      hideDropbox[2].classList.add("none");
    } else if (styleNo == 1) {
      hideDropbox[1].classList.remove("none");
      hideDropbox[2].classList.add("none");
    } else if (styleNo == 2) {
      hideDropbox[1].classList.remove("none");
      hideDropbox[2].classList.remove("none");
    }

    const centeredDropbox = document.querySelector(".canvas .centeredDropbox");
    if (styleNo == 0) {
      centeredDropbox.classList.remove("two-canvases");
      centeredDropbox.classList.remove("three-canvases");
    } else if (styleNo == 1) {
      centeredDropbox.classList.add("two-canvases");
      centeredDropbox.classList.remove("three-canvases");
    } else if (styleNo == 2) {
      centeredDropbox.classList.remove("two-canvases");
      centeredDropbox.classList.add("three-canvases");
    }

    const dropboxParent = document.querySelector(".canvas .centeredDropbox");
    for (let attri of dropboxParent.classList) {
      if (
        attri.includes("style-") ||
        attri.includes("styletwo-") ||
        attri.includes("stylethree-")
      ) {
        dropboxParent.classList.remove(attri);
      }
    }
    console.log("applying");
    console.log(dropboxParent.classList);
    if (styleNo == 0) dropboxParent.classList.add(`style-${styleNumber}`);
    else if (styleNo == 1)
      dropboxParent.classList.add(`styletwo-${styleNumber}`);
    else if (styleNo == 2)
      dropboxParent.classList.add(`stylethree-${styleNumber}`);

    dropboxParent.classList.add(classToAdd);

    const button = document.querySelector(
      `.card-wrapper .card:nth-child(${containerNumb + 1})`
    );
    const activeButtons = document.querySelectorAll(
      ".card-wrapper .card.active"
    );
    activeButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  };

  const handleSliderChange = (e) => {
    const slider = e.currentTarget;
    const fullSlider = slider.querySelector(".fullSlider");
    const line = slider.querySelector(".line");
    const labels = slider.querySelector(".labels");
    const value = labels.querySelector(".value");

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = x / width;
    fullSlider.style.setProperty("--size", 100 - percent * 100 + "%");
    line.style.setProperty("--leftVal", percent * 100 + "%");
    value.innerHTML = Math.round(percent * 40);

    if (labels.innerHTML.includes("Radius")) {
      document.documentElement.style.setProperty(
        "--border-radius",
        percent * 1 + "em"
      );
    }

    const activeBtn = slider.nextElementSibling.querySelector(".active-btn");
    if (activeBtn == null) {
      return;
    }
    if (value.innerHTML === "0") {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "17%");
    } else if (value.innerHTML === "20") {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "50%");
    } else if (value.innerHTML === "40") {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "82%");
    } else {
      activeBtn.classList.add("none");
    }
  };

  const modifyBorderButton = (value) => {
    const slider = document.querySelector(".slider");
    const fullSlider = slider.querySelector(".fullSlider");
    const line = slider.querySelector(".line");
    const labels = slider.querySelector(".labels");
    const activeBtn = slider.nextElementSibling.querySelector(".active-btn");
    const valueLabel = labels.querySelector(".value");
    valueLabel.innerHTML = Math.round(value * 40);
    fullSlider.style.setProperty("--size", 100 - value * 100 + "%");
    line.style.setProperty("--leftVal", value * 100 + "%");
    if (labels.innerHTML.includes("Radius")) {
      document.documentElement.style.setProperty(
        "--border-radius",
        value * 1 + "em"
      );
    }
    if (value === 0) {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "17%");
    } else if (value === 0.5) {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "50%");
    } else if (value === 1) {
      activeBtn.classList.remove("none");
      activeBtn.style.setProperty("--position", "82%");
    } else {
      activeBtn.classList.add("none");
    }
  };

  const handleOpacityChange = (e) => {
    const slider = e.currentTarget;
    const fullSlider = slider.querySelector(".fullSlider");
    const line = slider.querySelector(".line");
    const labels = slider.querySelector(".labels");
    const value = labels.querySelector(".value");

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = x / width;
    fullSlider.style.setProperty("--size", 100 - percent * 100 + "%");
    line.style.setProperty("--leftVal", percent * 100 + "%");
    value.innerHTML = 10 + Math.round(percent * 60);
    const content = document.querySelectorAll(".uploadBox");
    content.forEach((content) => {
      content.style.setProperty(
        "--shadowOpacity",
        10 + Math.round(percent * 60) + "%"
      );
    });
  };

  const modifyOpacity = (e, value) => {
    console.log(value);
    if (value == 1) {
      const slider = document.querySelectorAll(".slider")[1];
      const content = document.querySelectorAll(".uploadBox");
      content.forEach((content) => {
        content.style.setProperty(
          "--shadowOpacity",
          10 + Math.round(0 * 60) + "%"
        );
      });
      slider.classList.add("inactive");
      const activeBtn = e.currentTarget;
      const parentActiveBtn =
        activeBtn.parentElement.querySelector(".active-btn");
      parentActiveBtn.style.setProperty("--position", "17%");
    } else if (value == 2) {
      const slider = document.querySelectorAll(".slider")[1];

      slider.classList.remove("inactive");
      const labels = slider.querySelector(".labels");
      const valueLabel = labels.querySelector(".value");

      const content = document.querySelectorAll(".uploadBox");
      content.forEach((content) => {
        content.style.setProperty(
          "--shadowOpacity",
          valueLabel.innerHTML + "%"
        );
        content.style.setProperty("--offsetX", "0px");
        content.style.setProperty("--offsetY", "0px");
      });
      const activeBtn = e.currentTarget;
      const parentActiveBtn =
        activeBtn.parentElement.querySelector(".active-btn");
      parentActiveBtn.style.setProperty("--position", "50%");
    } else if (value == 3) {
      const slider = document.querySelectorAll(".slider")[1];

      slider.classList.remove("inactive");
      const labels = slider.querySelector(".labels");
      const valueLabel = labels.querySelector(".value");
      const content = document.querySelectorAll(".uploadBox");
      content.forEach((content) => {
        content.style.setProperty(
          "--shadowOpacity",
          valueLabel.innerHTML + "%"
        );
        content.style.setProperty("--offsetX", "8px");
        content.style.setProperty("--offsetY", "8px");
      });
      const activeBtn = e.currentTarget;
      const parentActiveBtn =
        activeBtn.parentElement.querySelector(".active-btn");
      parentActiveBtn.style.setProperty("--position", "82%");
    }
  };

  const startSliderOpacity = (e) => {
    handleOpacityChange(e);
    const slider = e.currentTarget;
    slider.addEventListener("mousemove", handleOpacityChange);
  };

  const stopSliderOpacity = (e) => {
    const slider = e.currentTarget;
    slider.removeEventListener("mousemove", handleOpacityChange);
  };

  const handleSliderScale = (e) => {
    const slider = e.currentTarget;
    const fullSlider = slider.querySelector(".fullSlider");
    const line = slider.querySelector(".line");
    const labels = slider.querySelector(".labels");
    const value = labels.querySelector(".value");

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = x / width;
    fullSlider.style.setProperty("--size", 100 - percent * 100 + "%");
    line.style.setProperty("--leftVal", percent * 100 + "%");
    value.innerHTML = Math.round(percent * 100);
    const content = document.querySelectorAll(".centeredDropbox");
    content.forEach((content) => {
      content.style.setProperty("--scale", 0.5 + percent);
    });
  };
  const startSliderScale = (e) => {
    handleSliderScale(e);
    const slider = e.currentTarget;
    slider.addEventListener("mousemove", handleSliderScale);
  };

  const stopSliderScale = (e) => {
    const slider = e.currentTarget;
    slider.removeEventListener("mousemove", handleSliderScale);
  };

  const startSlider = (e) => {
    handleSliderChange(e);
    const slider = e.currentTarget;
    slider.addEventListener("mousemove", handleSliderChange);
  };

  const stopSlider = (e) => {
    const slider = e.currentTarget;
    slider.removeEventListener("mousemove", handleSliderChange);
  };

  const handlePositionMove = (e, id) => {
    const button = e.currentTarget;
    const colParent = button.parentElement;
    const gridParent = colParent.parentElement;
    const wholeParent = gridParent.parentElement;
    const selectBtn = wholeParent.querySelector(".selectBtn");

    let posXBtn = 0;
    let posYBtn = 0;

    if (id >= 1 && id <= 5) {
      posXBtn = 0;
      posYBtn = 44.8 * (id - 1);
    } else if (id >= 6 && id <= 10) {
      posXBtn = 44.8;
      posYBtn = 44.8 * (id - 6);
    } else if (id >= 11 && id <= 15) {
      posXBtn = 89.6;
      posYBtn = 44.8 * (id - 11);
    } else if (id >= 16 && id <= 20) {
      posXBtn = 134.4;
      posYBtn = 44.8 * (id - 16);
    } else if (id >= 21 && id <= 25) {
      posXBtn = 179.2;
      posYBtn = 44.8 * (id - 21);
    }

    selectBtn.style.setProperty("--transformX", `${posXBtn}px`);
    selectBtn.style.setProperty("--transformY", `${posYBtn}px`);

    const boxPositionX = posXBtn / 179.2;
    const boxPositionY = posYBtn / 179.2;

    const uploadBoxes = document.querySelectorAll(".centeredDropbox");
    uploadBoxes.forEach((uploadBox) => {
      uploadBox.style.setProperty("--timeTrans", "0.2s");
      uploadBox.style.setProperty(
        "--transformX",
        -50 + 100 * boxPositionX + "%"
      );
      uploadBox.style.setProperty(
        "--transformY",
        -50 + 100 * boxPositionY + "%"
      );
    });
  };

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

    console.log(width + " " + height);

    let posXBtn = x;
    let posYBtn = y;

    console.log(posXBtn);
    console.log(posYBtn);

    if (posXBtn < 22.4) {
      posXBtn = 22.4;
    }
    if (posXBtn > width - 22.4) {
      posXBtn = width - 22.4;
    }
    if (posYBtn < 22.4) {
      posYBtn = 22.4;
    }
    if (posYBtn > height - 22.4) {
      posYBtn = height - 22.4;
    }

    button.style.setProperty("--transformX", `${posXBtn - 22.4}px`);
    button.style.setProperty("--transformY", `${posYBtn - 22.4}px`);
    const boxPositionX = posXBtn / 179.2;
    const boxPositionY = posYBtn / 179.2;

    const uploadBoxes = document.querySelectorAll(".centeredDropbox");

    uploadBoxes.forEach((uploadBox) => {
      uploadBox.style.setProperty("--timeTrans", "0s");
      uploadBox.style.setProperty(
        "--transformX",
        -50 + 100 * boxPositionX + "%"
      );
      uploadBox.style.setProperty(
        "--transformY",
        -50 + 100 * boxPositionY + "%"
      );
    });
  };

  const startPositionDrag = (e) => {
    handlePositionDrag(e);
    const button = e.currentTarget;
    const sibling = button.nextElementSibling;
    const buttons = button.parentElement.querySelectorAll(".propBtn");
    buttons.forEach((button) => {
      button.classList.add("none");
    });

    button.addEventListener("mousemove", handlePositionDrag);
  };

  const stopPositionDrag = (e) => {
    const button = e.currentTarget;
    const buttons = button.parentElement.querySelectorAll(".propBtn");
    buttons.forEach((button) => {
      button.classList.remove("none");
    });
    button.removeEventListener("mousemove", handlePositionDrag);
  };

  const hideMockup = () => {
    const centeredDropbox = document.querySelectorAll(".centeredDropbox");
    centeredDropbox.forEach((elem) => {
      elem.classList.add("none");
    });
    const panelElements = document.querySelectorAll(".left-bar .element");
    panelElements.forEach((elem) => {
      elem.classList.add("none");
    });
    const hiddenMockup = document.querySelector(".hiddenMockup");
    hiddenMockup.classList.remove("none");

    document
      .querySelector(".commandBar .hideMockupSmall svg:nth-child(1)")
      .classList.add("none");
    document
      .querySelector(".commandBar .hideMockupSmall svg:nth-child(2)")
      .classList.remove("none");
    setSeeMockup(false);
  };

  const showMockup = () => {
    const centeredDropbox = document.querySelectorAll(".centeredDropbox");
    centeredDropbox.forEach((elem) => {
      elem.classList.remove("none");
    });
    const panelElements = document.querySelectorAll(".left-bar .element");
    panelElements.forEach((elem) => {
      elem.classList.remove("none");
    });
    const hiddenMockup = document.querySelector(".hiddenMockup");
    hiddenMockup.classList.add("none");

    document
      .querySelector(".commandBar .hideMockupSmall svg:nth-child(1)")
      .classList.remove("none");
    document
      .querySelector(".commandBar .hideMockupSmall svg:nth-child(2)")
      .classList.add("none");
    setSeeMockup(true);
  };

  const handleShadowMove = (e, id) => {
    const button = e.currentTarget;
    const colParent = button.parentElement;
    const gridParent = colParent.parentElement;
    const wholeParent = gridParent.parentElement;
    const selectBtn = wholeParent.querySelector(".selectBtn");

    let posXBtn = 0;
    let posYBtn = 0;

    if (id >= 1 && id <= 5) {
      posXBtn = 0;
      posYBtn = 44.8 * (id - 1);
    } else if (id >= 6 && id <= 10) {
      posXBtn = 44.8;
      posYBtn = 44.8 * (id - 6);
    } else if (id >= 11 && id <= 15) {
      posXBtn = 89.6;
      posYBtn = 44.8 * (id - 11);
    } else if (id >= 16 && id <= 20) {
      posXBtn = 134.4;
      posYBtn = 44.8 * (id - 16);
    } else if (id >= 21 && id <= 25) {
      posXBtn = 179.2;
      posYBtn = 44.8 * (id - 21);
    }
    console.log(posXBtn);

    selectBtn.style.setProperty("--transformX", `${posXBtn}px`);
    selectBtn.style.setProperty("--transformY", `${posYBtn}px`);

    const boxPositionX = posXBtn / 179.2;
    const boxPositionY = posYBtn / 179.2;

    const uploadBox = document.querySelectorAll(".uploadBox");
    const posX = -20 + Math.round((10 * posXBtn) / 44.8);
    const posY = -20 + Math.round((10 * posYBtn) / 44.8);
    console.log("shadow" + Math.round((10 * posXBtn) / 44.8) + " " + posY);
    uploadBox.forEach((box) => {
      box.style.setProperty("--offsetX", -posX + "px");
      box.style.setProperty("--offsetY", -posY + "px");
    });
  };

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

    if (posXBtn < 22.4) {
      posXBtn = 22.4;
    }
    if (posXBtn > width - 22.4) {
      posXBtn = width - 22.4;
    }
    if (posYBtn < 22.4) {
      posYBtn = 22.4;
    }
    if (posYBtn > height - 22.4) {
      posYBtn = height - 22.4;
    }

    button.style.setProperty("--transformX", `${posXBtn - 22.4}px`);
    button.style.setProperty("--transformY", `${posYBtn - 22.4}px`);
    const boxPositionX = posXBtn / 179.2;
    const boxPositionY = posYBtn / 179.2;

    const uploadBoxes = document.querySelectorAll(".uploadBox");

    const posX = -20 + Math.round((10 * posXBtn) / 44.8);
    const posY = -20 + Math.round((10 * posYBtn) / 44.8);
    console.log("shadow" + Math.round((10 * posXBtn) / 44.8) + " " + posY);
    uploadBoxes.forEach((box) => {
      box.style.setProperty("--offsetX", -posX + "px");
      box.style.setProperty("--offsetY", -posY + "px");
    });
  };

  const startShadowDrag = (e) => {
    handleShadowDrag(e);
    const button = e.currentTarget;
    const sibling = button.nextElementSibling;
    const buttons = button.parentElement.querySelectorAll(".propBtn");
    buttons.forEach((button) => {
      button.classList.add("none");
    });

    button.addEventListener("mousemove", handleShadowDrag);
  };

  const stopShadowDrag = (e) => {
    const button = e.currentTarget;
    const buttons = button.parentElement.querySelectorAll(".propBtn");
    buttons.forEach((button) => {
      button.classList.remove("none");
    });
    button.removeEventListener("mousemove", handleShadowDrag);
  };

  const activateGrid = (e) => {
    const parent = e.currentTarget.parentElement;
    const grid = parent.querySelector(".propertyGridElement");
    grid.classList.toggle("none");
  };

  const openLayoutsPanel = (e) => {
    const layoutPanel = document.querySelector(".layoutPanel");
    const arrow = document.querySelector(".left-bar .selector .arrow");

    arrow.classList.toggle("rotate");
    layoutPanel.classList.toggle("none");
  };

  const changeLayout = (aspectRatio, textRatio) => {
    document.documentElement.style.setProperty("--aspect-ratio", aspectRatio);
    document.documentElement.style.setProperty("--aspect-ratio2", aspectRatio);
    document.documentElement.style.setProperty("--aspect-ratio3", aspectRatio);

    document.querySelector(".infoElem p").innerHTML = textRatio;
    document.querySelector(".selector .details span").innerHTML = textRatio;
  };
  const handleLayoutChange = (e, index) => {
    const pressedButton = e.currentTarget;
    const activeButton = document.querySelector(
      ".layoutPanel .list .grid button.active"
    );
    const coverImg = document.querySelector(".selector .current img");

    activeButton.classList.remove("active");
    pressedButton.classList.add("active");

    const title = document.querySelector(".selector .details p");
    title.innerHTML = layoutsNames[index];
    coverImg.src = cover[index];
    console.log(index);
    setLayoutsName(`layout-${index}`);
    switch (index) {
      case 0:
        changeLayout(1 / 1, "Adapts to image");

        document.querySelector(".canvas .zone>img").classList.add("none");
        document
          .querySelector(".canvas .zone:nth-child(2)>img")
          .classList.add("none");
        document
          .querySelector(".canvas .zone:nth-child(3)>img")
          .classList.add("none");
        document.documentElement.style.setProperty("--padding", "0% 0% 0% 0%");
        break;
      case 2:
        changeLayout(6 / 13, "6:13");
        document.querySelector(".canvas .zone>img").classList.add("none");
        document
          .querySelector(".canvas .zone:nth-child(2)>img")
          .classList.add("none");
        document
          .querySelector(".canvas .zone:nth-child(3)>img")
          .classList.add("none");
        document.documentElement.style.setProperty("--padding", "0% 0% 0% 0%");
        break;
      case 4:
        changeLayout(6 / 13, "1170 X 2532");
        setCurrentDevice(
          "https://assets.shots.so/canvas/mockups/iPhone 15/black.png"
        );
        document.querySelector(".canvas .zone>img").classList.remove("none");
        document
          .querySelector(".canvas .zone:nth-child(2)>img")
          .classList.remove("none");
        document
          .querySelector(".canvas .zone:nth-child(3)>img")
          .classList.remove("none");
        document.documentElement.style.setProperty(
          "--padding",
          "9.1% 2.2% 9.1% 2.2%"
        );
    }
    const dropboxParent = document.querySelector(".canvas .centeredDropbox");
    for (let attri of dropboxParent.classList) {
      if (
        attri.includes("style-") ||
        attri.includes("styletwo-") ||
        attri.includes("stylethree-") ||
        attri.includes("layout-")
      ) {
        dropboxParent.classList.remove(attri);
      }
    }
  };
  const previewDesign = () => {
    console.log(document.querySelector("left-bar"));
    document.querySelector(".left-bar").classList.toggle("none");
    document.querySelector(".right-bar").classList.toggle("none");
  };

  const handleDeviceChange = (e, deviceName) => {
    console.log(deviceName);
    const button = e.currentTarget;
    const activeButtons = document.querySelectorAll(
      ".scroll .element:first-child .panelBtn .preview.active"
    );
    activeButtons.forEach((button) => {
      button.classList.remove("active");
    });
    console.log(button);

    button.querySelector(".preview").classList.add("active");

    const deviceImg = document.querySelectorAll(".centeredDropbox .zone>img");
    deviceImg.forEach((img) => {
      img.src = deviceName;
    });
  };

  const handleLeftBar = (e) => {
    const button = e.currentTarget;
    if(button.classList.contains("mockupBtn")){
      const buttons = document.querySelectorAll(".mockupBtn");
      buttons.forEach((button) => {
        button.classList.add("active");
      });
      const frameBtns = document.querySelectorAll(".frameBtn");
      frameBtns.forEach((frameBtn) => {
        frameBtn.classList.remove("active");
      });
      document.querySelector(".panel").classList.remove("none");
      document.querySelector(".panel.frame").classList.add("none");
    }
    else{
      const buttons = document.querySelectorAll(".mockupBtn");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      const frameBtns = document.querySelectorAll(".frameBtn");
      frameBtns.forEach((frameBtn) => {
        frameBtn.classList.add("active");
      });
      document.querySelector(".panel").classList.add("none");
      document.querySelector(".panel.frame").classList.remove("none")
    }
  };

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.44 2.52H4.56c-1.32 0-2.4 1.08-2.4 2.4V15c0 1.32 1.08 2.4 2.4 2.4h1.92v4.08l6-4.08h6.96c1.32 0 2.4-1.08 2.4-2.4V4.92c0-1.32-1.08-2.4-2.4-2.4M7.392 7.32h4.896c.408 0 .72.312.72.72s-.312.72-.72.72H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72m8.736 4.8H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72h8.736c.408 0 .72.312.72.72s-.312.72-.72.72"
                ></path>
              </svg>
            </button>
            <button type="button" class="more">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.91 13.46c1.41 0 2.54 1.14 2.54 2.56v3.4c0 1.41-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.14-2.57 2.54-2.57h3.38Zm11.54 0c1.4 0 2.54 1.14 2.54 2.56v3.4c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.57 2.54-2.57h3.38ZM7.9 1.99c1.41 0 2.54 1.15 2.54 2.561v3.4c0 1.42-1.13 2.56-2.54 2.56H4.52c-1.4 0-2.54-1.14-2.54-2.56v-3.41c0-1.411 1.14-2.561 2.54-2.561H7.9Zm11.54 0c1.4 0 2.54 1.15 2.54 2.561v3.4c0 1.42-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.14-2.54-2.56v-3.41a2.55 2.55 0 0 1 2.54-2.561h3.38Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="panel">
          <div className="panel-tabs">
            <div className="tabs">
              <button
                type="button"
                class="mockupBtn active"
                onClick={handleLeftBar}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.46 5C20.86 5 22 6.141 22 7.561v11.87c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56V7.55c0-1.42 1.13-2.561 2.54-2.561h3.38ZM7.91 2c1.41 0 2.54 1.15 2.54 2.561v11.87c0 1.42-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.14-2.54-2.56V4.55c0-1.411 1.14-2.561 2.54-2.561h3.38Z"
                  ></path>
                </svg>
                <span>Mockup</span>
              </button>
              <button type="button" class="frameBtn" onClick={handleLeftBar}>
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
              <button className="selector" onClick={openLayoutsPanel}>
                <div className="current">
                  <img
                    crossorigin="anonymous"
                    loading="eager"
                    src="https://shots.so/mockups/Screenshot/thumbs/1.png"
                    alt="Thumbnail"
                  ></img>
                </div>
                <div className="details">
                  <p>Screenshot</p>
                  <span>Adapts to image</span>
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
              <div className="filters">
                <div className="buttons">
                  <button>
                    <span>All</span>
                  </button>
                  <button>
                    <span>Phone</span>
                  </button>
                  <button>
                    <span>Tablet</span>
                  </button>
                  <button>
                    <span>Laptop</span>
                  </button>
                  <button>
                    <span>Desktop</span>
                  </button>
                  <button>
                    <span>Wearable</span>
                  </button>
                </div>
              </div>
              <div className="list">
                <div className="grid">
                  {previewImages.map((layout, index) => {
                    return (
                      <button
                        className="item"
                        onClick={(e) => handleLayoutChange(e, index)}
                      >
                        <div className="details">
                          <h6>{layoutsNames[index]}</h6>
                          <p>{layoutsNum[index]} layouts</p>
                        </div>
                        <div className="img">
                          <img src={`${cover[index]}`} alt="" />
                        </div>
                        <div className="preview">
                          {Array.from({ length: 3 }).map((_, index2) => {
                            if (previewImages[index][index2] !== "")
                              return (
                                <div>
                                  <img
                                    src={`${previewImages[index][index2]}`}
                                    alt=""
                                  />
                                </div>
                              );
                            return (
                              <div style={{ visibility: "hidden" }}>
                                <img src={`${cover[index]}`} alt="" />
                              </div>
                            );
                          })}
                          {extraPreview[index] !== 0 ? (
                            <div>
                              <span>+ {extraPreview[index]}</span>
                            </div>
                          ) : (
                            <div style={{ visibility: "hidden" }}>
                              <span>+ 6</span>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="scroll">
              <div className="container">
                {layoutsName !== "layout-4" && (
                  <div className="element">
                    <div className="title">Style</div>
                    <div className="grid">
                      <div
                        className="panelBtn"
                        id="none"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/Screenshot/styles/default.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Default</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="glass-light"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          {
                            <div className="image">
                              <img
                                crossorigin="anonymous"
                                loading="eager"
                                src="https://shots.so/mockups/Screenshot/styles/glass-light.png"
                                alt="Default mockup style"
                              ></img>
                            </div>
                          }
                        </div>
                        <p>Glass Light</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="glass-dark"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          {
                            <div className="image">
                              <img
                                crossorigin="anonymous"
                                loading="eager"
                                src="https://shots.so/mockups/Screenshot/styles/glass-dark.png"
                                alt="Default mockup style"
                              ></img>
                            </div>
                          }
                        </div>
                        <p>Glass Dark</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-outline"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/Screenshot/styles/outline.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Outline</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-border"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          {
                            <div className="image">
                              <img
                                crossorigin="anonymous"
                                loading="eager"
                                src="https://shots.so/mockups/Screenshot/styles/border.png"
                                alt="Default mockup style"
                              ></img>
                            </div>
                          }
                        </div>
                        <p>Border</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-retro"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          {
                            <div className="image">
                              <img
                                crossorigin="anonymous"
                                loading="eager"
                                src="https://shots.so/mockups/Screenshot/styles/retro.png"
                                alt="Default mockup style"
                              ></img>
                            </div>
                          }
                        </div>
                        <p>Retro</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-card"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/Screenshot/styles/card.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Card</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-stack"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/Screenshot/styles/stack.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Stack</p>
                      </div>
                      <div
                        className="panelBtn"
                        id="screenshot-stack2"
                        onClick={handleFrameChange}
                      >
                        <div className="preview">
                          {
                            <div className="image">
                              <img
                                crossorigin="anonymous"
                                loading="eager"
                                src="https://shots.so/mockups/Screenshot/styles/stack-2.png"
                                alt="Default mockup style"
                              ></img>
                            </div>
                          }
                        </div>
                        <p>Stack 2</p>
                      </div>
                    </div>
                  </div>
                )}
                {layoutsName === "layout-4" && (
                  <div className="element">
                    <div className="title">Style</div>
                    <div className="grid">
                      <div
                        className="panelBtn"
                        onClick={(e) =>
                          handleDeviceChange(
                            e,
                            "https://assets.shots.so/canvas/mockups/iPhone%2015/black.png"
                          )
                        }
                      >
                        <div className="preview active">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/iPhone%2015/styles/black.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Black</p>
                      </div>
                      <div
                        className="panelBtn"
                        onClick={(e) =>
                          handleDeviceChange(
                            e,
                            "https://assets.shots.so/canvas/mockups/iPhone%2015/blue.png"
                          )
                        }
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/iPhone%2015/styles/blue.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Black</p>
                      </div>
                      <div
                        className="panelBtn"
                        onClick={(e) =>
                          handleDeviceChange(
                            e,
                            "https://assets.shots.so/canvas/mockups/iPhone%2015/green.png"
                          )
                        }
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/iPhone%2015/styles/green.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Black</p>
                      </div>
                      <div
                        className="panelBtn"
                        onClick={(e) =>
                          handleDeviceChange(
                            e,
                            "https://assets.shots.so/canvas/mockups/iPhone%2015/pink.png"
                          )
                        }
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/iPhone%2015/styles/pink.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Black</p>
                      </div>
                      <div
                        className="panelBtn"
                        onClick={(e) =>
                          handleDeviceChange(
                            e,
                            "https://assets.shots.so/canvas/mockups/iPhone%2015/yellow.png"
                          )
                        }
                      >
                        <div className="preview">
                          <div className="image">
                            <img
                              crossorigin="anonymous"
                              loading="eager"
                              src="https://shots.so/mockups/iPhone%2015/styles/yellow.png"
                              alt="Default mockup style"
                            ></img>
                          </div>
                        </div>
                        <p>Black</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="element">
                  <div className="title">Border</div>
                  <div className="col1-grid">
                    <div
                      className="slider"
                      style={{ transition: "none" }}
                      onMouseDown={startSlider}
                      onMouseUp={stopSlider}
                      onMouseLeave={stopSlider}
                    >
                      <div className="fullSlider"></div>
                      <div className="line"></div>
                      <div className="labels">
                        <div className="name">Radius</div>
                        <div className="value">20</div>
                      </div>
                    </div>
                    <div className="buttons">
                      <div
                        className="button"
                        onClick={() => modifyBorderButton(0)}
                      >
                        <div className="visual"></div>
                        <p>Sharp</p>
                      </div>
                      <div
                        className="button"
                        onClick={() => modifyBorderButton(0.5)}
                      >
                        <div className="visual"></div>
                        <p>Curved</p>
                      </div>

                      <div
                        className="button"
                        onClick={() => modifyBorderButton(1)}
                      >
                        <div className="visual"></div>
                        <p>Round</p>
                      </div>
                      <div className="active-btn"></div>
                    </div>
                  </div>
                </div>

                <div className="element">
                  <div className="title">Shadow</div>
                  <div className="col1-grid">
                    <div
                      className="slider"
                      style={{ transition: "none" }}
                      onMouseDown={startSliderOpacity}
                      onMouseUp={stopSliderOpacity}
                      onMouseLeave={stopSliderOpacity}
                    >
                      <div className="fullSlider"></div>
                      <div className="line"></div>
                      <div className="labels">
                        <div className="name">Opacity</div>
                        <div className="value">40</div>
                      </div>
                    </div>
                    <div className="buttons">
                      <div
                        className="button"
                        onClick={(e) => modifyOpacity(e, 1)}
                      >
                        <img
                          src="https://shots.so/image/shadow-modes/shadow-none.png"
                          alt=""
                        />
                        <p>None</p>
                      </div>
                      <div
                        className="button"
                        onClick={(e) => modifyOpacity(e, 2)}
                      >
                        <img
                          src="https://shots.so/image/shadow-modes/shadow-hug.png"
                          alt=""
                        />
                        <p>Hug</p>
                      </div>

                      <div
                        className="button"
                        onClick={(e) => modifyOpacity(e, 3)}
                      >
                        <img
                          src="https://shots.so/image/shadow-modes/shadow-spread.png"
                          alt=""
                        />
                        <p>Spread</p>
                      </div>
                      <div className="active-btn right"></div>
                    </div>
                    <div className="propertyGridElement none">
                      <div
                        className="selectBtn"
                        onMouseDown={startShadowDrag}
                        onMouseLeave={stopShadowDrag}
                        onMouseUp={stopShadowDrag}
                      ></div>
                      <div className="propertyGrid">
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 1)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 2)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 3)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 4)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 5)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 6)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 7)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 8)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 9)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 10)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 11)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 12)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 13)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 14)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 15)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 16)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 17)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 18)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 19)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 20)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 21)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 22)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 23)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 24)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handleShadowMove(e, 25)}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button className="shadowPos" onClick={activateGrid}>
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
                    </button>
                  </div>
                </div>
                <div className="element">
                  <div className="title">Size & Position</div>
                  <div className="col1-grid">
                    <div
                      className="slider"
                      style={{ transition: "none" }}
                      onMouseDown={startSliderScale}
                      onMouseUp={stopSliderScale}
                      onMouseLeave={stopSliderScale}
                    >
                      <div className="fullSlider"></div>
                      <div className="line"></div>
                      <div className="labels">
                        <div className="name">Scale</div>
                        <div className="value">50</div>
                      </div>
                    </div>
                    <div className="propertyGridElement">
                      <div
                        className="selectBtn"
                        onMouseDown={startPositionDrag}
                        onMouseUp={stopPositionDrag}
                        onMouseLeave={stopPositionDrag}
                      ></div>
                      <div className="propertyGrid">
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 1)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 2)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 3)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 4)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 5)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 6)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 7)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 8)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 9)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 10)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 11)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 12)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 13)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 14)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 15)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 16)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 17)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 18)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 19)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 20)}
                          ></div>
                        </div>
                        <div className="col">
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 21)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 22)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 23)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 24)}
                          ></div>
                          <div
                            className="propBtn"
                            onClick={(e) => handlePositionMove(e, 25)}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element">
                  <div className="title">Details</div>
                  <div className="col1-grid">
                    <div className="infoElem">
                      <div className="elem">
                        {layoutsName == "layout-4" && (
                          <div className="row">
                            <span>Device</span>
                            <p>Apple Iphone 15</p>
                          </div>
                        )}
                        <div className="row">
                          <span>Screen pixels</span>
                          <p>Adapts to image</p>
                        </div>
                        {layoutsName == "layout-4" && (
                          <div className="row">
                            <span>Realease year</span>
                            <p>2023</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element">
                  <div className="title">Visibility</div>
                  <div className="col1-grid">
                    <button className="hideMockup" onClick={hideMockup}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"
                        ></path>
                      </svg>
                      <span>Hide Mockup</span>
                    </button>
                  </div>
                </div>

                <div className="hiddenMockup none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"
                    ></path>
                  </svg>
                  <span className="title">Mockup is hidden</span>
                  <span className="small">Show mockup to start editing</span>
                  <button class="showMockup" onClick={showMockup}>
                    <span>Show mockup</span>
                  </button>
                </div>

                <div className="export">
                  <div className="exportBtn">
                    <button className="download">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M12.404 16.49V8.317m3.752 4.408s-2.528 3.764-3.752 3.764-3.748-3.764-3.748-3.764"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3.154 12.404c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25-2.313-9.25-9.25-9.25-9.25 2.313-9.25 9.25"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span>Download</span>
                        <p>1x as PNG</p>
                      </div>
                    </button>
                    <button className="copy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g fill="currentColor" fill-rule="evenodd">
                          <path d="M11.82 6.02h.2c.16 0 .32.06.43.18l4.07 4.24c.1.11.16.26.16.41v7.48c0 1.98-1.62 3.61-3.6 3.64H6.49c-1.99-.04-3.58-1.68-3.54-3.66V9.59c.04-2 1.69-3.61 3.67-3.61l5.04-.01c.03-.01.06-.01.1-.01Zm-.61 1.21H6.66c-1.34 0-2.44 1.07-2.48 2.41v8.71a2.376 2.376 0 0 0 2.34 2.43l.11-.01h6.44a2.44 2.44 0 0 0 2.39-2.44l-.01-6.73h-1.62a2.684 2.684 0 0 1-2.67-2.68l-.01-1.73Zm1.2.67v1.05c0 .8.65 1.46 1.46 1.46l.95-.01-2.42-2.52Z"></path>
                          <path d="M15.949 2c-.04-.01-.07-.01-.11-.01h-5.16c-1.99 0-3.63 1.6-3.68 3.6V6.8h1.2V5.6a2.48 2.48 0 0 1 2.47-2.42l4.54-.01v1.72c0 1.47 1.19 2.67 2.66 2.67l1.61-.01v6.72c0 1.32-1.08 2.41-2.4 2.43H15.8v1.2l1.27-.01a3.67 3.67 0 0 0 3.596-3.65V6.76c0-.16-.07-.31-.17-.42l-4.08-4.25a.63.63 0 0 0-.44-.19l-.11-.01Zm.5 2.93-.01-1.06 2.41 2.51h-.96c-.81-.01-1.47-.67-1.47-1.47Z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="settings">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M17.38 13.7c1.71 0 3.11 1.38 3.11 3.09 0 1.7-1.4 3.09-3.12 3.09s-3.12-1.39-3.12-3.1 1.39-3.1 3.11-3.1Zm0 1.5c-.89 0-1.62.71-1.62 1.59s.72 1.59 1.61 1.59c.88 0 1.61-.72 1.61-1.6s-.73-1.6-1.62-1.6Zm-7.31.88a.749.749 0 1 1 0 1.5H3.76c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h6.3ZM6.1 3.98c1.71 0 3.11 1.39 3.11 3.09s-1.4 3.09-3.12 3.09-3.12-1.388-3.12-3.1c0-1.71 1.39-3.1 3.11-3.1Zm0 1.5c-.89 0-1.62.71-1.62 1.59s.72 1.59 1.61 1.59 1.61-.72 1.61-1.6c0-.89-.73-1.6-1.62-1.6Zm13.07.9a.749.749 0 1 1 0 1.5h-6.3c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <Frame handleLeftBar ={handleLeftBar}/>
      </div>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, 1)}
        id="fileInput"
        style={{ display: "none" }}
      />
      <input
        type="file"
        onChange={(e) => handleFileChange(e, 2)}
        id="fileInputTwo"
        style={{ display: "none" }}
      />
      <input
        type="file"
        onChange={(e) => handleFileChange(e, 3)}
        id="fileInputThree"
        style={{ display: "none" }}
      />

      <div className="canvas">
        <div className="canvasContainer">
          <div className="frame">
            <div className="innerFrame" ref={ref}>
              <div className="background"></div>
              <div className="dropboxParent">
                <div className="dropbox">
                  <div className={`centeredDropbox style-0 ${layoutsName}`}>
                    <div className="zone">
                      <img src={currentDevice} className="none" alt="" />
                      <div className="zone2">
                        <div
                          className="uploadBox"
                          onClick={() => handleClickInputFile(1)}
                        >
                          <div className="stack2 none">
                            {preview && (
                              <div className="imgContainer">
                                <img
                                  src={preview}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="stack1 none">
                            {preview && (
                              <div className="imgContainer">
                                <img
                                  src={preview}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          {preview == null && (
                            <div class="content default">
                              <div class="svg-loader undefined">
                                <div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57 -.22.29-.41.6-.6.92 -.48.78-1.03 1.69-1.97 2.22 -1.38.76-2.42.05-3.17-.45 -.29-.19-.56-.37-.83-.49 -.68-.29-1.28.04-2.18 1.17 -.48.59-.94 1.18-1.41 1.77 -.29.35-.22.89.16 1.13 .6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12 .35-.86.532-1.89.19-2.75 -.12-.29-.28-.55-.52-.79 -.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51 -1.13-2.5-2.5-2.5Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <h3>Drop or Paste</h3>
                              <span>(PNG or JPEG)</span>
                              <p class="screen-info">Adapts to image</p>
                            </div>
                          )}
                          {preview && (
                            <div className="imgContainer">
                              <img src={preview} alt="preview" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="zone none">
                      <img src={currentDevice} alt="" />
                      <div className="zone2">
                        <div
                          className="uploadBox"
                          onClick={() => handleClickInputFile(2)}
                        >
                          <div className="stack2 none">
                            {previewTwo && (
                              <div className="imgContainer">
                                <img
                                  src={previewTwo}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="stack1 none">
                            {previewTwo && (
                              <div className="imgContainer">
                                <img
                                  src={previewTwo}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          {previewTwo == null && (
                            <div class="content default">
                              <div class="svg-loader undefined">
                                <div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57 -.22.29-.41.6-.6.92 -.48.78-1.03 1.69-1.97 2.22 -1.38.76-2.42.05-3.17-.45 -.29-.19-.56-.37-.83-.49 -.68-.29-1.28.04-2.18 1.17 -.48.59-.94 1.18-1.41 1.77 -.29.35-.22.89.16 1.13 .6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12 .35-.86.532-1.89.19-2.75 -.12-.29-.28-.55-.52-.79 -.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51 -1.13-2.5-2.5-2.5Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <h3>Drop or Paste</h3>
                              <span>(PNG or JPEG)</span>
                              <p class="screen-info">Adapts to image</p>
                            </div>
                          )}
                          {previewTwo && (
                            <div className="imgContainer">
                              <img src={previewTwo} alt="preview" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="zone none">
                      <img src={currentDevice} alt="" />
                      <div className="zone2">
                        <div
                          className="uploadBox"
                          onClick={() => handleClickInputFile(3)}
                        >
                          <div className="stack2 none">
                            {previewThree && (
                              <div className="imgContainer">
                                <img
                                  src={previewThree}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="stack1 none">
                            {previewThree && (
                              <div className="imgContainer">
                                <img
                                  src={previewThree}
                                  alt="preview"
                                  style={{ filter: "blur(2em)" }}
                                />
                              </div>
                            )}
                          </div>
                          {previewThree == null && (
                            <div class="content default">
                              <div class="svg-loader undefined">
                                <div>
                                  <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57 -.22.29-.41.6-.6.92 -.48.78-1.03 1.69-1.97 2.22 -1.38.76-2.42.05-3.17-.45 -.29-.19-.56-.37-.83-.49 -.68-.29-1.28.04-2.18 1.17 -.48.59-.94 1.18-1.41 1.77 -.29.35-.22.89.16 1.13 .6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12 .35-.86.532-1.89.19-2.75 -.12-.29-.28-.55-.52-.79 -.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51 -1.13-2.5-2.5-2.5Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <h3>Drop or Paste</h3>
                              <span>(PNG or JPEG)</span>
                              <p class="screen-info">Adapts to image</p>
                            </div>
                          )}
                          {previewThree && (
                            <div className="imgContainer">
                              <img src={previewThree} alt="preview" />
                            </div>
                          )}
                        </div>
                      </div>
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
          {layoutsName === "layout-0" && (
            <ScreenshotPosition
              preview={preview}
              preview2={previewTwo}
              applyStyle={applyStyle}
            />
          )}
          {layoutsName === "layout-2" && (
            <MinimalPhonePosition
              preview={preview}
              preview2={previewTwo}
              preview3={previewThree}
              applyStyle={applyStyle}
            />
          )}
          {layoutsName === "layout-4" && (
            <IphonePosition
              preview={preview}
              preview2={previewTwo}
              preview3={previewThree}
              applyStyle={applyStyle}
              imgsrc={currentDevice}
            />
          )}
        </div>
      </div>

      <div className="commandBar">
        <button
          className="hideMockupSmall"
          onClick={() => {
            if (seeMockup) hideMockup();
            else showMockup();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"
            ></path>
          </svg>
          <svg
            className="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.46 5C20.86 5 22 6.141 22 7.561v11.87c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56V7.55c0-1.42 1.13-2.561 2.54-2.561h3.38ZM7.91 2c1.41 0 2.54 1.15 2.54 2.561v11.87c0 1.42-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.14-2.54-2.56V4.55c0-1.411 1.14-2.561 2.54-2.561h3.38Z"
            ></path>
          </svg>
          <span>Mockup</span>
        </button>
        <button className="undo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4.18 2c.65 0 1.18.52 1.18 1.17v3.18c2.91-3.3 7.84-4.21 11.8-1.93 4.51 2.59 6.06 8.35 3.45 12.85s-8.39 6.04-12.91 3.44c-.57-.33-.76-1.05-.44-1.61.32-.57 1.04-.76 1.61-.44 3.38 1.94 7.71.79 9.67-2.59a7.06 7.06 0 0 0-2.6-9.65 7.105 7.105 0 0 0-8.83 1.4h2.92c.65 0 1.18.52 1.18 1.17 0 .64-.53 1.17-1.19 1.17H4.11c-.66 0-1.19-.53-1.19-1.18V3.09c0-.65.52-1.18 1.18-1.18Z"
            ></path>
          </svg>
          <span>Undo</span>
        </button>
        <button className="redo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M20.7 2c-.66 0-1.19.52-1.19 1.17v3.18c-2.92-3.3-7.85-4.21-11.81-1.93-4.52 2.59-6.07 8.35-3.46 12.85 2.6 4.5 8.38 6.04 12.9 3.44.56-.33.75-1.05.43-1.61-.33-.57-1.05-.76-1.62-.44-3.39 1.94-7.72.79-9.68-2.59s-.8-7.7 2.59-9.65c2.95-1.71 6.63-1.04 8.82 1.4h-2.93c-.66 0-1.19.52-1.19 1.17 0 .64.52 1.17 1.18 1.17h5.9c.65 0 1.18-.53 1.18-1.18V3.09c0-.65-.53-1.18-1.19-1.18Z"
            ></path>
          </svg>
          <span>Redo</span>
        </button>
        <button className="preview" onClick={previewDesign}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3.132 10.687q.499 0 .81-.322.322-.322.322-.81v-.737l-.218-3.259 2.421 2.543 2.992 3.021q.322.321.79.321.53 0 .862-.321.343-.322.343-.841 0-.239-.093-.446a1.2 1.2 0 0 0-.239-.384l-3.013-2.99-2.546-2.418 3.273.218h.8q.488 0 .81-.311a1.1 1.1 0 0 0 .322-.82q0-.488-.322-.81Q10.135 2 9.636 2H3.88q-.894 0-1.392.498-.489.488-.488 1.37v5.687q0 .478.322.81.321.322.81.322M14.363 22h5.756q.893 0 1.382-.499.498-.488.499-1.38v-5.677a1.08 1.08 0 0 0-.333-.81 1.1 1.1 0 0 0-.81-.322q-.479 0-.8.322a1.1 1.1 0 0 0-.322.81v.737l.218 3.259-2.431-2.554-2.982-3.009a1.07 1.07 0 0 0-.8-.322q-.52 0-.863.322-.342.321-.342.84 0 .239.083.457.093.207.27.374l2.992 2.989 2.566 2.418-3.283-.218h-.8q-.488 0-.821.322a1.1 1.1 0 0 0-.322.809q0 .488.322.81.333.322.821.322"
            ></path>
          </svg>
          <span>Preview</span>
        </button>
      </div>
    </div>
  );
}

export default App;
