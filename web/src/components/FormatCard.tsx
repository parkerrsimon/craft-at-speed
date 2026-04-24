/* eslint-disable @next/next/no-img-element */

const imgIcon = "https://www.figma.com/api/mcp/asset/736a58e0-5389-49f8-9422-dba99aea6cc1";

type FormatCardProps = {
  label: string;
  price: string;
  selected?: boolean;
  prime?: boolean;
  onClick?: () => void;
  className?: string;
};

export function FormatCard({
  label,
  price,
  selected = false,
  prime = false,
  onClick,
  className = "",
}: FormatCardProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "content-stretch cursor-pointer flex flex-col items-start justify-center",
        "overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full",
        "transition-colors duration-[50ms]",
        selected
          ? "border-2 border-[color:var(--brand-blue,#5eb9ff)] border-solid hover:brightness-[0.97] active:brightness-[0.94]"
          : "bg-[color:var(--text-white,#f5f5f5)] border-2 border-transparent hover:bg-[#ebebeb] active:bg-[#e0e0e0]",
        className,
      ].join(" ")}
      style={
        selected
          ? {
              backgroundImage:
                "linear-gradient(90deg, rgba(94, 185, 255, 0.1) 0%, rgba(94, 185, 255, 0.1) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)",
            }
          : undefined
      }
    >
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        {prime && <PrimeBadge />}
        <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
          {label}
        </p>
      </div>
      <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">
        {price}
      </p>
    </button>
  );
}

type FormatGroupProps = {
  formats: { label: string; price: string; prime?: boolean }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export function FormatGroup({ formats, selectedIndex, onSelect }: FormatGroupProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      {formats.map((fmt, i) => (
        <FormatCard
          key={fmt.label}
          label={fmt.label}
          price={fmt.price}
          prime={fmt.prime}
          selected={i === selectedIndex}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

function PrimeBadge() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
          <div className="absolute inset-[-13.64%_-9.38%]">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
      <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--brand-orange,#ff8e1e)] whitespace-nowrap">
        Prime
      </p>
    </div>
  );
}
