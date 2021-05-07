const slider = document.querySelector("input");
const value = document.querySelector(".value");

value.textContent = slider.value; 

slider.oninput = function(){
value.textContent = this.value;

const comp = document.getElementById("share");
const vis = document.getElementById("visualizacao");
const clique = document.getElementById("cq");

if(this.value == 1){
    vis.textContent = "30";
}else{
    vis.textContent = this.value * 30;
}

/*for(){
    clique.textContent[i] = * 12;
}*/
}
