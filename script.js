let input=document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let Ans ="";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            Ans = eval(Ans);
            input.value = Ans;
        }
        else if(e.target.innerHTML=='AC'){
            Ans = "";
            input.value=Ans;
        }
        else if(e.target.innerHTML=='DEL'){
            Ans = Ans.substring(0,Ans.length-1);
            input.value = Ans;
        }
        else{
            Ans += e.target.innerHTML;
            input.value = Ans;
        }
    })
})