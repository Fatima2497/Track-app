export async function POST(activity) {

  const res = await fetch('http://localhost:5000/api/activity/add', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth': ` ${activity.token}`
    },
    body: JSON.stringify(activity.data)
  });
  const data = await res.json();

  return data

  
}