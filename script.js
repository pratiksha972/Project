// to hide all images display one images
const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');
var addednewValue = 0;

let n=0; // it dispaly first images. then n=1 display next /second img

function changeSlide(){
    // to hide all  the images
   for(let i=0;i<imgs.length;i++) 
   {
     imgs[i].style.display='none'; // all images are hide.
   }
   //  n is 0 its display first image
   imgs[n].style.display='block';
}
changeSlide();

// on click on previous btn
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--; // decrease the value of n
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();// update the image also
})
//  click on next  button
next_btn.addEventListener('click',(e)=>{
    debugger
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();

})
const scrollContainer=document.querySelectorAll('.products');
// to display individual element
for(const item of scrollcontainer){
    item.addEventListener('wheel',(evt)=>{
         // remove default featurs
    evt.preventDefault();
    item.scrollLeft+=evt.deltaY;


    } ); 
}
//#region 

function addvalues(){
    // console.log(addednewValue++);
    document.getElementById("cartsCount").textContent = '';
    let p =document.getElementById("cartsCount")
    p.innerText = p.innerText+addednewValue++
//      var paragraph = document.getElementById("cartsCount");
//      paragraph.appendChild(document.createTextNode(''));
// var text = document.createTextNode(addednewValue++);
// // debugger
// paragraph.appendChild(text);
}

//#endregion
   


