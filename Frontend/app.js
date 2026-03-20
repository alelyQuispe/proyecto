async function loadData() {
  try {
    const response = await fetch('http://localhost:8080');
    const data = await response.json();

    document.getElementById('result').innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById('result').innerText =
      "Error conectando al backend ❌";
  }
}