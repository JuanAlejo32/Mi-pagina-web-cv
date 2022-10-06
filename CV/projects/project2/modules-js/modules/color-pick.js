const d = document
let   artistscolor
    // canvas = d.querySelector("#img-canvas");



export const  changeBGgradient = async() =>{
    window.CSS.registerProperty({
      name: '--primary',
      syntax: '<color>',
      inherits: true,
      initialValue: '#ffd924',
    })
    window.CSS.registerProperty({
      name: '--secondary',
      syntax: '<color>',
      inherits: true,
      initialValue: '#e5961d',
    })
    window.CSS.registerProperty({
      name: '--tertiary',
      syntax: '<color>',
      inherits: true,
      initialValue: '#cf4310',
    })
    window.CSS.paintWorklet.addModule('../modules-js/modules/bezel.js')
  }
    

  
const updateProperties =(colors) =>{
  document.body.style.setProperty('--primary', `rgb(${colors[6].red}, ${colors[6].green}, ${colors[6].blue})`)
  document.body.style.setProperty('--secondary', `rgb(${colors[1].red}, ${colors[1].green}, ${colors[1].blue})`)
  document.body.style.setProperty('--tertiary', `rgb(${colors[8].red}, ${colors[8].green}, ${colors[8].blue})`)
  d.documentElement.style.setProperty("--red", `${colors[0].red}`);
  d.documentElement.style.setProperty("--green", `${colors[1].green}`);
  d.documentElement.style.setProperty("--blue", `${colors[2].blue}`);
}
  

export const colorBGchange =(e,canvas,srcImg) => {
  
    const  ctx = canvas.getContext("2d",{willReadFrequently:true}),
    
    image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    
  const imgCanvas = (dom) => {
    image.setAttribute("src", srcImg);
    image.addEventListener("load", (e) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const colors = getColorPalette(ctx,canvas);

      updateProperties(colors)

      // d.documentElement.style.setProperty("--primary",`rgb(${colors[6].red}, ${colors[6].green}, ${colors[6].blue})`
      // );
      // d.documentElement.style.setProperty("--secondary",`rgb(${colors[1].red}, ${colors[1].green}, ${colors[1].blue})`
      // );
      // d.documentElement.style.setProperty( "--tertiary",`rgb(${colors[8].red}, ${colors[8].green}, ${colors[8].blue})`
      // );

      // d.documentElement.style.setProperty("--red", `${colors[0].red}`);
      // d.documentElement.style.setProperty("--green", `${colors[1].green}`);
      // d.documentElement.style.setProperty("--blue", `${colors[2].blue}`);

      
    // const getTextColor = () => {
    //     let rgba = [colors[0].red, colors[1].green, colors[2].blue];
    //     if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
    //     return console.log("negro");
    //     } else {
    //     return console.log("blanco");
    //     }
    // };
    
    // getTextColor();

    });


  };
  
    imgCanvas(artistscolor);

};

const getColorPalette =(ctx,canvas) => {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const quality = 90,
      colors = [];

    for (
      let index = 0;
      index < canvas.width * canvas.height;
      index += index + quality
    ) {
      const offset = index * 4;

      const alpha = imgData[offset + 3];

      if (alpha > 0) {
        const red = imgData[offset];
        const green = imgData[offset + 1];
        const blue = imgData[offset + 2];
        colors.push({ red, green, blue });
        // console.log(colors)
      }
    }
    return colors;
  };


