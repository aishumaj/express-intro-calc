const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */
function convertStrNums(strNums) {
  let nums= strNums.map(num => parseInt(num));

  for(let i = 0; i<nums.length; i++){
    if(isNaN(nums[i])){
      throw new BadRequestError(
        message = `The value ${strNums[i]} is not a number.`
      );
    }
  }

  return nums;
}


module.exports = { convertStrNums };