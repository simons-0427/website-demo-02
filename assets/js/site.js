(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const progress = document.querySelector(".progress");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const here = (document.body.getAttribute("data-page") || "").toLowerCase();
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    if (a.getAttribute("data-page") === here) a.classList.add("is-active");
  });

  if (!reduced && "IntersectionObserver" in window) {
    document.documentElement.classList.add("anim");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => el.classList.add("is-in"));
    }, 1800);

    const vids = [...document.querySelectorAll("video[data-autopause]")];
    if (vids.length) {
      const vo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const v = e.target;
            if (e.isIntersecting) v.play().catch(() => {});
            else v.pause();
          });
        },
        { threshold: 0.2 }
      );
      vids.forEach((v) => vo.observe(v));
    }
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  const form = document.querySelector("#reserve-form");
  const thanks = document.querySelector("#reserve-thanks");
  if (form && thanks) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      thanks.querySelector("[data-first]").textContent = name.split(" ")[0] || name;
      thanks.querySelector("[data-guests]").textContent = String(data.get("guests") || "");
      thanks.querySelector("[data-date]").textContent = String(data.get("date") || "");
      thanks.querySelector("[data-time]").textContent = String(data.get("time") || "");
      form.hidden = true;
      thanks.hidden = false;
    });
    const reset = thanks.querySelector("[data-reset]");
    if (reset) {
      reset.addEventListener("click", () => {
        form.reset();
        thanks.hidden = true;
        form.hidden = false;
      });
    }
  }

  window.JimmysMenu = {
    mount(root, categoriesEl) {
      const V = { label: "Vegetarisch", tone: "sage" };
      const VG = { label: "Vegan", tone: "gold" };
      const S = { label: "Scharf", tone: "berry" };
      const MENU = [
        { cat: "Salate", items: [
          ["Krautsalat", "4,50 €", "", [VG]],
          ["Gemischter Salat", "4,50 €", "Gurken, Tomaten, Paprika, rote Zwiebeln, Mais, Peperoni", [VG]],
          ["Salat mit Feta", "6,90 €", "gemischter Salat mit Feta", [V]],
          ["Thunfisch Salat", "7,90 €", "gemischter Salat mit Thunfisch"],
          ["Hähnchen Salat", "7,90 €", "gemischter Salat mit Hähnchenstreifen"],
        ]},
        { cat: "Tapas Vegetarian", items: [
          ["Gebratenes Gemüse der Saison", "5,90 €", "", [VG]],
          ["Papas Bravas", "4,50 €", "gebratene Kartoffeln", [VG, S]],
          ["Tortilla de Patata con Aioli", "4,50 €", "spanisches Kartoffel-Omelette", [V]],
          ["Pimientos de Patron", "5,50 €", "", [VG]],
          ["Kanarische Kartoffeln im Salzmantel", "5,50 €", "mit Mojosauce", [VG]],
          ["Feta Häppchen", "4,90 €", "auf Johannesbeersauce", [V]],
          ["Rosmarin Ziegenkäse", "5,40 €", "mit einer Sauce nach Wahl", [V]],
          ["Feta überbacken mit Cherrytomaten", "5,50 €", "Knoblauchöl, Chili, Lauchzwiebeln", [V]],
          ["Überbackene Champignons", "5,50 €", "mit Reis und Pinienkernen auf Roquefortsauce", [V]],
          ["Überbackene Tomaten", "5,50 €", "", [V]],
          ["Champignons al Ajillo", "5,50 €", "Auberginen mit Honig", [V]],
          ["Teigrollen mit Spinat", "4,90 €", "mit Rosinen und Pinienkernen auf Tomaten- und Kräutersauce", [V]],
          ["Feta überbacken mit Feigen und Honig-Senf-Sauce", "5,50 €", "", [V]],
        ]},
        { cat: "Tapas de Carne", items: [
          ["Datiles con Bacon", "5,90 €", "Datteln mit knusprigem Speckmantel"],
          ["Albondigas a la Casera", "6,50 €", "hausgemachte Hackbällchen mit Tomatensauce"],
          ["Pincho de Cerdo", "5,90 €", "Schweinespieß mit scharfer Sauce", [S]],
          ["Pincho de Chorizo", "5,90 €", "spanischer Paprikawurstspieß"],
          ["Chuletas de Cordero", "7,90 €", "2 Lammkoteletts mit Knoblauch und Sauce nach Wahl"],
          ["Rollitos de Serrano con Higo", "7,90 €", "Feigen mit Serranoschinken und Frischkäse"],
          ["Queso de Cabra con Bacon", "5,50 €", "speckumhüllte Ziegenkäsehäppchen mit Balsamicocreme"],
          ["Chorizo al Diablo", "6,50 €", "spanische Paprikawurst in Rotweinsauce", [S]],
          ["Medaillons de Carne", "7,90 €", "Rindermedaillons auf Pilz-Ragoutsauce"],
          ["Gefüllte Champignons", "6,90 €", "gefüllt mit Käse, in Bacon, mit Kräutern und Tomatensauce"],
          ["Champignons de Carne", "7,90 €", "Rindermedaillons in Pfeffersauce"],
          ["Schweinefilet mit Cherrytomaten", "6,90 €", "Lauchzwiebeln, Chili, Mango-Honigsauce"],
          ["Schweinefilet", "6,90 €", "mit Mangold und Pilzen in Crème-fraîche-Sauce"],
          ["Chorizo a la Plancha", "6,50 €", "gegrillte Chorizo"],
          ["Lammfilet", "8,90 €", "mit Pfeffersauce"],
        ]},
        { cat: "Tapas de Pescado", items: [
          ["Boquerones Fritos", "6,50 €", "frittierte Sardellen"],
          ["Calamares a la Plancha", "7,90 €", "gegrillte Calamares mit Knoblauch-Öl"],
          ["Calamares a la Romana", "6,90 €", "frittierte Calamares mit Aioli"],
          ["Salmon con Espinaca", "8,90 €", "Lachsfilet auf Spinat"],
          ["Gambas a la Plancha", "9,90 €", "3 gegrillte Tiger-Garnelen mit Gemüse"],
          ["Scampi-Dattel-Spieß", "7,90 €", "im Speckmantel mit Honig-Senf-Dressing"],
          ["Gambas al Ajillo", "8,90 €", "Garnelen in Knoblauch-Öl"],
          ["Muslitos de Mar", "5,50 €", "Krebsfleischbällchen"],
          ["Gegrillter Oktopus", "9,90 €", "auf Mangold mit Kichererbsen und Gemüse"],
          ["Jacobsmuscheln", "9,90 €", "auf Spinat mit Pinienkernen und Cherrytomaten"],
          ["Zanderfilet", "7,90 €", "mit Rosmarin in Knoblauch-Sahnesauce"],
          ["Gambas Pil Pil", "8,90 €", "in scharfer Tomatensauce", [S]],
          ["Empanadas", "6,50 €", "gefüllte Teigtaschen mit Thunfisch"],
          ["Chipirones", "6,50 €", "frittierte Baby-Calamares mit Aioli"],
        ]},
        { cat: "Griechische Spezialitäten", items: [
          ["Gyros Teller", "11,90 €", ""],
          ["Bifteki", "11,90 €", "gegrilltes Hackfleisch gefüllt mit Feta"],
          ["Schweinespieße", "11,90 €", "2 Stück"],
          ["Lamm Gyros", "13,90 €", "2 Lammkoteletts mit Gyros"],
          ["Hacksteak", "12,90 €", "3 Stück"],
          ["Mix Teller", "11,90 €", "mit Schweinespieß und Gyros"],
          ["Jimmys Teller", "17,90 €", "1 Schweinespieß, Gyros, Bifteki, Pommes frites, Salat, Tzatziki"],
          ["Jimmys Platte, 2 Personen", "34,90 €", "2 Schweinespieße, Gyros, Bifteki, Pommes frites, Salat, Tzatziki"],
          ["Schweinefilet", "14,90 €", "mit Pfefferrahmsauce und Kroketten"],
          ["Hacksteak, überbacken", "13,90 €", "3 Stück, mit Metaxasauce, Ananas und Käse überbacken, ohne Beilagen"],
          ["Croquetas de Bacalau", "5,90 €", "mit Stockfisch und Kroketten"],
          ["Croquetas de Queso", "5,90 €", "mit Schafskäse und Kroketten"],
          ["Croquetas de Almendras", "5,90 €", "mit Mandeln und Kroketten auf Pilzsauce"],
          ["Croquetas de Jamon", "5,90 €", "mit Serranoschinken und Kroketten"],
        ]},
        { cat: "Pizza", items: [
          ["Pizza Curry Gemüse", "9,50 €", ""],
          ["Pizza Margherita", "7,50 €", ""],
          ["Pizza Salami", "8,50 €", ""],
          ["Pizza Schinken", "9,50 €", ""],
          ["Pizza Roma", "9,50 €", "Salami, Schinken, Champignons"],
          ["Pizza Hawaii", "8,50 €", "Schinken, Ananas"],
          ["Pizza Tonno", "9,50 €", "Thunfisch, Zwiebeln"],
          ["Pizza Vegetarisch", "9,50 €", "Mix Gemüse", [V]],
          ["Pizza Gyros", "9,50 €", "Zwiebeln, Peperoni"],
          ["Pizza Meeresfrüchte", "9,50 €", "Thunfisch, Meeresfrüchte, Zwiebeln, Knoblauch"],
          ["Pizza Shrimps", "9,50 €", "Shrimps, Tomaten, Oliven, Knoblauch, Zwiebeln"],
          ["Pizza Mexico", "8,50 €", "Hackfleisch, Peperoni, Mais"],
          ["Pizza Bolognese", "9,50 €", "Hackfleisch, Zwiebeln"],
          ["Pizza Kreta", "9,50 €", "Salami, Schafskäse, Oliven, Peperoni"],
          ["Pizza Mumbay", "9,90 €", "Currysauce, Chicken, Paprika, Zwiebeln"],
          ["Pizza Jimmy", "9,50 €", "Hähnchen, Broccoli, Zwiebeln, Sauce Hollandaise"],
        ]},
        { cat: "Kids Menü", items: [
          ["Chicken Nuggets", "6,90 €", "5 Stück, mit Pommes frites"],
          ["Chicken Wings", "7,90 €", "5 Stück, mit Pommes frites"],
          ["Currywurst", "7,90 €", "mit Pommes frites"],
        ]},
        { cat: "Pasta", items: [
          ["Pasta Mumbay", "10,90 €", "Hähnchenfleisch, Curry, Ananas, Tomaten-Sahnesauce"],
          ["Pasta Bolognese", "8,90 €", "Hackfleisch in Tomatensauce"],
          ["Pasta Carbonara", "8,90 €", "Schinken, Ei, Sahnesauce"],
          ["Pasta de la Casa", "9,90 €", "Schinken, Champignons, Sahnesauce"],
          ["Pasta Salmon", "11,90 €", "Lachs, Broccoli, Sahnesauce"],
          ["Pasta Garnelen", "14,90 €", "Garnelen, Knoblauch, Chili-Sahnesauce"],
          ["Pasta Jimmy", "11,90 €", "Lachs, Spinat, Gorgonzolasauce"],
          ["Pasta Gemüse", "9,90 €", "Saisongemüse, Tomaten-Sahnesauce", [V]],
          ["Pasta Espinach", "9,90 €", "Spinat, Knoblauch, Sahnesauce", [V]],
        ]},
        { cat: "Aufläufe", items: [
          ["Kartoffel-Broccoli Auflauf", "10,90 €", "Kartoffeln, Broccoli, Sahnesauce", [V]],
          ["Gemüse-Auflauf", "9,90 €", "Saisongemüse, Tomaten-Sahnesauce", [V]],
          ["Hähnchen-Nudel Auflauf", "10,90 €", "Broccoli, Sahnesauce"],
          ["Gyros Auflauf", "11,90 €", "Champignons, Sahnesauce"],
        ]},
        { cat: "Tapas de Pollo", items: [
          ["Hähnchenfilet mit Limettensauce", "5,90 €", ""],
          ["Hähnchenfilet mit Brandysauce", "5,90 €", ""],
          ["Hähnchenfilet mit Currysauce", "5,90 €", ""],
          ["Hähnchenfilet mit Mandelsauce", "5,90 €", ""],
          ["Gegrillter Hähnchen-Chorizo-Spieß", "5,90 €", ""],
        ]},
        { cat: "Indische Spezialitäten", items: [
          ["Bengan Alu", "9,90 €", "scharfe Tomatensauce, Aubergine, Kartoffeln", [VG, S]],
          ["Jimmys Spezial", "10,90 €", "Saisongemüse in Curry-Kokossauce", [VG]],
          ["Bengan Paneer", "10,90 €", "Auberginen mit indischem Käse in scharfer Tomatensauce", [V, S]],
          ["Vegetarisches Korma", "10,90 €", "Gemüse, Cashewnüsse, Kormasauce", [V]],
          ["Palak Paneer", "10,90 €", "Spinat, indischer Käse, scharfe Tomatensauce", [V, S]],
          ["Garnelen Tawa Masala", "15,90 €", "scharfe Tomatensauce", [S]],
          ["Garnelen Malai Jundi", "15,90 €", "Cashew-Creme-Sauce", [S]],
          ["Butter Chicken", "12,90 €", "Hähnchenfilet, Butter-Tomaten-Sahnesauce"],
          ["Chicken Mango", "11,90 €", "Hähnchenfilet, Mango, Zwiebeln, Sahnesauce"],
          ["Chicken Vindaloo", "11,90 €", "Hähnchenfilet, Kartoffel, Currysauce"],
          ["Chicken Malai Jundi", "13,90 €", "Hähnchenfilet, Cashewnuss-Creme-Sauce"],
          ["Chicken Korma", "11,90 €", "Hähnchenfilet, Kormasauce"],
          ["Chicken Jalfrezi", "11,90 €", "Hähnchenfilet, Paprika, Knoblauch, Zwiebeln, Tomatensauce"],
          ["Lamm Sekh Kebab", "13,90 €", "mit Salat"],
          ["Gegrilltes Lammfilet", "16,90 €", "Kräuterbutter, Tzatziki, Salat"],
        ]},
        { cat: "Alkoholfreie Getränke", items: [
          ["Coca-Cola 1,0l", "3,50 €", ""],
          ["Coca-Cola Zero Sugar 1,0l", "3,50 €", ""],
          ["Coca-Cola light taste 1,0l", "3,50 €", ""],
          ["Mezzo Mix 1,0l", "3,50 €", ""],
          ["Stilles Wasser 1,0l", "3,00 €", ""],
          ["Wasser mit Kohlensäure 1,0l", "3,00 €", ""],
          ["Lübzer alkoholfrei 0,3l", "2,60 €", ""],
        ]},
        { cat: "Alkoholische Getränke", items: [
          ["Lübzer Bier 0,3l", "2,60 €", ""],
          ["Carlsberg Bier 0,33l", "2,60 €", ""],
          ["Becks Bier 0,33l", "2,60 €", ""],
          ["San Miguel Bier 0,33l", "3,00 €", ""],
          ["Estrella Galicia Bier 0,33l", "2,60 €", ""],
          ["Spanischer Rotwein 0,7l", "19,90 €", ""],
          ["Rioja Rotwein 0,7l", "19,90 €", ""],
          ["Tempranillo Rotwein 0,7l", "19,90 €", ""],
          ["Merlot Rotwein 0,7l", "19,90 €", ""],
          ["Shiraz Rotwein 0,7l", "19,90 €", ""],
          ["Weißburgunder Weißwein 0,7l", "19,90 €", ""],
          ["Rioja Weißwein 0,7l", "19,90 €", ""],
          ["Chardonnay Weißwein 0,7l", "19,90 €", ""],
          ["Sauvignon Blanc Weißwein 0,7l", "19,90 €", ""],
        ]},
      ];

      let active = MENU[0].cat;

      const renderCats = () => {
        categoriesEl.innerHTML = MENU.map((m) => (
          `<button type="button" class="filter-btn${m.cat === active ? " is-on" : ""}" data-cat="${m.cat}">${m.cat}</button>`
        )).join("");
        categoriesEl.querySelectorAll("button").forEach((btn) => {
          btn.addEventListener("click", () => {
            active = btn.getAttribute("data-cat");
            renderCats();
            renderDishes();
          });
        });
      };

      const renderDishes = () => {
        const current = MENU.find((m) => m.cat === active) || MENU[0];
        root.innerHTML = current.items.map(([name, price, description, badges], i) => {
          const tags = (badges || []).map((b) => `<span class="badge badge-${b.tone}">${b.label}</span>`).join("");
          return `<article class="dish" style="animation-delay:${Math.min(i, 10) * 40}ms">
            <div class="dish-top"><h3>${name}</h3><span class="price">${price}</span></div>
            ${description ? `<p>${description}</p>` : ""}
            ${tags ? `<div class="badges">${tags}</div>` : ""}
          </article>`;
        }).join("");
      };

      renderCats();
      renderDishes();
    },
  };
})();
