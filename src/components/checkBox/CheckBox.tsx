import styles from "./checkbox.module.scss";
import { CheckBoxProps } from "../../utils/types";

export default function CheckBox({
  label,
  type,
  handleFilterSelect,
  isChecked,
}: CheckBoxProps) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          type="checkbox"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFilterSelect(type, e.target.checked)
          }
          checked={isChecked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
