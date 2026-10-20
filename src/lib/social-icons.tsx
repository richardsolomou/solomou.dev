import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CvIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </Icon>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect height="18" rx="3" width="18" x="3" y="3" />
      <path d="M8 11v6M8 7.5v.01M12 17v-6M12 13.5a2.5 2.5 0 0 1 5 0V17" />
    </Icon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4h4.5L20 20h-4.5z" />
      <path d="m20 4-6.6 7.3M10.6 12.7 4 20" />
    </Icon>
  );
}

export function TwitchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 3h15v10l-5 5h-4l-3 3v-3H4V6z" />
      <path d="M11 7.5v4M15.5 7.5v4" />
    </Icon>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect height="13" rx="4" width="19" x="2.5" y="5.5" />
      <path d="M10 9.5v5l4.5-2.5z" />
    </Icon>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect height="14" rx="2" width="18" x="3" y="5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </Icon>
  );
}
