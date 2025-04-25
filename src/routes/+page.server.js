import { getWeather } from '$lib/server/weatherApi.js';


// load() is a framework's native function that runs whenever
// +page.svelte is visited in the browser.
export async function load() {
    const weather = await getWeather(40.6401, 22.9444);
    return { weather};
}
