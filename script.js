let hi = document.getElementById("horaInicial");
let mi = document.getElementById("minInicial");
let hf = document.getElementById("horaFinal");
let mf = document.getElementById("minFinal");
let res = document.getElementById("r");
let somaHora = 0;
let somaMinuto = 0;
let subHora = 0

function soma(){
    somaHora = Number(hi.value) + Number(hf.value);
    somaMinuto = Number(mi.value) + Number(mf.value);

    while(somaMinuto>=60){
        somaMinuto-=60;
        somaHora++;
    }

    res.innerHTML = somaHora + ":" + somaMinuto;
}

function sub(){
    let totalMinInicial = Number(hi.value)*60+Number(mi.value);
    let totalMinFinal   = Number(hf.value)*60+Number(mf.value);
    
    let subMin = totalMinInicial - totalMinFinal;
    if(subMin<0){subMin*=-1;}

    while(subMin>=60){
        subMin-=60;
        subHora++;
    }

    res.innerHTML = subHora + ":" + subMin;
}