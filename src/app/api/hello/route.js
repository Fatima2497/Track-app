export async function POST(request) {
  const res = await fetch('http://localhost:5000/api/user/register',{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  });
  if(res.status == 415){
    alert("User Already Registered")
    return null
  }
  else if(res.status==200){
    alert("Your Account Has Been Registered! Go To Login Page")
    const data = await res.json()
    return null
  }
  else{
    alert("Error Occurred")
  }
}