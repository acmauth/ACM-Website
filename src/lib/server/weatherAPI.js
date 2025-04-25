export async function getWeather(latitude, longitude) {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude +'&current_weather=true';
    
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
  
    const data = await res.json();

    return data.current_weather;
}
