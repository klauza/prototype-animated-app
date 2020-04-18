export const routeDir = (dir, optional) => {

  if(optional){
    if(dir === "down") return "translate(0px, -1000px)"

    if(dir === "up") return "translate(0px, 1000px)"
  
    if(dir === "left") return "translate(-1000px, 0px)"
  
    if(dir === "right") return "translate(1000px, 0px)"
  }else{

    if(dir === "down") return "translate(0px, 1000px)"

    if(dir === "up") return "translate(0px, -1000px)"
  
    if(dir === "left") return "translate(1000px, 0px)"
  
    if(dir === "right") return "translate(-1000px, 0px)"

  }



  return new Error('error while sliding')
}

export const elementDir = (dir, optional) => {



  if(dir === "down") return "translate(0px, -100px)"

  if(dir === "up") return "translate(0px, 100px)"

  if(dir === "left") return "translate(-100px, 0px)"

  if(dir === "right") return "translate(100px, 0px)"



  return new Error('error while sliding')
}