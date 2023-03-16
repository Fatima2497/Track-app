export async function POST(activity) {

  const res = await fetch('https://super-gold-chimpanzee.cyclic.app/api/activity/add', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth': ` ${activity.token}`
    },
    body: JSON.stringify(activity.data)
  });
  const data = await res.json();

  if(res.status==200){
    alert("Your Activity Has Been Added!")
    const data = await res.json()
    return null
  }
  else{
    alert("Error Occurred")
  }

  
}