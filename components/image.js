import Image from "next/image";
export default function Img({ s, a, w, h }) {

    return (
      <>
        <img
          src={s}
          width={w ?? "100%"}
          height={h ?? "100%"}
          alt={a ?? ""}
        />
      </>
    );
}