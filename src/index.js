module.exports = function longestConsecutiveLength(array) {
  // your solution here
    if (array.length != 0  && array.length != 1) {
         array.sort( function (a, b) {return a - b} );
         
         var counter = 1; 
         var longestArr = 1;

         for (let i = 0; i < array.length; i++) {

           if (array[i + 1] - array[i] == 1) {
             counter++;
             if (counter !== 1 && counter > longestArr) {
               longestArr = counter;
             }
           } 
           else if (array[i + 1] !== array[i]) {
             counter = 1;
           }
         }
         return longestArr;

    }  else return array.length;
}



    
