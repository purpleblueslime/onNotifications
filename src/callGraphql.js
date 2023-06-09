export default async (token, query) => {

  if (!token) 
    throw new Error('SLIME error >,< Access token missing!');

  var url = 'https://graphql.anilist.co/';
  var options = {
    method: 'POST',
    headers: {
      Accept: 'app/json',
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'app/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  var {data, errors} = await (await fetch(url, options)).json(); // native fetch owO
  if (!errors) return data;

  throw new Error(`API error >,< ${errors.pop().message}!`); // (pop errors) and (throw error)
  
}