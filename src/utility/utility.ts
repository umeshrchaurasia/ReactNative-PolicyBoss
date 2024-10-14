import { Dimensions } from "react-native";

/**
 *function will convert the give width percentage into density pixels
 * @method wdp
 * @param value number
 * @returns number

 */
 const {width ,height} = Dimensions.get('window');

 const wdp = (value:number):number =>{
    if(typeof value !== "number") return NaN;
    return (value*width)/100;
  }
  
  /**
   *function will convert the given height percentage into density pixels
   * @method hdp
   * @param value number
   * @returns number
   * @author rehan ansari
   * 
   */
  const hdp=(value:number):number=>{
    if(typeof value !== "number") return NaN;
    return (value*height)/100;
  }


  export{
    wdp,
    hdp
  }