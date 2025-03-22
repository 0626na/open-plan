interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  label: string;
}

export function Button({ label, loading, className, ...props }: ButtonProps) {
  return (
    <button
      className={`text-white bg-black w-80 h-16 rounded-xl flex justify-center items-center ${className ?? ""} ${loading && "bg-slate-400"}`}
      disabled={loading ?? false}
      {...props}
    >
      {loading ? (
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      ) : (
        label
      )}
    </button>
  );
}
