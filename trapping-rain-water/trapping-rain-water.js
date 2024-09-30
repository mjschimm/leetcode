/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let count = 0; // return value

    // let i; 
    // for (i=0; i<height.length; i++) { // Get to starting point
    //     if (height[i] > 0) {break;}
    // }

    for (let i=0; i<height.length-2; i++) { // find start of each trap
        if (height[i+1] < height[i]) {
            // console.log("i:",i);
            for (let k=i+1; k<height.length; k++) { // find ending of each trap
                
                if (height[k] >= height[i]) { // Water Trap identified
                    // console.log("k:",k);
                    let trapSize = 0;
                    for (let j=i+1; j<k; j++) {
                        // console.log("j:",j);
                        trapSize += (height[i]-height[j]); // Add difference in height
                        count += (height[i]-height[j]);
                    }
                    // console.log("TrapSize:", trapSize);
                    i=k-1;
                    break;
                }
            }
        }
    }
    return count;
};