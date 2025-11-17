import styles from "./Card.module.css";

type CardProps = {
  title: string;
  items: { label: string; value: string }[];
};

export default function Card({ title, items }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}