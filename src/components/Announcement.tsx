import type { ReactNode } from 'react';

type AnnouncementProps = {
  badge: ReactNode;
  text?: ReactNode;
  cta?: ReactNode;
  labelledBy?: string;
  contained?: boolean;
};

export function Announcement({ badge, text, cta, labelledBy, contained = false }: AnnouncementProps) {
  const content = (
    <div className="announcement__inner">
      <span className="announcement__badge">{badge}</span>
      {text ? <span className="announcement__text">{text}</span> : null}
      {cta}
    </div>
  );

  return (
    <div className="announcement" role="region" aria-label={labelledBy}>
      {contained ? <div className="container">{content}</div> : content}
    </div>
  );
}
