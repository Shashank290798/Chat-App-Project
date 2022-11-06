

function signup(e)
{
    e.preventDefault();

    const signupDetails = {
        name: e.target.name.value, 
        phoneNumber:e.target.phoneNumber.value,
        email: e.target.email.value,
        password: e.target.password.value,

    }

    console.log(signupDetails)
    axios.post("http://localhost:3000/signup",signupDetails)
    .then(result=>{
        alert("signup successfully")
        window.location = "login.html"
        console.log(result)
    })


    .catch(err =>{
        alert(err) 
    })

    e.target.name.value="";
    e.target.phoneNumber.value="";
    e.target.email.value="";
    e.target.password.value="";
}

function login(e)
{
    e.preventDefault()
    const loginDetails = {
        email:e.target.email.value,
        password:e.target.password.value
    }
    console.log(loginDetails)
    axios.post("http://localhost:3000/login",loginDetails)
    .then(response=>{
      
        alert("login successfully")
        window.location = "groupchat.html"
        localStorage.setItem('token' , response.data.token)
        console.log(response.data.token)
 
    })
}