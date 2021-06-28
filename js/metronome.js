var strokes_csv = "../assets/csv/strokes.csv";
var beatcycle_csv = "../assets/csv/beatcycle.csv";
var strokes ={};
var dict ={};
var style = []; 
var beatCycle = [];
var beatCyclet = [];
var tranenabled = [];

    

$.ajax({

    type: 'GET',

    url: strokes_csv,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("Strokes csv call Failed: ", e);
    },

    success: function (data) {
        
        if(data==undefined){
            console.log(data);
        }

        var jsonData = $.csv.toObjects(data);

        console.log(jsonData);
        var b=0;

        $.each(jsonData, function (index, value) {
            strokes[value['stroke']] = new Audio('assets/audio/'+value['file']);
            dict[strokes[value['stroke']]] = value['onset'];
        });

        $.ajax({

            type: 'GET',
        
            url: beatcycle_csv,
        
            dataType: 'text',
        
            error: function (e) {
                alert('An error occurred while processing API calls');
                console.log("Strokes csv call Failed: ", e);
            },
        
            success: function (data) {
                
                if(data==undefined){
                    console.log(data);
                }
        
                var jsonData1 = $.csv.toObjects(data);
        
                console.log(jsonData1);
                var b=-1;
        
                $.each(jsonData1, function (index, value) {
                    b++;
                    style.push(value["Style"]);
                    var q=2;
                    var temp_beat_cycle =[];
                    var temp_speed =[];
                    while(q<value["Beatcycle"].length){
                        var flag=1;
                        count =0;
                        while(flag==1){
                            flag=0;
                            count++;
                            var tempcyc ="";
                            var temp_beat =[];
                            for(;value["Beatcycle"][q]!=']';q++){
                                if(value["Beatcycle"][q]== ' '){
                                    flag=1;
                                    q++;
                                    break;
                                }
                                tempcyc+= value["Beatcycle"][q];
                            }
                            temp_beat.push(strokes[tempcyc]);
                            temp_beat_cycle.push(temp_beat);
                        }
                        
                        for(y=1;y<=count;y++){
                            temp_speed.push(count);
                        }
                       
                        
                        q=q+2;
                    }
                    beatCyclet.push(temp_speed);
                    beatCycle.push(temp_beat_cycle);
                    
                    /*temp_beat_cycle =[];
                    temp_speed =[];
                    q=2;
                    if(value["Transition Cycle"].length!=0){
                        tranenabled.push(1);
                        if(parseInt(value["Anchor Point"])+parseInt(value["Total No. Of beats in Transition"]<parseInt(value["Total Number of Beats"]))){
                            for(w=0;w<parseInt(value["Anchor Point"])-1;w++){
                                temp_beat_cycle.push(beatCycle[b][w]);

                            }
                            while(q<value["Transition Cycle"].length){
                                var flag=1;
                                count =0;
                                while(flag==1){
                                    flag=0;
                                    count++;
                                    var tempcyc ="";
                                    var temp_beat =[];
                                    for(;value["Transition Cycle"][q]!=']';q++){
                                        if(value["Transition Cycle"][q]== ' '){
                                            flag=1;
                                            q++;
                                            break;
                                        }
                                        tempcyc+= value["Transition Cycle"][q];
                                    }
                                    temp_beat.push(strokes[tempcyc]);
                                    temp_beat_cycle.push(temp_beat);
                                }
                                
                                for(y=1;y<=count;y++){
                                    temp_speed.push(count);
                                }
                                q=q+2;
                            }
                            for(w=parseInt(value["Anchor Point"])+parseInt(value["Total No. Of beats in Transition"]);w<value["Total Number of Beats"];w++){

                            }

                        }
                    }
                    else{
                        tranenabled.push(0);
                    }*/
                    
                });
                console.log(beatCycle);
                


            }
        });

        
    } // end: Ajax success API call

}); // end: of Ajax call

