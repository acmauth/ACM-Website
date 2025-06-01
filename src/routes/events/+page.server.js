import fs from 'fs';
import path from 'path';

export async function load() {
  const filePath = path.join(process.cwd(), 'src/lib/data/events.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);
  const events = data.events;
  return { events };
}
