export const routeDir = (dir, optional) => {

  if(optional){
    if(dir === "down") return "translate(0%, -100%)"

    if(dir === "up") return "translate(0%, 100%)"
  
    if(dir === "left") return "translate(-100%, 0%)"
  
    if(dir === "right") return "translate(100%, 0%)"
  }else{

    if(dir === "down") return "translate(0%, 100%)"

    if(dir === "up") return "translate(0%, -100%)"
  
    if(dir === "left") return "translate(100%, 0%)"
  
    if(dir === "right") return "translate(-100%, 0%)"

  }



  return new Error('error while sliding')
}

export const elementDir = (dir, optional) => {



  if(dir === "down") return "translate(0px, 100px)"

  if(dir === "up") return "translate(0px, -100px)"

  if(dir === "left") return "translate(100px, 0px)"

  if(dir === "right") return "translate(-100px, 0px)"



  return new Error('error while sliding')
}