var dha_k = new Audio('assets/audio/dha_k.wav');
var tin = new Audio('assets/audio/tin.wav');
var tin_0 = new Audio('assets/audio/tin.wav');
var dha_m = new Audio('assets/audio/dha_m.wav');
var dha_m0 = new Audio('assets/audio/dha_m.wav');
var dha_m1 = new Audio('assets/audio/dha_m.wav');
var ghe_hard = new Audio('assets/audio/ghe_hard.wav');
var ghe_hard0 = new Audio('assets/audio/ghe_hard.wav');
var ghe_soft = new Audio('assets/audio/ghe_soft.wav');
var ghe_soft0 = new Audio('assets/audio/ghe_soft.wav');
var khi = new Audio('assets/audio/khi.wav');
var khi0 = new Audio('assets/audio/khi.wav');
var khi1 = new Audio('assets/audio/khi.wav');
var na = new Audio('assets/audio/na.wav');
var na0 = new Audio('assets/audio/na.wav');
var na1 = new Audio('assets/audio/na.wav');
var re = new Audio('assets/audio/re.wav');
var re0 = new Audio('assets/audio/re.wav');
var re1 = new Audio('assets/audio/re.wav');
var re2 = new Audio('assets/audio/re.wav');
var re3 = new Audio('assets/audio/re.wav');
var ta = new Audio('assets/audio/ta.wav');
var ta0 = new Audio('assets/audio/ta.wav');
var ta1 = new Audio('assets/audio/ta.wav');
var te = new Audio('assets/audio/te.wav');
var te0 = new Audio('assets/audio/te.wav');
var te1 = new Audio('assets/audio/te.wav');
var te2 = new Audio('assets/audio/te.wav');
var te3 = new Audio('assets/audio/te.wav');
var te4 = new Audio('assets/audio/te.wav');
var pa = new Audio('assets/audio/na.wav');
var blnk = new Audio('assets/audio/blnk.wav');
var blnk0 = new Audio('assets/audio/blnk.wav');

//console.log(beat.length);
var transcyc=[];


//var beatCycle1 = [[tin],[tin_0],[dha_k],[blnk]];
//var beatCycle1t = [1,1,1,1];

//var beatCycle2 = [[tin],[dha_k],[blnk]];
//var beatCycle2t = [1,1,1];

//var beatCycle3 = [[khi],[blnk],[khi0],[na],[dha_m],[ghe_soft],[dha_m0],[ghe_soft0],[dha_m1],[ghe_hard],[blnk],[blnk0],[na0],[te],[te0],[re],[te1],[re0],[na1]];
//var beatCycle3t = [1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1];
var tran3=[[te],[re],[khi],[ta],[dha_m],[te0],[re0],[khi0],[ta0],[dha_m0],[te1],[re1],[khi1],[ta1],[dha_m1],[blnk],[blnk0],[na],[te2],[te3],[re2],[te4],[re3],[na0]];
var tran3a= [2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,1,1,1,1,2,2,2,2,1];


//var beatCycle4 = [[ghe_hard],[blnk],[na],[pa],[blnk],[ghe_hard],[dha_m],[blnk]];
//var beatCycle4t = [1,1,1,1,1,1,1,1];

var trana=[];
var tranat=[];

trana.push(beatCycle[0]);
tranat.push(beatCyclet[0]);
trana.push(beatCycle[1]);
tranat.push(beatCyclet[1]);
trana.push(tran3);
tranat.push(tran3a);
trana.push(beatCycle[3]);
tranat.push(beatCyclet[3]);

console.log(trana);
var cnt=[4,3,16,8];
var mx=7;
var temp=0;



/*var beatCyclet=[];
beatCyclet.push(beatCycle1t);
beatCyclet.push(beatCycle2t);
beatCyclet.push(beatCycle3t);
beatCyclet.push(beatCycle4t);*/

var x=0;
var bpm = 100;
var bpmcurr=bpm;
var bpm_velocity=0;
var flag =0;
var tapbut=0;
var tapcyc=0;
var tapcyc_0=0;
var tp=0;

var audio;
var t;
var playlist=[];
var playlistt=[];
var beat=[];
var i =0;




function bpmvel(){
    bpm_velocity = parseInt(document.getElementById("bpm_velo").value);
}


function sub1(){
    var element = document.getElementById("bpm");
    if(bpm>10)bpm=bpm-1;
    element.innerHTML = bpm + " BPM";  
    
}

function plus1(){
    var element = document.getElementById("bpm");
    if(bpm<300)bpm=bpm+1;
    element.innerHTML = bpm + " BPM"; 
}

function stylechange(){
    x=document.getElementById("style").value;
    if(x==2){
        document.getElementById("tap").value ="Mark Transition 1";
    }
    else{
        taped=0;
        tapbut=0;
        tapcyc=0;
        tapcyc_0=0;
        document.getElementById("tap").value ="No Transition";
    }
   
    console.log(x);
}

