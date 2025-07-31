const apiUrl = "https://n4hswbm4v6.execute-api.us-east-1.amazonaws.com/prod/data";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#toolTable tbody");
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.user_name}</td>
        <td>${item.user_id}</td>
        <td>${item.toolname}</td>
        <td>${item.tool_id}</td>
        <td>${item.tool_available}</td>
        <td>${item.time}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
