import {myArray} from "./07-moduller-data.js"
import x from "./07-moduller-data.js"

const topla = (...sayilar) => {
    return sayilar.reduce((acc, curr) =>{
        console.log(acc+curr);
        return acc + curr;
        
    },0)
};

console.log(topla(...myArray));

console.log(x);