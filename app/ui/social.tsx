import Image from "next/image";

export default function Social() {
  return (
    <div className="absolute left-16 bottom-0 flex flex-col items-center z-50">
      <div className="flex flex-col gap-8 mb-8">
        <Image
          src="/images/linkedin.png"
          alt="Linkedin"
          width={25}
          height={25}
        />

        <Image src="/images/github.png" alt="Github" width={25} height={25} />

        <Image src="/images/gmail.png" alt="Gmail" width={25} height={25} />
      </div>

      <div className="w-[1.4px] h-[250px] bg-gray-500"></div>
    </div>
  );
}
