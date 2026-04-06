/**
 * Problem: Isomorphic Strings
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if characters in s can be replaced
 * to get t, with a one-to-one mapping (no two characters map to same character).
 * 
 * Approach:
 * - Use two maps:
 *   1. s → t mapping
 *   2. t → s mapping
 * - Traverse both strings and ensure consistency in mapping
 */

var isIsomorphic = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let mapofStoT = {};
    let mapofTtoS = {};

    for (let i = 0; i < s.length; i++) {

        if (!mapofStoT[s[i]] && mapofTtoS[t[i]]) {
            mapofStoT[s[i]] = t[i];
            mapofTtoS[t[i]] = s[i];
        }

        else if (mapofTtoS[t[i]] !== s[i]) {
            return false;
        }

        else if (mapofStoT[s[i]] !== t[i]) {
            return false;
        }

    }
    return true;
};



console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("ab", "cc"));   // false