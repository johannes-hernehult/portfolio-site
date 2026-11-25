import styles from "./styles.module.css";

const profiles = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/johannes-hernehult/",
  },
  {
    label: "GitHub",
    url: "https://github.com/johannes-hernehult",
  },
  {
    label: "git.jhernehult.com",
    url: "https://git.jhernehult.com/johannes-hernehult",
  },
] as const;

type SocialLinksProps = {
  placement: "hero" | "navbar";
};

export function SocialLinks({ placement }: SocialLinksProps) {
  return (
    <ul className={`${styles.links} ${styles[placement]}`} aria-label="Social profiles">
      {profiles.map(({ label, url }) => (
        <li key={url}>
          <a href={url} target="_blank" rel="noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
