const arr = [1,"arr","math",[1,2,3,4],"hindi"]
console.log(arr[2])
console.log(arr[3][2])

arr[3][2]= "english"
console.log(arr)

arr.push("science")
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift("social")
console.log(arr)

arr.shift()
console.log(arr)

arr.slice(1,3)
console.log(arr)

arr.splice(1,2,"english","science")
console.log(arr)