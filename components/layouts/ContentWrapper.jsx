import { cn } from "@/lib/utils";

export function ContentLayout({ children, className }) {
  return (
    <div className={cn("container max-w-[1240px] mx-auto lg:px-0", className)}>
      {children}
    </div>
  );
}
