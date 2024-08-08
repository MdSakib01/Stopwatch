const start_btn=document.getElementById('start-btn');
const stop_btn=document.getElementById('stop-btn');
const reset_btn=document.getElementById('reset-btn');
const mt_disp=document.getElementById('mt');
const sc_disp=document.getElementById('sc');
const ms_disp=document.getElementById('ms');


let interval;
let On_Of=0;

let ms=0;
let sc=0;
let mt=0;

window.addEventListener("load",reset);

function reset(){
    ms=0+'0';
    sc=0+'0';
    mt=0+'0';
    mt_disp.innerText=mt;
    sc_disp.innerText=sc;
    ms_disp.innerText=ms;

}
function start(){

    ms=(ms<10)?'0'+ms:ms;
     mt_disp.innerText=mt;
     sc_disp.innerText=sc;
     ms_disp.innerText=ms;
    ms++;

    if(ms==99){
        ms='0';
        sc++;
        sc=(sc<10)?'0'+sc:sc;
    }
    if(sc==60){
        sc='0';
        mt++;
        mt=(mt<10)?'0'+mt:mt;
    }
}

function stop(){
    clearInterval(interval);
}

start_btn.addEventListener("click",()=>{
    if(On_Of==0){
        On_Of=1;
        interval=setInterval(start,10);
    }
    start_btn.classList.add('dissable-btn');
    stop_btn.classList.remove('dissable-btn');
  

});
stop_btn.addEventListener("click",()=>{
    if(On_Of==1){
        stop();
        On_Of=0;
        start_btn.classList.remove('dissable-btn');
        stop_btn.classList.add('dissable-btn');
    }

});

reset_btn.addEventListener("click",()=>{
    On_Of=0;
    reset();
    stop();
    start_btn.classList.remove('dissable-btn');
    stop_btn.classList.remove('dissable-btn');

});
