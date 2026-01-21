import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Testez un agent Mazia pour votre entreprise ou projet. <br>Appelez Linda, notre secrétaire virtuelle IA, ou inscrivez-vous pour une démonstration personnalisée." />
      </Helmet>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/mazia?embed=true"
      ></div>
    </section>
  );
}

export default Contact;
