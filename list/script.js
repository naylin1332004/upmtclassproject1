const components = [
    {
      title: " Sir U Phyo Myat Thu",
      description: "Physics Teacher",
      image: "./tr1.jpg"
    },
    {
      title: "Sir U Thein Myat Thu",
      description: "Chemistry Teacher",
      image: "./tr1.jpg"
    },
    {
      title: "Sir Daw Myat Thu",
      description: "Math Teacher",
      image: "./tr1.jpg"
    },
    {
      title: "Sir U Aung Thu",
      description: "Biology Teacher",
      image: "./tr1.jpg"
    },
    {
      title: "Sir U Thein Myat Thu",
      description: "Physics Teacher",
      image: "./tr1.jpg"
    },
    {
      title: "Sir U Thein Myat Thu",
      description: "Myanmar Teacher",
      image: "./tr1.jpg"
    }
  ];
  
  const gallery = document.getElementById("gallery");
  
  components.forEach(component => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${component.image}" alt="${component.title}" />
      <h3>${component.title}</h3>
      <p>${component.description}</p>
    `;
    gallery.appendChild(card);
  });
  