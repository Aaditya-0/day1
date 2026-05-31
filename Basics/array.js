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


// waf to find max number in array 
// waf to find min number in array
// waf to find sum of all number in array
// waf to find factorial of a n
// waf to sort an array in ascending order
// waf to sort an array in descending order


function max(arr){
    let max = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

function min(arr){
    let min = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}   

function sum(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function factorial(n){
    let fact = 1
    for(let i=1;i<=n;i++){
        fact *= i
    }
    return fact
}

function sortAsc(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}   

function sortDesc(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}