import emojipedia from "./emojipedia";
// console.log(emojipedia)

let array = emojipedia.map(function (e) {
  return e.meaning.substring(0,100) ;
})

console.log(array)

let newarray = []
emojipedia.forEach((element) => {
  newarray.push(element.meaning.substring(0,100))
})

console.log(newarray)