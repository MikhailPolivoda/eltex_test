//исключил символы C, P, S и X только верхнего регистра
const alphabet = 'ABDEFGHIJKLMOQRTUVWYZabcdefghijklmnopqrstuvwxyz0123456789+-_$~'
const letters = 'ABDEFGHIJKLMOQRTUVWYZabcdefghijklmnopqrstuvwxyz'
const digits = '0123456789'
const otherSymbols = '+-_$~'

function getRandomString(n) {
    let randomString = ''
    for (i=0; i < n; i++){
        randomString += alphabet[Math.floor(Math.random() * alphabet.length)]    
    }
    return randomString  
}

function replaceLetter (symbol, myLetterString){
    let resultLetterString = ''
    for (i=0; i < myLetterString.length; i++){
        if (letters.indexOf(myLetterString[i]) != -1){
            resultLetterString += symbol
        } else {
            resultLetterString += myLetterString[i]
        }
    }
    return resultLetterString
}

function replaceDigit (symbol, myDigitString){
    let resultDigitString = ''
    for (i=0; i < myDigitString.length; i++){
        if (digits.indexOf(myDigitString[i]) != -1){
            resultDigitString += symbol
        } else {
            resultDigitString += myDigitString[i]
        }
    }
    return resultDigitString
}

function getQualitySybmols (isNotLetter, isNotDigit, allString) {
    let qualityReplacedDigit = 0
    let qualityReplacedLetter = 0
    for (i=0; i < allString.length; i++){
        if (allString[i] == isNotLetter)
            qualityReplacedLetter++
        else if (allString[i] == isNotDigit)
            qualityReplacedDigit++
    }
    return [qualityReplacedLetter, qualityReplacedDigit]
}

function main() {
    const numberSymbols = prompt('Введите число символов в строке')
    const answerRandowString = getRandomString(numberSymbols)
    console.log("Сгенерированная строка: " + answerRandowString)
    const replaceSymbolLetter = prompt('Введите символ на которых хотите заменить буквы')
    const stringWithoutLetter = replaceLetter(replaceSymbolLetter, answerRandowString)
    console.log("Строка с замененными буквами: " + stringWithoutLetter)
    const replaceSymbolDigit = prompt('Введите символ на которых хотите заменить цифры')
    const stringWithoutDigit = replaceDigit(replaceSymbolDigit, stringWithoutLetter)
    console.log("Строка с замененными цифрами: " + stringWithoutDigit)
    const qualitySybmols = getQualitySybmols(replaceSymbolLetter, replaceSymbolDigit, stringWithoutDigit)
    console.log("Количество символов " + replaceSymbolLetter + " " + qualitySybmols[0])
    console.log("Количество символов " + replaceSymbolDigit + " " + qualitySybmols[1])
    console.log("Количество незамененных символов " + (numberSymbols-qualitySybmols[0]-qualitySybmols[1]))
}

main()