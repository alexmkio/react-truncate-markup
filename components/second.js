import { useState } from "react";
import TruncateMarkup from "react-truncate-markup";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Second() {
  const [shouldTruncate, setShouldTruncate] = useState(true);

  const toggleTruncate = () => {
    setShouldTruncate(!shouldTruncate);
  };

  let items = [];

  for (let i = 1; i < 21; i++) {
    items = [...items, `item ${i}`];
  }

  const TruncatedList = () => {
    const usersLeftEllipsis = (node) => {
      const itemsRendered = node.props.children;

      if (itemsRendered[1]) {
        return (
          <span onClick={toggleTruncate}>
            {`${items.length - itemsRendered[1].length} More`}
          </span>
        );
      }
    };

    return (
      <TruncateMarkup lines={1} ellipsis={usersLeftEllipsis}>
        <section className={styles.buttonContainer}>
          <Link href="/" className={styles.button}>
            One off
          </Link>
          {items.map((item) => (
            <TruncateMarkup.Atom key={item}>
              <Link href="/" className={styles.button}>
                {item}
              </Link>
            </TruncateMarkup.Atom>
          ))}
        </section>
      </TruncateMarkup>
    );
  };

  return (
    <main>
      <article className={styles.article}>
        {shouldTruncate ? (
          <TruncatedList />
        ) : (
          <section className={styles.buttonContainer}>
            {items.map((item) => (
              <Link href="/" className={styles.button} key={item}>
                {item}
              </Link>
            ))}
            <span onClick={toggleTruncate}>{"Show Less"}</span>
          </section>
        )}
      </article>
    </main>
  );
}
