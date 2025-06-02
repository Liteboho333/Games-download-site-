const apps = [
  {
    name: "My Android App (v1.0)",
    file: "apps/myapp-v1.apk"
  },
  {
    name: "My Windows Tool (v1.0)",
    file: "apps/myapp-v1.zip"
  }
];

function renderAppList() {
  const list = document.getElementById("app-list");

  apps.forEach(app => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = app.file;
    link.download = "";
    link.textContent = `Download ${app.name}`;
    li.appendChild(link);
    list.appendChild(li);
  });
}

renderAppList();
