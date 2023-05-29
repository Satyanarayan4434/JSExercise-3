//1st problem
    let clickBtn = document.getElementById("clickBtn");
    function btnClicked() {
    if (clickBtn.innerText === "click me!") {
        clickBtn.innerText = "clicked";
    } else {
        clickBtn.innerText = "click me!";
    }
    }
//2nd problem
    function myFunction() {
        var element = document.getElementById("cssAdd");
        if(!element.classList.contains('btn-hero')){
            element.classList.add("btn-hero");
        }
        else{
            element.classList.remove('btn-hero');
        }         
    };
//3rd problem
    let box1 = document.getElementById('box1');
    function scrollChange(element, className){
        window.addEventListener("mouseover",()=>{
            if(!element.classList.contains(className)){
                element.classList.add(className);
            }
        });
    }
   scrollChange(box1, "box-1");
//4th problem
function toggleDivDisplayOnClick(myDiv){
    const div = document.getElementById(myDiv);
    if(div.style.display === "none"){
        div.style.display = "block";
    }
    else{
        div.style.display = "none";
    }
}

  
