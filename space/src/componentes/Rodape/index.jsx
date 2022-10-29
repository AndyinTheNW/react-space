import React from "react";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";


export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>

      

        <a
          href="https://www.facebook.com/instituto.proa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/instituto.proa/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Andy</p>  
      <a
      href="https://github.com/AndyinTheNW"
      target="_blank"
      rel="noreferrer"
      >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="32" width="32"/>
      </a>
          
    </footer>
  );
}
