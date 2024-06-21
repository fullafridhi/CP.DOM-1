const container= document.getElementById("container")
const boxs = container.getElementsByClassName("box")
const totalPrice= document.getElementById("total")


let total=2000
for(let i=0; i<boxs.length; i++){
    const box = boxs[i]
    const plus =box.getElementsByClassName("plus")[0]
    const minus =box.getElementsByClassName("minus")[0]
    const quantity= box.getElementsByTagName("input")[0]
    const deleteBtn= box.getElementsByClassName("delete-b")[0]
    const price= parseInt(box.getElementsByClassName("price")[0].innerText.substring(1))

 plus.addEventListener("click",()=>{
    quantity.value++
    total+=price;
    totalPrice.innerText= `totalPrice : $${total}`
        
    
})
 minus.addEventListener("click",()=>{
    if(quantity.value>1){
        quantity.value--
            total-=price;
    totalPrice.innerText=`total Price:$${total}`
    }
})
deleteBtn.addEventListener("click" , () =>{
    box.remove()
    total-=price*quantity.value
    totalPrice.innerText=`total Price:$${total}`

})

}


$(".heart.fa").click(function(){
    $(this).toggleClass(" fa-heart fa-heart-o")
})






