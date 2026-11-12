type Status = 'supported' | 'not-supported' | 'coming-soon';

const STATUSES: Record<Status, { glyph: string; label: string }> = {
  supported: { glyph: '✅', label: 'Supported' },
  'not-supported': { glyph: '—', label: 'Not supported' },
  'coming-soon': { glyph: '🔜', label: 'Coming soon' },
};

// A support-matrix cell. Sighted readers see the glyph; screen readers hear the label.
export default function SupportStatus({ status }: { status: Status }) {
  const { glyph, label } = STATUSES[status];
  return (
    <span className={`support-status support-status--${status}`} title={label}>
      <span aria-hidden="true">{glyph}</span>
      <span className="visually-hidden">{label}</span>
    </span>
  );
}

// Short aliases for use inside Markdown tables.
export const Supported = () => <SupportStatus status="supported" />;
export const NotSupported = () => <SupportStatus status="not-supported" />;
export const ComingSoon = () => <SupportStatus status="coming-soon" />;
