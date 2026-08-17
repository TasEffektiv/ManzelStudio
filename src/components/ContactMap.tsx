export default function ContactMap({ embedUrl }: { embedUrl: string }) {
  return (
    <section className="w-full">
      <iframe
        src={embedUrl}
        width="100%"
        height="650"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manzel Studio location"
      />
    </section>
  );
}
