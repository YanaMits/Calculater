//function that display value
function print(val)
{
    if(document.getElementById("display").value==="error"){
        document.getElementById("display").value="";
    }
    document.getElementById("display").value+=val;
}

//function that evaluates the digit and return result
function calculate()
{
    let text = document.getElementById("display").value;
    if(text[0]==="/" || text[0]==="*"){
        document.getElementById("display").value = "error";
        return;
    }
    if("/*+-".includes(text[text.length-1]) ){
        document.getElementById("display").value = "error";
        return;
    }
    if(text.length>1){
        for(let i=1; i<text.length; i++){
            if("/*+-".includes(text[i-1]) && "/*+-".includes(text[i])){
                document.getElementById("display").value = "error";
                return;
            }
        }
    }
    let result = eval(text);
    if(result=="Infinity"){
        result="error";
    }
    document.getElementById("display").value = result;
}

//function that clear the display
function clean()
{
    document.getElementById("display").value = "";
}