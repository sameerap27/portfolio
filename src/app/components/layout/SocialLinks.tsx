interface SocialLinksProps {
  className?: string;
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sameera-patel-sp/', ariaLabel: 'LinkedIn' },
  { label: 'GitHub', href: 'https://github.com/sameerap27', ariaLabel: 'GitHub' },
];

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`social-icons ${className}`.trim()}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.ariaLabel}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
