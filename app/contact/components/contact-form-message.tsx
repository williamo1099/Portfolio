interface ContactFormMessageProps {
  success: boolean;
  failed: boolean;
}

export default function ContactFormMessage({
  success,
  failed,
}: ContactFormMessageProps) {
  return (
    <div className="mt-3 text-sm font-medium">
      {success && (
        <span className="text-success">
          Message sent successfully! I will respond ASAP.
        </span>
      )}
      {failed && (
        <span className="text-error">
          Failed to send message. Please try again.
        </span>
      )}
    </div>
  );
}
