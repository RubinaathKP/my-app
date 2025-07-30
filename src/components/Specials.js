import React from "react";
import "./Specials.css";
import greekSalad from "./greek salad.jpg";     // Replace with your actual image paths
import bruschetta from "./bruchetta.svg";
import lemonDessert from "./lemon dessert.jpg";

const specialsData = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "A fresh, crisp salad with tomatoes, cucumbers, olives, feta cheese, and our signature lemon vinaigrette.",
    image: greekSalad,
    alt: "Greek Salad plate with feta and olives"
  },
  {
    title: "Bruschetta",
    price: "$8.99",
    description: "Grilled bread topped with garlic, ripe tomatoes, olive oil, and basil. A classic Mediterranean starter.",
    image: bruschetta,
    alt: "Bruschetta on toasted bread with tomatoes and basil"
  },
  {
    title: "Lemon Dessert",
    price: "$6.49",
    description: "A light, tangy lemon dessert with whipped cream and toasted coconut. The perfect way to finish your meal!",
    image: lemonDessert,
    alt: "Lemon dessert with whipped cream and coconut"
  }
];

const Specials = () => {
  return (
    <section className="specials-section" aria-labelledby="specials-heading">
      <h2 id="specials-heading" className="specials-title">This Week's Specials!</h2>
      <div className="specials-grid">
        {specialsData.map((item, idx) => (
          <article className="special-card" key={item.title}>
            <img
              src={item.image}
              alt={item.alt}
              className="special-image"
              loading="lazy"
              width={320}
              height={210}
            />
            <div className="special-card-content">
              <header className="special-card-header">
                <h3>{item.title}</h3>
                <span className="special-price">{item.price}</span>
              </header>
              <p className="special-desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
