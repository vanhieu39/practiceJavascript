const sumReduce = numberList => {
    return numberList.reduce((sum, number) => {
        // console.log("so:", sum, number)
        return sum + number
    }, 0)
}
console.log(sumReduce([1, 2, 3, 4, 5]))


const finTheLongesWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0)
        return null
    return wordList.reduce((theLongesWord, currentWord) => {
        // console.log("chuoi:", theLongesWord + ":" + currentWord)
        return theLongesWord.length > currentWord.length ?
            theLongesWord : currentWord
    }, wordList[0])
}
const wordList = ['love', 'easy', 'fontend']

console.log(finTheLongesWord(wordList))

const arrayToObject = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        console.log(item.id)
        itemMap[item.id] = item.value
        return itemMap
    }, {})

}

const itemList = [
    { id: 'key1', value: 'Superman' },
    { id: 'key2', value: 'Wonder Woman' },
    { id: 'key3', value: 'Spider man' }
]
console.log(arrayToObject(itemList))

