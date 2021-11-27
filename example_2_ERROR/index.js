const data=[
    {
        id:1,
        productName:"Phone",
        productColour:"Black",
        serialnu:001,
        fullNameid1: function() {
            return this.id + ", " + this.productName + ", " + this.productColour + ", " + this.serialnu;
        }
    },
    {
        id:2,
        productName:"Battery",
        productColour:"Green",
        serialnu:002,
        fullNameid2: function() {
            return this.id + ", " + this.productName + ", " + this.productColour + ", " + this.serialnu;
        }
    },
    {
        id:3,
        productName:"Laptop",
        productColour:"Yellow",
        serialnu:003,
        fullNameid3: function() {
            return this.id + ", " + this.productName + ", " + this.productColour + ", " + this.serialnu;
        }
    },
    {
        id:4,
        productName:"Mouse",
        productColour:"White",
        serialnu:004,
        fullNameid4: function() {
            return this.id + ", " + this.productName + ", " + this.productColour + ", " + this.serialnu;
        }
    },
    {
        id:5,
        productName:"Cable",
        productColour:"Red",
        serialnu:005,
        fullNameid5: function() {
            return this.id + ", " + this.productName + ", " + this.productColour + ", " + this.serialnu;
        }
    }
]

let result = data.find((item)=>{
    return item.serialnu===001
})


document.getElementById("list").innerHTML = data.fullNameid1() + ", " + data.fullNameid2() + ", " + data.fullNameid3() + ", " + data.fullNameid4() + ", " + data.fullNameid5();