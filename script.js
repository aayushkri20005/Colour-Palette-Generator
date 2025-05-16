const genart=document.getElementById("generatebtn");
const singlehex=()=>{
const hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
let hexcolo="#";
for(let i=0;i<6;i++){
    let random = Math.floor(Math.random() * hex.length);
    hexcolo+=hex[random];
}
return hexcolo; 
};
const colorpallategena=()=>{
    const colorpallate=[];
    for(let i=0;i<4;i++){
        colorpallate.push(singlehex());
    }
    return colorpallate;
    };
const rendercolor=()=>{
    const colorcontainer=document.querySelector(".colors_container");
    colorcontainer.innerHTML="";
const colorpallate=colorpallategena();
colorpallate.forEach((color,i)=>{
    const colordiv=document.createElement("div");
    colordiv.id=`color${i+1}`;
    colordiv.style.background=color;
    colorcontainer.append(colordiv);
})
console.log({colorpallate});
console.log("btnpressed");
};

genart.addEventListener("click",rendercolor);