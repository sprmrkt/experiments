
import * as THREE from 'three/src/Three'

export const cicularPosition = (r,i) =>({x:Math.sin(i)*r,y:Math.cos(i)*r});

export const angleCalc=l=>((360/l)*Math.PI/180); //Calculates the deg of increment to complete a circle for the given item length

export function lerp(time,start,end,amt,motion=null,debug=false){
  let result;
  let t=0;
  switch(motion){
    case null:
      t=time*0.01;
    break;
    case "once":
    if(time<100){
      t=(time)*0.01;
    }
    break;
    case "loop":
      t=(time%100)*0.01; //LOOPING BAYBEYY!!
    break;
    case "osc":
      t=Math.sin(time*0.01);
    break;
    case "osc-inv":
      t=Math.cos(time*0.01);
    break;
  }
    result=(1-(amt*t))*start+(amt*t)*end;
    if(debug){console.log("lerp:",motion,t,result);}
   return result;
}

export function v3Lerp(time,start,end,amt,motion=null,debug=false){
  let result = new THREE.Vector3(0,0,0);

  let t=0;
  switch(motion){
    case null:
      t=time*0.01;
    break;
    case "once":
    if(time<100){
      t=(time)*0.01;
    }
    break;
    case "loop":
      t=(time%100)*0.01; //LOOPING BAYBEYY!!
    break;
    case "osc":
      t=Math.sin(time*0.01);
    break;
    case "osc-inv":
      t=Math.cos(time*0.01);
    break;
  }
result.x=(1-(amt*t))*start.x+(amt*t)*end.x;
result.y=(1-(amt*t))*start.y+(amt*t)*end.y;
result.z=(1-(amt*t))*start.z+(amt*t)*end.z;

  if(debug){console.log("lerp:",motion,t,result);}
 return result;
}

export function map(n, start1, stop1, start2, stop2) {
  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

export function degtorad(degrees) {
  return degrees * (Math.PI / 180);
}
export function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
