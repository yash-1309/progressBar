const progressBar = document.querySelector(".progress-bar")

const details = document.querySelector(".details")

const second = document.querySelector(".second-screen")

const btn = document.querySelector("#btn")

let noOfDiv = 0

for(i=0;i<details.childElementCount;i++){
    noOfDiv=noOfDiv+details.children[i].childElementCount
}

let increase = 100/noOfDiv

let progress=0


function checkClass(){
    let details = document.querySelector(".details")

    element=details.childElementCount
    for(i=0; i<element;i++){
        a= details.children[i].childElementCount
        for(j=0;j<a;j++){
            if(details.children[i].children[j].classList.contains("done")){
                progress=progress+1
            }
            
        }
    }
    width=progress*increase
    progressBar.style.width=`${width}%`
    progress=0


}

function select(element){
    
    
    element.parentElement.classList.add("done")
    checkClass()

}

function text(element){
    if(element.value.length>2){
        element.parentElement.classList.add("done")
        checkClass()
    }
    else{
        element.parentElement.classList.remove("done")
        checkClass()
    }
}

function radio(element){
    element.parentElement.parentElement.parentElement.classList.add("done")
    checkClass()

    
}

const change = document.querySelectorAll(".change")

change.forEach((item)=>{
    item.addEventListener("click",()=>{
        // details.style.transform ="translateY(-22rem)"
        details.classList.add("transform")
        btn.classList.add("d-block")
        
    
        
    })
})

const hidden = document.querySelector(".icon")

const box = document.querySelector(".hide-box")

const TempValue =  document.querySelector(".box")



hidden.addEventListener("click",()=>{
    // console.log(box.classList)
    if(box.classList.contains("d-none")){
        box.classList.remove("d-none")
        box.classList.add("d-block")
        hidden.classList.add("rotate")

    }

    else if(box.classList.contains("d-block")){
        box.classList.remove("d-block")
        box.classList.add("d-none")
        hidden.classList.remove("rotate")


        

    }
})

function setValue(value){
    TempValue.children[0].innerHTML=`${value}`
}

function displayNone(){
    box.classList.remove("d-block")
    box.classList.add("d-none")
    hidden.classList.remove("rotate")
}

function textChange(element){
    element.parentElement.parentElement.parentElement.classList.add("done")
    checkClass()
    let value=element.innerHTML
    displayNone()
    setValue(value)
}



const hidden1 = document.querySelector(".icon1")

const box1 = document.querySelector(".hide-box2")

const TempValue1 =  document.querySelector(".box1")



hidden1.addEventListener("click",()=>{
    // console.log(box.classList)
    if(box1.classList.contains("d-none")){
        box1.classList.remove("d-none")
        box1.classList.add("d-block")
        hidden1.classList.add("rotate")

    }

    else if(box1.classList.contains("d-block")){
        box1.classList.remove("d-block")
        box1.classList.add("d-none")
        hidden1.classList.remove("rotate")


        

    }
})

function setValue1(value){
    TempValue1.children[0].innerHTML=`${value}`
}

function displayNone1(){
    box1.classList.remove("d-block")
    box1.classList.add("d-none")
    hidden1.classList.remove("rotate")
}

function textChange2(element){
    element.parentElement.parentElement.parentElement.classList.add("done")
    checkClass()
    let value=element.innerHTML
    displayNone1()
    setValue1(value)
}



btn.addEventListener("click",()=>{
    details.classList.remove("transform")
    btn.classList.add("d-none")
})