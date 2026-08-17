const icons = [
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C7 9 5 12 5 15a7 7 0 0 0 14 0c0-3-2-6-7-13z" />
    <circle cx="12" cy="15" r="2" />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="4" />
    <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
    <path d="M9 9l2 2 3-3" />
  </svg>,
];

export default function TrustBar({ items }: { items: { label: string }[] }) {
  return (
    <section className="border-b border-line bg-white px-6 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 py-9 sm:grid-cols-4 sm:gap-y-0">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3.5 pr-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center text-ink">{icons[i]}</span>
            <span className="text-[14px] font-medium leading-[1.3] text-ink">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
