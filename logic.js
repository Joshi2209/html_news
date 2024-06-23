fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F"
)
  .then((response) => response.json())
  .then((data) => {
    const newList = document.getElementById("newlist");
    data.items.forEach((item) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      h2.textContent = item.title;
      a.textContent = "readmore";
      a.href = item.link;
      a.target = item.link;
      li.appendChild(h2);

      li.appendChild(document.createTextNode(item.description));
      li.appendChild(a);
      newList.appendChild(li);
    });
  });
