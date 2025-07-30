import React from "react";
import "./About.css";

// Replace these imports with your actual file paths
import restaurantImg from "./restaurant.jpg";
import Chef1 from "./Mario and Adrian A.jpg";
import Chef2 from "./Mario and Adrian b.jpg";

const About = () => (
  <main className="about-main" aria-labelledby="about-heading">
    {/* Intro Section */}
    <section className="about-intro">
      <div className="about-intro-text">
        <h1 id="about-heading">About Little Lemon</h1>
        <p>
          Founded by the passionate duo Mario and Adrian, Little Lemon brings authentic Mediterranean cuisine to the heart of Chicago. Our family recipes, fresh ingredients, and vibrant atmosphere make every visit a memorable experience.
        </p>
      </div>
      <div className="about-intro-image" role="img" aria-label="Little Lemon restaurant exterior">
        <img src={restaurantImg} alt="Exterior of Little Lemon restaurant" loading="lazy" />
      </div>
    </section>

    {/* Our Values Section */}
    <section className="about-values" aria-labelledby="about-values-header">
      <h2 id="about-values-header">Our Values</h2>
      <div className="values-content">
        <ul>
          <li>Fresh, locally sourced ingredients</li>
          <li>Warm, welcoming atmosphere for all guests</li>
          <li>Traditional Mediterranean flavors</li>
          <li>Community and sustainability</li>
        </ul>
        <div className="values-img" role="img" aria-label="Mario, founder of Little Lemon">
          <img src={Chef1} alt="Mario, co-founder of Little Lemon" loading="lazy"/>
        </div>
      </div>
    </section>

    {/* Meet Our Chef Section */}
    <section className="about-chef" aria-labelledby="about-chef-header">
      <h2 id="about-chef-header">Meet Our Chef</h2>
      <div className="chef-content">
        <div className="chef-img" role="img" aria-label="Adrian, chef at Little Lemon">
          <img src={Chef2} alt="chef at Little Lemon" loading="lazy"/>
        </div>
        <p>
          Adrian’s culinary vision is at the heart of our kitchen. Bringing flavors inspired by his Mediterranean heritage, he crafts dishes that balance tradition and innovation. Our guests often say Adrian’s meals feel just like home.
        </p>
        <p>
            Mario is a renowned chef with over 20 years of experience in the culinary world. His passion for Mediterranean cuisine shines through in every dish he creates. From classic recipes to modern twists, Mario's expertise ensures that every meal at Little Lemon is a delightful experience.
        </p>
      </div>
    </section>
  </main>
);

export default About;
