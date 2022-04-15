import styles from "./Button.module.scss";

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary" | "outlined";
  onClick?: () => any;
};

const Button = ({ title, onClick, variant }: ButtonProps) => (
  <button
    className={[styles.button, variant === "primary" && styles.primary].join(
      " "
    )}
    onClick={onClick}
  >
    <p>{title}</p>
  </button>
);

export default Button;
