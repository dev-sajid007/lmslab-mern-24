import { cn } from "@/lib/utils";

const LoadingSpinner = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-4",
    lg: "w-10 h-10 border-4",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      className={cn(
        "rounded-full border-t-transparent animate-spin",
        sizeClasses[size],
        className
      )}
    />
  </div>
  );
};

export default LoadingSpinner;
