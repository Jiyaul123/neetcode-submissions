class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hashMap = {}
        for (let key of s) {
            hashMap[key] = (hashMap[key] || 0) + 1;
        }
        for (let key of t) {
            hashMap[key] = (hashMap[key] || 0) - 1;
        }

        for (let key in hashMap) {
            if (hashMap[key] !== 0) {
                return false
            }
        }

        return true
    }
}
