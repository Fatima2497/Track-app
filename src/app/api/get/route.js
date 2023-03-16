export async function GET(token) {

  const res = await fetch('https://super-gold-chimpanzee.cyclic.app/api/activity/', {
    headers: {
      'Content-Type': 'application/json',
      'auth': token
    },
  });
  const data = await res.json();
  if(res.status == 401){
    alert("No Activity Found")
  }else{
    // alert("Your Activities")
    return data
  }
 

  
}

export async function DELETE(token,id) {
  const res = await fetch(`https://super-gold-chimpanzee.cyclic.app/api/activity/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth': token
    },
  });
  const data = await res.json();
 
  return data
} 