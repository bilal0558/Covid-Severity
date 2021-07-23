var resRate,o2Level,o2Flow,qCSI=0;
var riskLevel="";

function sliderCompute(){
    qCSI=0;
    //Getting values from the sliders.
    resRate = document.getElementById('res-rate').value;
    o2Level = document.getElementById('o2-level').value;
    o2Flow = document.getElementById('o2-flow').value;
    compute();
}

function textValueCompute(){
    qCSI=0;
    //Getting values from the sliders.
    resRate = document.getElementById('res-rate-val').value;
    o2Level = document.getElementById('o2-level-val').value;
    o2Flow = document.getElementById('o2-flow-val').value;
    compute();
}


function compute(){
    //Computing qCSI value from the inputed values.
    //Respiratory rate.
    if((resRate >=23)&&(resRate <=28)){
        qCSI=qCSI+1;
    }
    else if(resRate >=28){
        qCSI=qCSI+2;
    }

    //o2 level.
    if((o2Level >=89)&&(o2Level <=92)){
        qCSI=qCSI+2;
    }
    else if(o2Level <=88){
        qCSI=qCSI+5;
    }

    //o2 flow.
    if((o2Flow >=3)&&(o2Flow <=4)){
        qCSI=qCSI+4;
    }
    else if(o2Flow >=5){
        qCSI=qCSI+5;
    }
    
    //Function calling.
    computeRiskLevel();
    setValues();
}

function setValues(){
    //Setting values of all the fields.
    document.getElementById('res-rate-val').value=resRate;
    document.getElementById('o2-level-val').value=o2Level;
    document.getElementById('o2-flow-val').value=o2Flow;

    document.getElementById('qCSI').value=qCSI;
    document.getElementById('risk-level').value=riskLevel;

    if(riskLevel=="Low"){
        document.getElementById('risk-level').setAttribute('style',`background : rgb(0,255,0);`);
    }
    else if(riskLevel=="Moderate"){
        document.getElementById('risk-level').setAttribute('style',`background : rgb(255,255,0);`);
    }
    else{
        document.getElementById('risk-level').setAttribute('style',`background : rgb(255,0,0);`);
    }
}

function computeRiskLevel(){
    //Setting risk level from the computed qCSI.
    if(qCSI<=5){
        riskLevel="Low";
    }
    else if(qCSI<=9){
        riskLevel="Moderate";
    }
    else{
        riskLevel="High";
    }
}