import { ClipLoader, FadeLoader } from "react-spinners";
import { CSSProperties } from "react";

import css from "./Loader.module.css";

export default function Loader() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <FadeLoader
        color="#36d7b7"
        loading={true}
        speedMultiplier={1}
        height={15}
        width={5}
        radius={2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