function toggle(){
    var q = document.getElementById("start").value;
    if(q=="Start"){
        console.log("s");
        flag =1;
        document.getElementById("start").value = "Stop";
        playing();
    }
    else if(q=="Stop"){
        flag =0;
        document.getElementById("start").value ="Start";
        i=0;
        stopAllAudio();
        clearInterval(t);
        document.getElementById("visualization").innerHTML=" "  ;
        document.getElementById("visual_style").innerHTML=" "  ;
        document.getElementById("visual_bpm").innerHTML=" "  ;
    }

}
audio =[];
var flag1=0;
var temp_bpm =0;
var temp_bpm_velocity =0; 
function addcycle(){

    k=0;
    if(bpm+bpm_velocity<10){
        bpm =10;
    }
    else if(bpm+bpm_velocity>300){
        bpm =300;
    }
    else{
        bpm = bpm+bpm_velocity;
    }
    
    if(flag1==1){
        bpm = temp_bpm;
        bpm_velocity = temp_bpm_velocity;
        if(x==2&&temp_tapbut==2){
            tapcyc =temp_tapcyc;
            document.getElementById("tap").value =tapcyc;
            tapbut =2;
            tp =0;
        }
        else{
            tapbut=0;
            if(x==2)document.getElementById("tap").value ="Mark Transition 1"
            else document.getElementById("tap").value  ="No Transition"
        }
        document.getElementById("bpm_velo").value=bpm_velocity;
        document.getElementById("style").value=x;
        flag1=0;
    }
    mx=cnt[x];
    
    if(x==0)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal (4)" ;
    else if(x==1)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal (3)" ;
    else if(x==2)document.getElementById("visual_style").innerHTML="The Current Playing style is Mridanga (16)" ;
    else if(x==3)document.getElementById("visual_style").innerHTML="The Current Playing style is Mridanga  (8)" ;
    var i =0;
   /* if(tapbut==1){
        tapcyc++;
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc; 
    }*/
    console.log("tp"+ tp);
    if(tapbut==2){
        tp++;
        tp=tp%tapcyc;
        console.log("tp"+ tp);
        if(tapcyc<=1){
            playlist = playlist.concat(trana[x]);
            playlistt= playlistt.concat(tranat[x]);
            return;
        }
        if(tp==0){
            playlist = playlist.concat(trana[x]);
            playlistt= playlistt.concat(tranat[x]);
            console.log(playlist);
            return;
        }
        
        
    }

    
    console.log(tp);
    
    playlist = playlist.concat(beatCycle[x]);
    playlistt=playlistt.concat(beatCyclet[x]);
    
    stopAllAudio();
    
    
    
}

function stopAllAudio(){
    for(q=0; q<audio.length; q++) {
        audio[q].pause();
        audio[q].currentTime=0;
    }
    
}
var k=1;

function playing(){
    
    
    if(playlist.length==0){
        addcycle();
        
    }
    if(tapbut==1){
         tapcyc_0 += 1.0/cnt[x];
         tapcyc = Math.round(tapcyc_0);
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc +' ('+tapcyc_0+')' ; 
    }
    beat=playlist[0];
    console.log(playlist[0]);
    k=playlistt[0];
    playlist.shift();
    playlistt.shift();
    bpmcurr=bpm*k;
    temp+=1/k;
    if(Number.isInteger(temp)){
        document.getElementById("visualization").innerHTML="The Current Playing Beat is " + (temp) ;
        if(temp==mx)temp=0;
    }
    document.getElementById("visual_bpm").innerHTML="The Current Playing Beat is " + (bpm) ;
    clearInterval(t);

    audio[i] = new Audio();
    
    audio[i].volume = 1.0;
    
    audio[i].loop = false;
    audio[i]=beat[0];
    if(beat[0]==blnk || beat[0]==blnk0)audio[i].volume=0.0;
    console.log(k);
    audio[i].play();
    console.log(playlist);
    i++;
    
    loop();

  
     
}


function loop(){
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    console.log(bpm);
    if(playlist.length>0){
        console.log("beat"+beat[0]);
        console.log(playlist[0][0]);
    }
    
    
    if(playlist.length>0) t = setInterval(playing,60.0*1000/(bpmcurr)+1000*dict[beat[0]]-1000*dict[playlist[0][0]]);
    else t = setInterval(playing,60.0*1000/(bpmcurr)-1000*dict[beat[0]]+1000*dict[beatCycle[x][0][0]]);
    console.log(t);
}

function reset(){
    
    
    if(x!=2){
        document.getElementById("tap").value ="No Transition";
    }
    else{
        document.getElementById("tap").value ="Mark Transition 1";
    }
    
    
    taped=0;
    tapbut=0;
    tapcyc=0;
    tapcyc_0=0;
    

}


