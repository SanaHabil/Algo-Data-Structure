const { forwardRef } = require("react");

// Remove Blanks
function removeBlank(str){
    var tempStr = ""
    //console.log(arr)
    for (var i=0;i<= str.length-1; i++){
        if (str[i]!= " "){
            tempStr +=str[i]
        }else{
            continue;
        }
    }
    console.log(tempStr)
}

// str = "sana first function JS  app"
// removeBlank(str)


// Get Digits
function getDigits(str){
    let newNumStr = ''
    for(let char in str){
        if(!isNaN(str[char]) && str[char] != " "){
            newNumStr +=str[char]
        }

    }
    console.log(Number(newNumStr))
}

getDigits("4sa6na 12 tes 0 One")

//Acronyms
function acronyms(str){
    let arrStr=""
    let result = ""
    arrStr = str.split(" ")
    console.log(arrStr)
    for(var i=0; i<= arrStr.length-1; i++){
        result += arrStr[i][0].toUpperCase()
    }
    console.log(result)
}
acronyms("sana Habil First APP")

//Count Non-Spaces
function countNonSpaces(str){
    let count = 0
    for(let char in str){
        if(str[char]!= " "){
            count +=1
        }
    }
    console.log(count)
}

countNonSpaces("sana first app js")

//Remove Shorter Strings
function removeShorterStrings(str,len){
    let result =[];
    for (let word in str){
        if(str[word].length >= len){
            result.push(str[word])
        }
    }
    console.log(result)
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)