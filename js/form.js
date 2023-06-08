
// Property For Body 
document.body.style.cssText = `font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;padding: 0;margin: 0;box-sizing: border-box;` ;



// For Create Main Element 
let main  = document.createElement("div") ; 
main.classList.add("main") ; 
main.style.cssText = "height:100vh; background-color:#f0f2f5;padding-top:40px"



// For Create Container 
let container = document.createElement("div") 
container.style.cssText = "width:400px;margin :0 auto;" ;
main.append(container)



// For Create Title Facebook
let topTitle = document.createElement("h2") ;
topTitle.style.cssText = "color:#0075FF;font-size:50px;text-align:center;margin-bottom:20px" ;
let topTileText = document.createTextNode("facebook")
topTitle.append(topTileText) ;
container.append(topTitle)


// For Create Form 
let form  = document.createElement("form" ) ; 
form.style.cssText = "text-align: center;background-color: white;width: 400px;height: 400px;padding: 20px;" ;
container.append(form)


// For Create Title Inside Form 
let subTitle = document.createElement("div")
subTitle.style.cssText = "font-size: 19px;margin-bottom: 24px;" ;
let subTitleText = document.createTextNode("Log in to Facebook" ) ;
subTitle.append(subTitleText) ; 
form.append(subTitle) ; 


// For Create Email input
let emailInput = document.createElement("input" );
emailInput.setAttribute("placeholder" , "Email address or phone number")
emailInput.setAttribute("required" ,"") ;
emailInput.style.cssText = `
display: block;
height: 50px;
background-color: none;
border: 1px solid #EEE;
width: 100%;
border-radius: 6px;
margin-bottom: 20px;
padding: 10px 20px;
font-size: 16px;
`
form.append(emailInput) ;


// For Create Email input
let passwordInput = document.createElement("input" );
passwordInput.setAttribute("placeholder" , "Password") ;
passwordInput.setAttribute("type" , "password") ;
passwordInput.setAttribute("required" ,"") ;
passwordInput.style.cssText = `
display: block;
height: 50px;
background-color: none;
border: 1px solid #EEE;
width: 100%;
border-radius: 6px;
margin-bottom: 20px;
padding: 10px 20px;
font-size: 16px;
`
form.append(passwordInput) ;


// For Create Button 
let loginButton = document.createElement("button") ; 
loginButton.innerText = "log in" ;
loginButton.classList.add("login")
loginButton.style.cssText = `
display: block;
    background-color: #0075FF;
    color: white;
    font-weight: bold;
    padding: 15px 0 ;
    border: none;
    font-size: 18px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
`
form.append(loginButton)


//For Forget Password
let forgetPasswordButton = document.createElement("a") ; 
forgetPasswordButton.style.cssText = `
    color: #0075FF; 
    display: block ;
    text-align: center;
    margin: 20px 0 ;
    transition: .4s;
    text-decoration: none;
    cursor :pointer;
` 
let forgetPasswordButtonText = document.createTextNode("forgeteen account ?") ; 
forgetPasswordButton.append(forgetPasswordButtonText)
form.append(forgetPasswordButton)


// For Create Signup Button
let singupButton = document.createElement("button") ; 
singupButton.innerText = "Create new account" ;
singupButton.style.cssText = `
display: block;
    background-color: #42b72a;
    color: white;
    font-weight: bold;
    padding: 15px 2px ;
    border: none;
    font-size: 16px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    width: 50%;
    margin:0 auto;
`
form.append(singupButton)



// For Add All To Body   
document.body.append(main)  