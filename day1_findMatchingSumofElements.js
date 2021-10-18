/**
 * GIVEN: A list of numbers and a number k, return whether any two numbers from the list add up to k.

 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

// Bruteforce
/**
    * Traverse through array and add next element .
    * Exit loop when resultant == K.
    * Repeat this for every element till the above condition satisfies
    * Ex : 
            * 10 + 15 = 25 (Not Good , Next)
            * 10 + 3  = 13 (Not Good, Next)
            * 10 + 7  = 17 (Good, Exit) 
    * Best Case : O(n)
    * Worst Case : O(n^2)
 */

// Optimal Solution
/**
    * IMPROVISE LATER 
 */



const findK = (list,k) => {
    if(Array.isArray(list) && list.length > 0 ) {
        for(let i = 0; i < list.length ; i++) {
            for(let j = 0 ; j < list.length; j++) {
                if(list[i] + list[j] === k) {
                    return true;
                }
            }
        }
    }
}

const res = findK([10,15,3,7],22);

console.log(res)