const form = document.getElementById('attendanceForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const registrationNumber = document.getElementById('registrationNumber').value;

  const res = await fetch('http://localhost:3000/api/attendance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, registrationNumber })
  });

  const data = await res.json();
  responseDiv.innerText = data.message || data.error;
});
