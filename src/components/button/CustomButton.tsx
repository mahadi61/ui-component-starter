import ButtonLoading from "../loadings/ButtonLoading";

export type ButtonVariant = "outlined" | "filled";
export type ButtonType = "button" | "submit";

interface CustomButtonProps {
  clickHandler: () => void;
  dataAuto: string;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariant;
  htmlType?: ButtonType;
}

const CustomButton = ({
  clickHandler,
  dataAuto,
  text = "Create",
  disabled = false,
  isLoading = false,
  className = "",
  variant = "filled",
  htmlType = "button",
}: CustomButtonProps) => {
  return (
    <button
      type={htmlType}
      data-auto={dataAuto}
      disabled={disabled || isLoading}
      onClick={clickHandler}
      className={`flex justify-center items-center gap-1 font-semibold ${
        isLoading
          ? "bg-gray-400"
          : variant === "outlined"
          ? "bg-base-300"
          : "bg-primary"
      } px-5 py-2 rounded-lg transition-transform active:scale-90 text-base-300 ${className} ${
        variant === "outlined"
          ? "border-2 border-primary bg-base-300 text-primary"
          : ""
      } cursor-pointer`}
    >
      {isLoading ? <ButtonLoading /> : text}
    </button>
  );
};

export default CustomButton;
