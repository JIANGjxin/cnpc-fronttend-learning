let heitao = [];
let hongtao = [];
let fangkuai = [];
let caohua = [];
let j;
for(j=1;j<=13;j++){
    heitao.push(j);
}
for(j=1;j<=13;j++){
    hongtao.push(j);
}
for(j=1;j<=13;j++){
    fangkuai.push(j);
}
for(j=1;j<=13;j++){
    caohua.push(j);
}
let poker=[heitao,hongtao,fangkuai,caohua];
let colour= ['heitao','hongtao','gangkuai','caohua'];
let choose;
let i;
let newcards = [];
do {i=Math.floor(Math.random()*4);
    choose = poker[i];
    newcards.push(`${colour[i]} ${choose.shift()}`);
} while (heitao.length>0&&hongtao.length>0&&fangkuai.length>0&&caohua.length>0);
for(a=0;a<newcards.length;a++){
   console.log(newcards[a]);
}