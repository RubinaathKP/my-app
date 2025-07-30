import React from "react";
import "./Testimonial.css";
// Import your three unique testimonial images from the assets folder
import person1 from "./Person1.jpg";
import person2 from "./Person2.jpg";
import person3 from "./Person3.jpg";

const testimonials = [
  {
    photo:person1,
    name: "Corlos R.",
    review: "Little Lemon blew me away! The staff were so welcoming, the ambiance is bright and cozy, and every Mediterranean dish I tried was full of flavor. Best place for a cheerful dinner out with friends!",
    location: "Chicago, IL",
  },
  {
    photo: person2,
    name: "Sophia M.",
    review: "I love that they use fresh, local ingredients. Their lemon dessert is to die for! This restaurant feels like home—warm, inviting, and consistently delicious.",
    location: "Naperville, IL",
  },
  {
    photo: person3,
    name: "Wong Lee S.",
    review: "Took my family here for our anniversary and the experience was perfect. Adrian even recommended a dish for my daughter! Thank you, Little Lemon!",
    location: "Evanston, IL",
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className="testimonial-title">What Our Guests Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, i) => (
          <article className="testimonial-card" key={item.name}>
            <img
              src={item.photo}
              alt={`Photo of customer ${item.name}`}
              className="testimonial-img"
              width="80"
              height="80"
              loading="lazy"
            />
            <div className="testimonial-content">
              <p className="testimonial-review">"{item.review}"</p>
              <div className="testimonial-meta">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-location">{item.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
