class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}

        for (let s of strs) {
            let sortedString = s.split('').sort().join('');
            

            if(!hashMap[sortedString]) {
                hashMap[sortedString] = []
            }

            hashMap[sortedString].push(s);
        }

        return Object.values(hashMap)
    }
}
