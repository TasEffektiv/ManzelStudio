export default function ProjectSnapshot({
  items,
}: {
  items: { lbl: string; val: string; valEm?: string }[];
}) {
  return (
    <section className="relative z-[3] px-6 md:px-10">
      <div className="mx-auto -mt-[60px] max-w-[1400px]">
        <div className="grid grid-cols-2 divide-y divide-line bg-white shadow-[0_30px_80px_-50px_rgba(0,0,0,0.18)] sm:grid-cols-3 md:grid-cols-5 md:divide-y-0 md:divide-x">
          {items.map((item) => (
            <div key={item.lbl} className="flex flex-col gap-2.5 p-7 md:p-9">
              <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">{item.lbl}</div>
              <div className="text-[22px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:text-[24px]">
                {item.val} {item.valEm && <em className="not-italic font-normal">{item.valEm}</em>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
