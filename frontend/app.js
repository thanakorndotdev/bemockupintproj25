const API_BASE = "http://bscit.sit.kmutt.ac.th/intproj25/or4/itb-ecors";

document.getElementById("btnHello").addEventListener("click", async () => {
  const out = document.getElementById("helloOut");
  out.textContent = "Loading...";
  try {
    const r = await fetch(`${API_BASE}/api/v1/hello`, { cache: "no-store" });
    const data = await r.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Error: " + e.message;
  }
});

document.getElementById("btnUsers").addEventListener("click", async () => {
  const ul = document.getElementById("usersList");
  ul.innerHTML = "<li>Loading...</li>";
  try {
    const r = await fetch(`${API_BASE}/api/v1/users`, { cache: "no-store" });
    const users = await r.json();
    ul.innerHTML = "";
    users.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `#${u.id} ${u.name} (${new Date(u.created_at).toLocaleString()})`;
      ul.appendChild(li);
    });
  } catch (e) {
    ul.innerHTML = "<li>Error: " + e.message + "</li>";
  }
});