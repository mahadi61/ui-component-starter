type CustomLoadingProps = {
  h?: string;
};

export default function CustomLoading({ h = "h-[100vh]" }: CustomLoadingProps) {
  return (
    <div
      className={`${h} w-full flex flex-col justify-center items-center bg-base-100 space-y-5`}
    >
      <div className="relative">
        {/* Outer ring - slow spin */}
        <div className="w-16 h-16 rounded-full animate-spin border-4 border-base-300 border-l-primary border-t-primary duration-1000" />

        {/* Inner ring - faster spin */}
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full animate-spin border-4 border-base-300 border-r-primary border-b-primary duration-700 opacity-75" />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-medium text-heading">Loading</h2>
        <p className="text-sm text-paragraph">Please wait...</p>
      </div>
    </div>
  );
}
