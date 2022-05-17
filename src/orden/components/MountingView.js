import React, { useState } from "react";
import { TextInput } from "react-admin";
import { Typography, Box } from "@mui/material"
import logo from './img/LogoMed.png'

const mm2pxRelative = ( measure ,plateWmm, plateHmm , vbWidth, vbHeight, direction= "H")=>{
  const scaleH = plateHmm/plateWmm <= 1 ? 1 : 0;
  
  if(direction === 'H'){ 
    const ratio = (scaleH * plateHmm/plateWmm) + !scaleH
    return (measure  * (vbHeight) / plateHmm) *(ratio);
  }
  if(direction === 'W'){
    const ratio = (!scaleH * plateWmm/plateHmm) + scaleH
    return (measure  * (vbWidth) /  plateWmm) * (ratio);
  }
  else{
    throw console.error('Not Viable Parameters');
  }

}
  const generateGrid =(lines, repeatNum, gapP, gapR, desarrollo, posicion=1, objH, objW, radius)=>{
    // me retorna array de arrays llamado grid que entrega los valores:
    //    [[x,y,W,H,r,p]] -----> de cada uno de los rectangulos
    let grid = []
    let cell =  []
    let posArray = [0, 180, 90, 270]
    let W = objW
    let H = objH
    let x = 0
    let y = 0 
    let r = radius
    let repeat = desarrollo / repeatNum
    if(posicion===3||posicion===4){
      W=objH
      H=objW
    }
    for(let rep=0; rep < repeatNum; rep++){
      let xInitial = gapP/2
      let yInitial = (repeat-H)/2 

      y = yInitial+(rep * repeat)

      for(let pist = 0; pist < lines ; pist++){
          x =  xInitial + ( ( W + gapP )* pist)
          cell = [x,y,W,H,r, posArray[posicion-1]]

          grid.push(cell)
      }
    }
    //console.log(grid)
    return grid
  }
  const checkError=(gapR, dllo)=>{
    if(gapR<=0){return true}
    if(dllo<140){return true}
    return false
  }

const MountingSVG = (props) => {
    const { pathString, prodTamanoW,prodTamanoH , desarrollo, pistas, repet, posicion, gapPistas, gapRepet, radio} = props
    const vbWidth=300
    const vbHeight=300
    const plateHeight = desarrollo
    let plateWidth = ((prodTamanoW+gapPistas)*pistas) 

    if(posicion===3 || posicion===4){    
      plateWidth = ((prodTamanoH+gapPistas)*pistas) 
    }

    let plateWpx = mm2pxRelative(plateWidth, plateWidth, plateHeight, vbWidth, vbHeight, 'W' )
    let plateHpx = mm2pxRelative(plateHeight, plateWidth, plateHeight, vbWidth, vbHeight, 'H' )
    let objW = mm2pxRelative(prodTamanoW, plateWidth, plateHeight, vbWidth, vbHeight, 'W' )
    let objH = mm2pxRelative(prodTamanoH, plateWidth, plateHeight, vbWidth, vbHeight, 'H' )
      

    const gapPpx = mm2pxRelative(gapPistas, plateWidth, plateHeight, vbWidth, vbHeight, 'W' )
    const rPx = mm2pxRelative(radio, plateWidth, plateHeight, vbWidth, vbHeight, 'W' )


    const grid = generateGrid(pistas, repet, gapPpx, gapRepet, plateHpx, posicion, objH, objW, rPx)
    const error = checkError(gapRepet, desarrollo)
    return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={vbWidth}
      height={vbHeight}
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
          <rect x="0" y="0" width={plateWpx.toString()} height={plateHpx.toString()} fill="lightGrey" stroke="5px"></rect>
          
          {grid.map((cell, index)=>
                      <g key={index}>
                        <rect 
                            x={cell[0].toString()} 
                            y={cell[1].toString()} 
                            width={cell[2].toString()} 
                            height={cell[3].toString()} 
                            fill="white"
                            rx={cell[4].toString()}
                            />
                        <image href={logo}
                            x={(cell[0]+((cell[2]/2))-(cell[2]/2*0.7)).toString()} 
                            y={(cell[1]+((cell[3]/2))-(cell[3]/2*0.7)).toString()} 
                            width={(cell[2]*0.7).toString()} 
                            height={(cell[3]*0.7).toString()}
                            transform={`rotate( ${cell[5]||0} ,${(cell[0]+((cell[2]/2)))},${(cell[1]+(cell[3]/2))})`}
                            />
                      </g>)}
          <rect x="2.5" y="2.5" width={(plateWpx-5).toString()} height={(plateHpx-5).toString()} strokeWidth={error?'5px':'0px'} stroke='red' fill="red" fillOpacity={error ? 0.4 : 0}></rect>
    </svg>
  );
}
  
  
  const MountingView = (props) => {

    const { formData } = props

    const [value, setValue] = useState();
    
    const prodTamanoW=formData.prodAncho || 150
    const prodTamanoH=formData.prodAlto || 150
    const desarrollo=formData.desarrollo || 304.8
    const  pistas= formData.pistas || 2
    const repet = formData.repeticiones || 2
    const gapPistas = formData.gapPistas || 2
    const gapRepet = formData.gapRepet || 1
    const posicion = parseInt(formData.posicion) || '1'
    const radio = formData.radio || 0
    return (
      <Box sx={{minWidth:'100%', minHeight:'100%'}}>
        <MountingSVG 
            pathString={value}
            prodTamanoW={prodTamanoW} 
            prodTamanoH={prodTamanoH} 
            desarrollo={desarrollo} 
            pistas={pistas} 
            repet={repet}
            posicion={parseInt(formData.posicion)}
            gapPistas={gapPistas}
            gapRepet={gapRepet}
            radio={radio}
        />
      </Box>
    );
  };

  export default MountingView
