import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        porta quam vitae hendrerit. Donec dictum mauris non eros vehicula, a
        sollicitudin nunc tempus. Nulla leo magna, commodo at elementum at,
        hendrerit non metus. Nunc at felis in ante bibendum porttitor a nec
        metus. Nam placerat ipsum a commodo mollis. Suspendisse in venenatis
        quam. Fusce semper finibus vehicula. Integer venenatis tincidunt purus,
        eget cursus eros efficitur non. Quisque maximus nunc et nibh finibus,
        sed feugiat lectus euismod. Nullam volutpat gravida risus, vitae cursus
        elit ultrices vitae.
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      ></Image>
    </div>
  );
}
