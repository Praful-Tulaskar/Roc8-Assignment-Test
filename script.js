function captcha() {

    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
                 var a = alpha[Math.floor(Math.random()*alpha.length)];
                 var b = alpha[Math.floor(Math.random()*alpha.length)];
                 var c = alpha[Math.floor(Math.random()*alpha.length)];
                 var d = alpha[Math.floor(Math.random()*alpha.length)];
                 var e = alpha[Math.floor(Math.random()*alpha.length)];
                 var f = alpha[Math.floor(Math.random()*alpha.length)];

                 var final = a+b+c+d+e+f;
                 document.getElementById("captchaGen").value = final;
               }

function captchaValidation(){

    var str1 = document.getElementById('captchaGen').value;
    var str2 = document.getElementById('captchaInput').value;
    if((str1==str2)){
        alert("Form Succesfully Submit");
        return true;
    }
    else{
        alert("Invalid captcha");
        return captcha();
    }
}
