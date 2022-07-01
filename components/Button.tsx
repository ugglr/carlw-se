import styles from "./Button.module.scss";

type ButtonProps = {
  title: string;
  variant?: "black" | "purple" | "black-outline";
  onClick?: () => any;
};

const Button = ({ title, onClick, variant }: ButtonProps) => (
  <button
    className={[
      styles.button,
      variant === "black" && styles.black,
      variant === "purple" && styles.purple,
    ].join(" ")}
    onClick={onClick}
  >
    <p>{title}</p>
  </button>
);

export default Button;
