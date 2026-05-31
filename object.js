function add(a, b){
    return a + b
}

const aditya = {
    name: "Aditya",
    age: 18,
    class: 12,
    marks: { math: 90, science: 95, english: 85 },
    points: [10, 20, 30, 40],
    add: add
}

console.log(aditya.name)
console.log(aditya.marks.math)
console.log(aditya.points[2])
console.log(aditya.add(5, 10))