import { InfoLoading } from "./loading";

export default function CardItem({
  title,
  value,
  className,
  loading,
}: {
  title: string;
  value: string;
  className?: string;
  loading: boolean;
}) {
  return (
    <div className={className ?? ""}>
      <p className="text-sm font-bold text-black">{title}</p>
      {loading ? (
        <InfoLoading />
      ) : (
        <p className="text-black text-opacity-50">{value}</p>
      )}
    </div>
  );
}
