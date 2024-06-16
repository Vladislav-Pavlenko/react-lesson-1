import style from './Statistics.module.css';
export const StatisticsItem = ({ title, total }) => {
  return (
    <>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
