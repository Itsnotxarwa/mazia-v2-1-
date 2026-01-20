import { useEffect } from "react";

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
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/mazia?embed=true"
      ></div>
    </section>
  );
}

export default Contact;
