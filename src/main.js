const données = async () => {
  try {
    const data = await fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=50",
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("erreur de chargement :", error.message);
  }
};

//console.log(await données());

const grid = document.querySelector(".grid") 

const lireData = async () => {
  const resultData = await données()
  const evenements = resultData.results
  grid.innerHTML = "";
  for (let i = 0; i < evenements.length; i++) {
    const events = evenements[i]
    const article = document.createElement("article");
    article.className = "card";
    const img = document.createElement("img");
    img.className = "card-image";
    img.src = events.cover_url
   const section = document.createElement("section");
    section.className = "card-body"
   const b = document.createElement("b")
   b.className = "card-tag-eyebrow"
   const h2 = document.createElement("h2")
   h2.className = "card-title" 
   const footer = document.createElement("footer");
  footer.className = "card-details";
  footer.classList.add("cachee");
  const address = document.createElement("address");
  const bPrix = document.createElement("b");
   bPrix.className = "tag";
   const button = document.createElement("button")
  button.className = "btn-voir-plus"
  button.textContent = " voir plus"
const p = document.createElement("p")
  p.className = "card-lead"
  p.textContent = events.lead_text

   b.textContent = events.qfap_tags
   h2.textContent = events.title
   address.textContent = events.address_name
   bPrix.textContent = events.price_type 

   grid.appendChild(article)
   article.appendChild(img)
   article.appendChild(section)
   section.appendChild(b)
   section.appendChild(h2)
   section.appendChild (footer)
   section.appendChild(bPrix)
   footer.appendChild(address) 
   section.appendChild(button);
   footer.appendChild(p);

   button.addEventListener("click", () => {
  footer.classList.toggle("cachee");
});
};

}; 

   

lireData()
    
  

  


// Mode Sombre/Clair
const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️';
    }
  });