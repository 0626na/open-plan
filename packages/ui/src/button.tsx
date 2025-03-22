interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  label: string;
}

export function Button({ label, loading, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white w-80 h-16 rounded-xl mb-10 flex justify-center items-center ${className ?? ""}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}
