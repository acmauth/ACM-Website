import { getWeather } from '$lib/server/weatherApi.js';

export async function load({ url }) {
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');
  
  if (!lat || !lon) {
    return { weather: null };
  }
  
  const res = await getWeather(lat,lon);
  
  const weather = res;
  return { weather };
}