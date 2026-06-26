class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let mergedString = s
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();

        let left = 0;
        let right  = mergedString.length - 1;

        while(left < right) {
            if(mergedString[left] !== mergedString[right]) {
                return false
            }
            left++;
            right--
        }
        return true
    }
}
