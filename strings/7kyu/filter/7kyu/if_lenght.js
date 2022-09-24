// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// have to find if the string contains a sub string of the ending 
// have to find the lenght of the ending 
// then you need to match the ending of the the substring == to the string 

function solution(str, ending){
    if (typeof str != 'string' || typeof ending != 'string'){
        return false
    } else if (str =='' || ending ==""){
        return true
    } else{
        let results
        for( let i = ending.length; i > 0; i--){
            if(str[str.length - i] == ending[ending.length - i]){
                result = true
            }else{
                result = false
                break
            }
        }
        return result
    }
  }