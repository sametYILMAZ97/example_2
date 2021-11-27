const data=[
    {
        id:1,
        productName:"Phone",
        productColour:"Black",
        serialnu:"001",
    },
    {
        id:2,
        productName:"Battery",
        productColour:"Green",
        serialnu:"002",
    },
    {
        id:3,
        productName:"Laptop",
        productColour:"Yellow",
        serialnu:"003",
    },
    {
        id:4,
        productName:"Mouse",
        productColour:"White",
        serialnu:"004",
    },
    {
        id:5,
        productName:"Cable",
        productColour:"Red",
        serialnu:"005",
    }
]
// Tüm Özellikleri HTML tag'ına ekledim.
function getFullName(item) {
    return [item.id, item.productName, item.productColour, item.serialnu, item.price].join(" ");
}

document.getElementById("fullName").innerHTML= data.map(getFullName);

//FIND      001 ile 1 arasında fark olmadı onun için string olarak değiştirdim serial numaraları.
console.log("FIND:")
let find001 = data.find((item)=>{
    return item.serialnu==="001"
})
console.log(find001)

let find2 = data.find((item)=>{
    return item.id===2
})
console.log(find2)

//MAP
console.log("MAP:")
let result1 = data.map(item => {
    return { ...item, price:"None" };
  });
console.log(result1)

//FINDINDEX
console.log("FINDINDEX: 4. indexli yani 5. object.")
let find005 = data.findIndex(item => {
    return item.productColour ==="Red";
});
console.log(find005)

//var resultlist = Object.values(data);
//document.getElementById("result").innerHTML=resultlist;

//DESTRUCTURING

console.log("Destructuring:")
let numbers = [1, 2, 3];
let [num1, num2, num3] = numbers;
document.getElementById("destruct").innerHTML=numbers;
console.log(num1)
console.log(num2)
console.log(num3)

const hero = {
    name: 'Batman',
};
let { name } = hero;
document.getElementById("destruct2").innerHTML=name;
console.log(name)

//SWAP
console.log("Swap: 4 ve 5 yazmalıydı ama swap yaptığım için önce 5.")
let numbers2 = [4, 5];
let [num4, num5] = numbers2;
//console.log(num4)
//console.log(num5)
[num4, num5] = [num5, num4]; // Swap
document.getElementById("numbers2").innerHTML=numbers2;
document.getElementById("num4").innerHTML=num4;
document.getElementById("num5").innerHTML=num5;
console.log(num4)
console.log(num5)

//SPREAD Operator (...)
const workers = ["ali", "veli", "ibo", "sezai"];
const bosses = ["zeyno", "yeter", "tayyibe"];
    const bossesandworkers = [...bosses, ...workers];
console.log("Spread:")
console.log(bossesandworkers)
document.getElementById("workers").innerHTML=workers;
document.getElementById("bosses").innerHTML=bosses;
document.getElementById("bossesandworkers").innerHTML=bossesandworkers;