export const routeDir = (dir, optional) => {

  if(optional){
    if(dir === "to_up") return "translate(0%, -100%)"

    if(dir === "to_down") return "translate(0%, 100%)"
  
    if(dir === "to_left") return "translate(-100%, 0%)"
  
    if(dir === "to_right") return "translate(100%, 0%)"
  }else{

    if(dir === "to_up") return "translate(0%, 100%)"

    if(dir === "to_down") return "translate(0%, -100%)"
  
    if(dir === "to_left") return "translate(100%, 0%)"
  
    if(dir === "to_right") return "translate(-100%, 0%)"

  }



  return new Error('error while sliding')
}

export const elementDir = (dir, optional) => {



  if(dir === "to_up") return "translate(0px, 100px)"

  if(dir === "to_down") return "translate(0px, -100px)"

  if(dir === "to_left") return "translate(100px, 0px)"

  if(dir === "to_right") return "translate(-100px, 0px)"



  return console.log('error while sliding');
}