export async function POST(request) {
  const res = await fetch('http://localhost:5000/api/user/register',{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  });

  const data = await res.json()
  

  // return Response.json(data)
}