export function AmazonHeader() {
  return (
    <header className="w-full">
      <div className="bg-[color:var(--amazon-nav)] text-white">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center gap-3 px-3">
          <div className="flex items-center gap-2 rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
            <div className="text-lg font-extrabold tracking-tight">amazon</div>
            <div className="text-sm font-semibold text-[#ff9900]">prime</div>
          </div>

          <div className="hidden min-w-0 items-center gap-2 rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70 md:flex">
            <div className="h-4 w-4 rounded-full border border-white/70" />
            <div className="min-w-0 leading-tight">
              <div className="text-[11px] text-white/70">Deliver to Parker</div>
              <div className="text-[13px] font-semibold">San Franc... 94117</div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-md bg-white">
            <div className="hidden shrink-0 items-center gap-1 bg-zinc-100 px-3 py-2 text-[12px] text-zinc-700 md:flex">
              <span>Books</span>
              <span className="text-zinc-400">▾</span>
            </div>
            <input
              aria-label="Search"
              className="min-w-0 flex-1 px-3 py-2 text-[14px] text-zinc-900 outline-none"
              placeholder="Search Amazon"
            />
            <button
              className="shrink-0 bg-[color:var(--amazon-accent)] px-4 py-2 text-zinc-900"
              aria-label="Search"
            >
              🔍
            </button>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
              <div className="text-[11px] text-white/80">EN</div>
            </div>
            <div className="rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
              <div className="text-[11px] text-white/80">Hello, Parker</div>
              <div className="text-[13px] font-semibold">Account & Lists ▾</div>
            </div>
            <div className="rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
              <div className="text-[11px] text-white/80">Returns</div>
              <div className="text-[13px] font-semibold">& Orders</div>
            </div>
            <div className="flex items-center gap-2 rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
              <div className="text-[13px] font-semibold">🛒 Cart</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-200 bg-[color:var(--amazon-subnav)] text-white">
        <div className="mx-auto flex h-10 max-w-[1500px] items-center gap-4 px-3 text-[13px]">
          <button className="flex items-center gap-2 rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70">
            <span className="text-[16px]">≡</span>
            <span className="font-semibold">All</span>
          </button>
          <a
            className="rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70"
            href="#"
          >
            Rufus
          </a>
          <a
            className="hidden rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70 md:block"
            href="#"
          >
            Health AI
          </a>
          <a
            className="hidden rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70 md:block"
            href="#"
          >
            3 Hour Delivery
          </a>
          <a
            className="hidden rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70 md:block"
            href="#"
          >
            Amazon Haul
          </a>
          <a
            className="hidden rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white/70 md:block"
            href="#"
          >
            Medical Care
          </a>
          <div className="ml-auto hidden rounded-sm bg-[#8a79ff]/30 px-3 py-1 text-[12px] font-semibold md:block">
            Today: Earn 2x Kindle Points
          </div>
        </div>
      </div>
    </header>
  );
}

