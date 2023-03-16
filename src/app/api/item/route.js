


export async function POST(request) {

  const res = await fetch('https://super-gold-chimpanzee.cyclic.app/api/auth/login', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth': `${request}`
    },
    body: JSON.stringify(request)
  });
  const data = await res.json();
  
  const d = data.token
  localStorage.setItem('token',d)

  return d

  
}

