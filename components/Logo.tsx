import Image from "next/image";
import mark from "@/public/logo-mark.png";

export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Image src={mark} alt="" sizes="96px" className="h-12 w-auto" />
      <span className="text-sm font-bold uppercase tracking-[0.3em] text-ink sm:text-base">
        Ram Enterprises
      </span>
    </span>
  );
}