function tap(){
    if(x==2){
        if(tapbut<2)tapbut++;
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc; 
        if(tapbut==2)document.getElementById("tap").value =tapcyc;
    }
    else{
        document.getElementById("tap").value ="No Transition";
    }
    

}
var nooffav =0;
var fav_style ="";
var favarr =[];
function addtofav(){
        nooffav++;
        var new_element = document.createElement("div");
        new_element.setAttribute('id',"fav"+nooffav)
        new_element.setAttribute('class',"col-12")
        new_element.setAttribute('style',"padding-top:10px;")
        console.log(x);
        if(x==0)fav_style ="Kartaal (4)";
        else if(x==1)fav_style ="Kartaal (3)";
        else if(x==2)fav_style ="Mridanga (16)";
        else if(x==3)fav_style ="Mridanga (8)";
        var temparr = ["fav"+nooffav,x, bpm,bpm_velocity, tapbut, tapcyc];
        favarr.push(temparr);
        temparr =[];
        new_element.innerHTML =  "<div class=container><div class=row><div class=col-5>"+fav_style+"</div><div class=col-2>"+ bpm +"</div><div class=col-3><button onclick= fav_play("+ bpm +','+ x +','+bpm_velocity+','+tapcyc+','+ tapbut +") style=color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Play </button></div><div class=col-2><button onclick= fav_delete(fav"+nooffav+") style =color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Delete </button></div></div></div>" ;
        document.getElementById("fav").appendChild(new_element);
        savefav();
        
    }

    function savefav(){
        document.getElementById("savefav").innerHTML = favarr;
    }

    function showfav(){
        var a = document.getElementById("showfav").value;
        console.log(a.length);
        
        z=0;
        while(z<a.length){
            nooffav++;
            var new_element = document.createElement("div");
            new_element.setAttribute('id',"fav"+nooffav)
            new_element.setAttribute('class',"col-12")
            new_element.setAttribute('style',"padding-top:10px;")
            fav_save_x_s ="";
            fav_save_bpm_s = "";
            fav_save_bpm_velocity_s ="";
            fav_save_tapbut_s="";
            fav_save_tapcyc_s="";
            for(;a[z]!=',';z++){

            }
            z++;
            for(;a[z]!=',';z++){
                fav_save_x_s+=a[z];
            }
            fav_save_x =parseInt(fav_save_x_s);
            console.log(fav_save_x);
            z++;
            for(;a[z]!=',';z++){
                fav_save_bpm_s+=a[z];
            }
            fav_save_bpm = parseInt(fav_save_bpm_s);
            console.log(fav_save_bpm);
            z++;
            for(;a[z]!=',';z++){
                fav_save_bpm_velocity_s +=a[z];
            }
            fav_save_bpm_velocity =parseInt(fav_save_bpm_velocity_s);
            console.log(fav_save_bpm_velocity);
            z++;
            for(;a[z]!=',';z++){
                fav_save_tapbut_s +=a[z];
            }
            fav_save_tapbut = parseInt(fav_save_tapbut_s);
            console.log(fav_save_tapbut);
            z++;
            for(;a[z]!=','&&z!=a.length;z++){
                
                fav_save_tapcyc_s +=a[z];
            }
            fav_save_tapcyc =parseInt(fav_save_tapcyc_s);
            console.log(fav_save_tapcyc);
            z++;
            if(fav_save_x==0)fav_save_style ="Kartaal (4)";
            else if(fav_save_x==1)fav_save_style ="Kartaal (3)";
            else if(fav_save_x==2)fav_save_style ="Mridanga (16)";
            else if(fav_save_x==3)fav_save_style ="Mridanga (8)";
            var temparr = ["fav"+nooffav,fav_save_x, fav_save_bpm,fav_save_bpm_velocity, fav_save_tapbut, fav_save_tapcyc];
            favarr.push(temparr);
            temparr =[];
            new_element.innerHTML =  "<div class=container><div class=row><div class=col-5>"+fav_save_style+"</div><div class=col-2>"+ fav_save_bpm +"</div><div class=col-3><button onclick= fav_play("+ fav_save_bpm +','+ fav_save_x +','+fav_save_bpm_velocity+','+fav_save_tapcyc+','+ fav_save_tapbut +") style=color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Play </button></div><div class=col-2><button onclick= fav_delete(fav"+nooffav+") style =color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Delete </button></div></div></div>" ;
            document.getElementById("fav").appendChild(new_element);
            savefav();
        }
        



    }

    function fav_delete(fav_number){
        console.log(fav_number.id);
        console.log(favarr[0]);
        for(d=0;d<favarr.length;d++){
            if(favarr[d].indexOf(fav_number.id)==0){
                favarr.splice(d,1);
                break;
            }
        }
        savefav();

        fav_number.remove();
    }
    function fav_play(fav_bpm,temp_style,fav_bpm_velocity ,fav_tapcyc,fav_tapbut){
        
        temp_bpm = fav_bpm;
        temp_bpm_velocity = fav_bpm_velocity;
        temp_tapcyc = fav_tapcyc;
        temp_tapbut = fav_tapbut;
        
        x = temp_style;
        
        flag1 =1
    }  

           
            
       
            