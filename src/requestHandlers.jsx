// export const getStats = async (str) => {
//   return await fetch('http://localhost:5000/stats', {
//     headers: {
//       "Content-Type": "application/json",
//     },
    
//     method: 'POST', 
//     body: JSON.stringify({text: 'test'})}).then(resp => {if(resp.ok) {
//       return resp.json()
//     }}).catch(e => console.log(e))
// }

export const getStats = async (str) => {
  try {
    const response = await fetch('http://localhost:5000/stats', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({ text: str })
    });

    if (!response.ok) {
      return {error: {status: response.status, msg: response.statusText}}
    }

    const data = await response.json();
    return {data: data.word_count};
  } catch (e) {
    console.error('Error fetching stats:', e);
    return null; // Return null or some default value in case of an error
  }
};

export const getRun = async (str) => {
  try {
    const response = await fetch('http://localhost:5000/run', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({ text: str })
    });

    if (!response.ok) {
      return {error: {status: response.status, msg: response.statusText}}
    }

    const data = await response.json();
    return {data: data.result};
  } catch (e) {
    console.error('Error fetching stats:', e);
    return e; // Return null or some default value in case of an error
  }
};

/*
fetch('http://localhost:5000/stats', {
    headers: {
      "Content-Type": "application/json",
    },
    
    method: 'POST', 
    body: JSON.stringify({text: 'test'})}).then(resp => {if(resp.ok) {
      return resp.json()
    }}).then(json => console.log(json)).catch(e => console.log(e))
*/