import styles from "./styles.module.css";

interface InputProps {
  value?: string;
  type?: string;
  label?: string;
  setValue?: (param: any) => void;
}

function Input({
  value,
  type = "input",
  label,
  setValue }: InputProps) {

  return (
    <div className={styles.input_container}>
      <input
        className={styles.input}
        type={type}
        required
        onChange={setValue}
      />
      <span className={styles.label}>{label}</span>
    </div>
  )
};

export { Input };
