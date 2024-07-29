import { cn } from "@/lib/utils";

export function ContentWrapper({ children, className }) {
  return (
    <div className={cn("container xl:max-w-[1240px] mx-auto", className)}>
      {children}
    </div>
  );
}
