
export async function PUT(token, id, obj){
  const res = await fetch(`https://super-gold-chimpanzee.cyclic.app/api/activity/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'auth': token
    },

    body: JSON.stringify(obj)
  });
  const data = await res.json();
 
  return data
}
