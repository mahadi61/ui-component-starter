type ButtonLoadingProps = {
  classNames?: string;
  color?: string;
  size?: string;
};

export default function ButtonLoading({
  classNames = "",
  color = "text-primary",
  size = "loading-sm",
}: ButtonLoadingProps) {
  return (
    <span
      className={`loading loading-spinner ${size} ${classNames} ${color}`}
    />
  );
}
