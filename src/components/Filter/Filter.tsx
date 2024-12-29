import styles from "./filter.module.scss";
import close from "../../assets/images/Close.svg";
import { POKEMON_TYPES } from "../../utils/constants";
import { checkMark, FilterProps } from "../../utils/types";
import CheckBox from "../checkBox/CheckBox";

export default function Filter({
  toggleShowFilter,
  setFilterSelected,
  handleFilterApply,
  checkedStates,
  resetFilterSelect,
  setCheckedStates,
}: FilterProps & {
  checkedStates: checkMark;
  setCheckedStates: React.Dispatch<React.SetStateAction<checkMark>>;
}) {

  const handleFilterSelect = (filter: string, isChecked: boolean) => {
    setCheckedStates((prev) => ({
      ...prev,
      [filter]: isChecked,
    }));

    if (isChecked) {
      setFilterSelected((prev) => [...prev, filter]);
    } else {
      setFilterSelected((prev) => prev.filter((item) => item !== filter));
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__header}>
        <h2 className="body-2">Filter</h2>
        <button onClick={toggleShowFilter}>
          <img src={close} alt="close" />
        </button>
      </div>
      <small className="subtext-2">Type</small>
      <div className={styles.filter__types}>
        {POKEMON_TYPES.map((type) => (
          <CheckBox
            key={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
            type={type}
            handleFilterSelect={handleFilterSelect}
            isChecked={checkedStates[type]}
          />
        ))}
      </div>

      <div className={styles.filter__buttons}>
        <button
          className={`${styles.filter__button} btn`}
          onClick={resetFilterSelect}
        >
          Reset Filters
        </button>

        <button
          className={`${styles.filter__button} ${styles["filter__button--filter"]} btn`}
          onClick={handleFilterApply}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
