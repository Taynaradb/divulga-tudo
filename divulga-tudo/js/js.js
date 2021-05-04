const slider = document.querySelector("input");
const value = document.querySelector(".value");
const vis = document.getElementById("visualizacao");

value.textContent = slider.value; 

slider.oninput = function(){
value.textContent = this.value;

}

if(slider.value === "20"){
    vis.textContent = "30";
}else{
    vis.textContent = "120";
}


