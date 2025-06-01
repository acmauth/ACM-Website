import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

const filePath = path.resolve('src/lib/data/events.json');

export async function POST({ request }) {
  const newEvent = await request.json();

  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    data.events.push(newEvent);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return json({ success: true, event: newEvent });
  } catch (err) {
    console.error('Σφάλμα:', err);
    return json({ success: false, error: 'Αποτυχία αποθήκευσης' }, { status: 500 });
  }
}
