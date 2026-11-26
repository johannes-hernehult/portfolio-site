import styles from "./styles.module.css";

const profiles: ReadonlyArray<{ label: string; url: string }> = [
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
];

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
