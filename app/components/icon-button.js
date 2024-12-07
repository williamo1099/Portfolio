export default function IconButton({ title, src, href = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={title} className="rounded-lg hover:opacity-75" />
    </a>
  );
}
