import Image from "next/image";

export default function InnerBanner({
  image,
  title,
  tagline,
}: {
  image: string;
  title: string;
  tagline: string;
}) {
  return (
    <section className="relative flex min-h-[380px] items-center overflow-hidden md:min-h-[520px] lg:min-h-[640px]">
      <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-6 py-24 md:px-10">
        <h1 className="mb-1 text-[36px] font-medium leading-[1.05] tracking-[-0.044em] text-white sm:text-[50px] md:text-[68px] lg:text-[92px] lg:leading-[100px]">
          {title}
        </h1>
        <p className="text-[20px] font-light leading-[1.2] tracking-[-0.04em] text-white sm:text-[30px] md:text-[40px] lg:text-[54px]">
          {tagline}
        </p>
      </div>
    </section>
  );
}
