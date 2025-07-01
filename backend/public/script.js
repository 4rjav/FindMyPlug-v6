// script.js
export function initApp() {
  const findButton = document.getElementById('find');
  if (!findButton) return;

  findButton.addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    try {
      const res = await fetch(`/api/stations?location=${encodeURIComponent(location)}`);
      const stations = await res.json();
      const list = document.getElementById('stations');
      list.innerHTML = '';
      stations.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `${s.name} (lat: ${s.lat}, lng: ${s.lng})`;
        list.appendChild(li);
      });
    } catch (err) {
      console.error('Error fetching stations:', err);
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
