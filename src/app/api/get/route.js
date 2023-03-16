export async function GET(token) {

  const res = await fetch('http://localhost:5000/api/activity/', {
    headers: {
      'Content-Type': 'application/json',
      'auth': token
    },
  });
  const data = await res.json();
 
  return data

  
}

export async function DELETE(token,id) {
  const res = await fetch(`http://localhost:5000/api/activity/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth': token
    },
  });
  const data = await res.json();
 
  return data
} 