import React from "react";

const CharityPage = () => (
  <main id="charity-page">
    <article>
      <h1>
        Techbikers is proud to support{" "}
        <a
          href="http://www.roomtoread.org"
          title="Room to Read"
          target="_blank"
          rel="noopener noreferrer"
        >
          Room to Read
        </a>
      </h1>

      <p>
        Room to Read believes that World Change Starts with Educated Children.
        We are an international nonprofit transforming the lives of millions of
        children in low-income countries across Africa and Asia by focusing on
        literacy and gender equality in education. Working in collaboration with
        local communities, partner organisations and governments, we develop
        literacy skills and a habit of reading among primary school children,
        and support girls to complete secondary school with the relevant life
        skills to succeed in school and beyond. In 2015 we reached our goal of
        impacting 10 million children. By 2020 we anticipate reaching 15 million
        children.
      </p>

      <p>
        <iframe
          title="charity"
          width="480"
          height="360"
          src="//www.youtube.com/embed/9yMEIqyR3E8?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      </p>

      <blockquote>
        <p>
          “Literacy unlocks the door to learning throughout life, is essential
          to development and health, and opens the way for democratic
          participation and active citizenship.”
        </p>
        <cite>– Kofi Annan, former United Nations Secretary-General</cite>
      </blockquote>
    </article>
  </main>
);

export default CharityPage;
