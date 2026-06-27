class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeToOpen = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        for (let c of s) {

            /// check character is closing tag
            if(closeToOpen[c]) {

                //check last stack value is same as hashmap closing return value
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
