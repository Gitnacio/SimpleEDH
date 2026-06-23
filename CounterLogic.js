const subs_button = document.getElementById('subs_life');
const add_button = document.getElementById('add_life');
const subs_Xbutton = document.getElementById('subs_Xlife');
const add_Xbutton = document.getElementById('add_Xlife');
const life_txt = document.getElementById('life_txt');
const reset_btn = document.getElementById('reset_btn');

const cmd_1_btn = document.getElementById('cmd_1_btn');
const cmd_2_btn = document.getElementById('cmd_2_btn');
const cmd_3_btn = document.getElementById('cmd_3_btn');
const cmd_1_mns_btn = document.getElementById('cmd_1_mns_btn');
const cmd_2_mns_btn = document.getElementById('cmd_2_mns_btn');
const cmd_3_mns_btn = document.getElementById('cmd_3_mns_btn');

const btnSett = document.getElementById('btn_sett');
const menuSett = document.getElementById('menu_sett');
const btnCloseSett = document.getElementById('btn_close_sett');
const themeSelect = document.getElementById('theme_select');

let life_count = 40;
let cmd_1_count = 0;
let cmd_2_count = 0;
let cmd_3_count = 0;

let death_color = "rgb(206, 10, 10)";

subs_button.addEventListener('click', function(){
     life_count--;
     life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = death_color;
    }else if(cmd_1_count < 21 && cmd_2_count < 21 && cmd_3_count < 21){
        life_txt.style.color = "";
    }
});

add_button.addEventListener('click', function(){
    life_count++;
    life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = death_color;
    }else if(cmd_1_count < 21 && cmd_2_count < 21 && cmd_3_count < 21){
        life_txt.style.color = "";
    }
});

subs_Xbutton.addEventListener('click', function(){
     life_count-= 10;
     life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = death_color;
    }else if(cmd_1_count < 21 && cmd_2_count < 21 && cmd_3_count < 21){
        life_txt.style.color = "";
    }
});

add_Xbutton.addEventListener('click', function(){
    life_count+= 10;
    life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = death_color;
    }else if(cmd_1_count < 21 && cmd_2_count < 21 && cmd_3_count < 21){
        life_txt.style.color = "";
    }
});

cmd_1_btn.addEventListener('click', function(){
    cmd_1_count++;
    life_count--;
    cmd_1_btn.textContent = cmd_1_count;
    life_txt.textContent = life_count;
    if (cmd_1_count >= 21){
        cmd_1_btn.style.color = death_color;
        life_txt.style.color = death_color;
    }else{
        life_txt.style.color = "";
        cmd_1_btn.style.color = "";
    }

    if (life_count <= 0){
        life_txt.style.color = death_color;
    }
});

cmd_2_btn.addEventListener('click', function(){
    cmd_2_count++;
    life_count--;
    cmd_2_btn.textContent = cmd_2_count;
    life_txt.textContent = life_count;
    if (cmd_2_count >= 21){
        cmd_2_btn.style.color = death_color;
        life_txt.style.color = death_color;
    }else{
        life_txt.style.color = "";
        cmd_2_btn.style.color = "";
    }

    if (life_count <= 0){
        life_txt.style.color = death_color;
    }
});

cmd_3_btn.addEventListener('click', function(){
    cmd_3_count++;
    life_count--;
    cmd_3_btn.textContent = cmd_3_count;
    life_txt.textContent = life_count;
    if (cmd_3_count >= 21){
        cmd_3_btn.style.color = death_color;
        life_txt.style.color = death_color;
    }else{
        life_txt.style.color = "";
        cmd_3_btn.style.color = "";
    }

    if (life_count <= 0){
        life_txt.style.color = death_color;
    }
});

cmd_1_mns_btn.addEventListener('click', function(){
    if (cmd_1_count > 0){
        cmd_1_count--;
        life_count++;
        cmd_1_btn.textContent = cmd_1_count;
        life_txt.textContent = life_count;
        if (cmd_1_count >= 21){
            cmd_1_btn.style.color = death_color;
            life_txt.style.color = death_color;
        }else{
            life_txt.style.color = "";
            cmd_1_btn.style.color = "";
        }

        if (life_count <= 0){
            life_txt.style.color = death_color;
        }
    }
    
});

cmd_2_mns_btn.addEventListener('click', function(){
    if (cmd_2_count > 0){
        cmd_2_count--;
        life_count++;
        cmd_2_btn.textContent = cmd_2_count;
        life_txt.textContent = life_count;
        if (cmd_2_count >= 21){
            cmd_2_btn.style.color = death_color;
            life_txt.style.color = death_color;
        }else{
            life_txt.style.color = "";
            cmd_2_btn.style.color = "";
        }

        if (life_count <= 0){
            life_txt.style.color = death_color;
        }
    }
    
});

cmd_3_mns_btn.addEventListener('click', function(){
    if (cmd_3_count > 0){
        cmd_3_count--;
        life_count++;
        cmd_3_btn.textContent = cmd_3_count;
        life_txt.textContent = life_count;
        if (cmd_3_count >= 21){
            cmd_3_btn.style.color = death_color;
            life_txt.style.color = death_color;
        }else{
            life_txt.style.color = "";
            cmd_3_btn.style.color = "";
        }

        if (life_count <= 0){
            life_txt.style.color = death_color;
        }
    }
});

reset_btn.addEventListener('click', function(){
    life_count = 40;
    cmd_1_count = 0;
    cmd_2_count = 0;
    cmd_3_count = 0;
    life_txt.textContent = "40";
    cmd_1_btn.textContent = cmd_1_count;
    cmd_2_btn.textContent = cmd_2_count;
    cmd_3_btn.textContent = cmd_3_count;
    life_txt.style.color = "";
    cmd_1_btn.style.color = "";
    cmd_2_btn.style.color = "";
    cmd_3_btn.style.color = "";
});

btnSett.addEventListener('click', function(){
    menuSett.showModal();
});

btnCloseSett.addEventListener('click', function(){
    menuSett.close();
});

themeSelect.addEventListener('change', function(){
    document.body.setAttribute('data-theme', themeSelect.value);
});