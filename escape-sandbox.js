let cookie = document.cookie;
let storage = { ...localStorage };

document.write(`<h1>Cookie:</h1><pre>${cookie}</pre>`);
document.write(
  `<h1>LocalStorage:</h1><pre>${JSON.stringify(storage, null, 2)}</pre>`
);

let preferencesURL = "https://api.vimeo.com/me/preferences?fields=tves,dai";
async function fetchPreferences() {
  const response = await fetch(preferencesURL);
  if (response.ok) {
    const data = await response.json();
    document.getElemetsByClassName(
      "HTML"
    )[0].innerHTML += `<h1>User Preferences:</h1><pre>${JSON.stringify(
      data,
      null,
      2
    )}</pre>`;
  } else {
    const error = await response.text();
    document.getElemetsByClassName(
      "HTML"
    )[0].innerHTML += `<h1>Error fetching preferences</h1><pre>${response.status} ${response.statusText} ${error}</pre>`;
  }
}

fetchPreferences();
