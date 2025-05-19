import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ data, onClick }) {
  return (
    <ul className={css.list}>
      {data.map((data) => (
        <li key={data.id} className={css.item}>
          <ImageCard
            data={data}
            onClick={() => {
              onClick(data.urls.full, data.alt_description);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
