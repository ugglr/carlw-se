import styles from "./Button.module.scss";

type ButtonProps = {
  title: string;
  onClick?: () => any;
};

const Button = ({ title, onClick }: ButtonProps) => (
  <div className={styles.button} onClick={onClick}>
    <p>{title}</p>
  </div>
);

export default Button;
