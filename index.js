//1st problem
    // let clickBtn = document.getElementById("clickBtn");
    // function btnClicked() {
    // if (clickBtn.innerText === "click me!") {
    //     clickBtn.innerText = "clicked";
    // } else {
    //     clickBtn.innerText = "click me!";
    // }
    // }
//2nd problem
    // function myFunction() {
    //     var element = document.getElementById("cssAdd");
    //     if(!element.classList.contains('btn-hero')){
    //         element.classList.add("btn-hero");
    //     }
    //     else{
    //         element.classList.remove('btn-hero');
    //     }         
    // };
//3rd problem
    // let box1 = document.getElementById('box1');
    // function scrollChange(element, className){
    //     window.addEventListener("mouseover",()=>{
    //         if(!element.classList.contains(className)){
    //             element.classList.add(className);
    //         }
    //         else{
    //             element.classList.remove(className);
    //         }
    //     });
    // }
    //scrollChange(box1, "box-1");
//4th problem
    // function toggleDivDisplayOnClick(myDiv){
    //     const div = document.getElementById(myDiv);
    //     if(div.style.display === "none"){
    //         div.style.display = "block";
    //     }
    //     else{
    //         div.style.display = "none";
    //     }
    // }
//5th problem
    // let form = document.getElementById('form');
    // let formValue = form.target;
    // let isValid = true;
    // let submitBtn = document.getElementById('submitBtn');

    // form.addEventListener("submit",(event)=>{
    //     event.preventDefault();
    //     let username = document.getElementById("username").value;
    //     let email = document.getElementById("email").value;

    //     if(username === "" && email === ""){
    //         submitBtn.innerText = "Not submitted";
    //     }
    //     else{
    //         submitBtn.innerText = "succesfully Submited";
    //     }
        
    // })
//6th problem
    // function fetchData(url, callback) {
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(data => callback(null, data))
    //       .catch(error => callback(error, null));
    //   }
      

    //   fetchData('https://api.cricapi.com/v1/currentMatches?apikey=67fd01a2-3540-4369-b0a0-4f4d1c079e90&offset=0', (error, data) => {
    //     if (error) {
    //       console.error(error);
    //     } else {
    //       console.log(data);
    //     }
    //   });
//9th problem 
    // function simulateDelay(callback, delay){
    //     setTimeout(callback,delay);
    // }
    // simulateDelay(()=>{
    //     console.log("2nd para");
    // },2000);

    // console.log("1st para");