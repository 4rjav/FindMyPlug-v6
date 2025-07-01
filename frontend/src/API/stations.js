export async function fetchNearestStation(model = '') {
  const res = await fetch(`/api/stations?model=${encodeURIComponent(model)}`);
  if (!res.ok) {
    throw new Error('Failed to fetch station');
  }
  return await res.json();
}
