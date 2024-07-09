import { useContext } from "react";
import { WarenkorbContext } from "../context/WarenkorbContext";
import NavBar from "../components/NavBar";

export default function Warenkorb() {
  const { warenkorb } = useContext(WarenkorbContext);

  return (
    <>
      <NavBar />
      <div>Warenkorb: {warenkorb.map((item) => item.title)}</div>
    </>
  );
}
