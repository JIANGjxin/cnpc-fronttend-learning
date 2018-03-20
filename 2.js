const change = (type,value) =>{
    if (type==="USD"){
        CNY=value*6.33;
     } else if (type==="JPY"){
        CNY=value*0.06;
     } else if (type==="EUR"){
        CNY=value*7.81;
     } else if (type==="RUB"){
        CNY=value*0.11;
     } else if (type==="CHF"){ 
        CNY=value*6.65;
     } 
     return CNY;
}
console.log(change("CHF",100));
