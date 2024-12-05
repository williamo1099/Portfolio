import Title from "../components/title";
import HighlightedText from "../components/highlighted-text";
import ContactForm from "./components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Title */}
      <Title>
        Contact <HighlightedText>Me</HighlightedText>
      </Title>

      {/* Form */}
      <ContactForm />
    </div>
  );
}
