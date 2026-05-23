interface SocialLinksProps {
  className?: string;
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sameera-patel-sp/', ariaLabel: 'LinkedIn', icon: '/linkedin.svg' },
  { label: 'GitHub', href: 'https://github.com/sameerap27', ariaLabel: 'GitHub', icon: '/github.svg' },
];

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`social-icons ${className}`.trim()}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.ariaLabel}>
          <img src={link.icon} alt={`${link.label} icon`} className="social-icon-img" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
