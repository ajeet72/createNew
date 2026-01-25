import { ArrowRight } from "lucide-react";

export default function AnimatedButton({ text }: { text: string }) {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <a
        target="_blank"
        href="https://cal.com/create-new"
        className="group bg-[#fdba80] hover:bg-[#fdba80] text-[#06113d] px-4 py-2 text-sm font-medium shadow-lg transition-all duration-200 relative inline-block"
      >
        <div className="overflow-hidden text-nowrap">
          <span className=" pt-1 flex relative transition-transform duration-600 group-hover:-translate-y-full">
            {text}
            <span className="pl-1 transform rotate-320">
              <ArrowRight size={22} />
            </span>
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-600 translate-y-full group-hover:translate-y-0">
            {text}
            <span className="pl-1">
              <ArrowRight size={20} />
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}