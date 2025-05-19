import css from "./ImageCard.module.css";

export default function ImageCard({ data, onClick }) {
  return (
    <>
      <img
        src={data.urls.small}
        alt={data.ald_description}
        onClick={onClick}
        className={css.img}
      />
    </>
  );
}
