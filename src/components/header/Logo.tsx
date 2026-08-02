import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
        <Link href="/" aria-label="Katihar Engineering College home">
            <Image
              src="/brand/kec.png"
              alt="Katihar Engineering College Logo"
              width={100}
              height={100}
              priority
              className="h-auto w-auto shrink-0"
            />
          </Link>

          <div>
            <p className="m-0 mb-0.5 text-sm font-semibold text-[#b5883f] whitespace-nowrap max-sm:text-[12px]">
              कटिहार अभियन्त्रण महाविद्यालय
            </p>
            <h1 className="m-0 font-serif text-[26px] font-bold leading-tight text-[#0e6e4a] whitespace-nowrap max-[900px]:text-[22px] max-sm:text-[17px]">
              Katihar Engineering College
            </h1>
            <p className="m-0 mb-1 font-serif text-[22px] font-bold text-[#0e6e4a] max-[900px]:text-[18px] max-sm:text-[15px]">
              Katihar
            </p>
            <p className="m-0 text-[13px] italic text-[#5a5a5a] whitespace-nowrap max-sm:text-[10px]">
              ( Dept. of Science &amp; Technology, Govt. of Bihar )
            </p>
          </div>
    </div>
)}