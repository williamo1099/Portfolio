interface IconButtonProps {
  title: string;
  src: string;
  href?: string;
}

export default function IconButton({ title, src, href = "" }: IconButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      <img src={src} alt={title} className="rounded-lg hover:opacity-75" />
    </a>
  );
}
