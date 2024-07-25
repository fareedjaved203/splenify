import { cn } from "@/lib/utils";

export function ContentWrapper({ children, className }) {
  return (
    <div className={cn("container max-w-[1240px] mx-auto xl:px-0", className)}>
      {children}
    </div>
  );
}
