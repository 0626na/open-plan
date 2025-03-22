export default function CardItem({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className ?? ""}>
      <p className="text-sm font-bold text-black">{title}</p>
      <p className="text-black text-opacity-50">{value}</p>
    </div>
  );
}
