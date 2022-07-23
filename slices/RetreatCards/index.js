import { PrismicRichText } from "@prismicio/react";
import React from "react";

const RetreatCards = ({ slice }) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <PrismicRichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default RetreatCards;
