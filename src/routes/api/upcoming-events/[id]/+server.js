import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../../../../lib/data/upcomingEvents.json');

function extractArray(parsed) {
  if (Array.isArray(parsed)) {
    return parsed;
  }
  if (parsed?.upcomingEvents && Array.isArray(parsed.upcomingEvents)) {
    return parsed.upcomingEvents;
  }
  return [];
}

export async function DELETE({ params }) {
  const idToDelete = params.id;

  try {
    const fileContents = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(fileContents);
    let eventsArray = extractArray(parsed);

    console.log('[DELETE] JSON array to filter:', eventsArray);
    console.log('[DELETE] Deleting id:', idToDelete);

    const filtered = eventsArray.filter(ev => String(ev.id) !== idToDelete);

    if (filtered.length === eventsArray.length) {
      return new Response(
        JSON.stringify({ message: 'Event not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    let newJson;
    if (Array.isArray(parsed)) {
      newJson = filtered;
    } else {
      newJson = { ...parsed, upcomingEvents: filtered };
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(newJson, null, 2), 'utf-8');

    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('[DELETE] Σφάλμα κατά τη διαγραφή:', err);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}