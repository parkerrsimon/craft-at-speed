"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Button } from "@/components/Button";
import { FormatGroup } from "@/components/FormatCard";

const imgIcon = "https://www.figma.com/api/mcp/asset/626c5be7-398e-42b3-b290-fca6e06c202a";
const imgSolid = "https://www.figma.com/api/mcp/asset/65b49cfe-9041-492a-8ff5-4b65574e74dd";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/d529e3cc-b16b-4bce-90f6-544d4753b95d";
const imgSolid1 = "https://www.figma.com/api/mcp/asset/0f6ba1c5-0de0-4914-8962-9fa15dc7d7dd";
const imgImage1 = "https://www.figma.com/api/mcp/asset/ff96135b-1254-4301-a012-073af8ec9500";
const imgImage = "https://www.figma.com/api/mcp/asset/2f9caf46-ff84-44ab-be0d-bceac4d980ff";
const imgImage2 = "https://www.figma.com/api/mcp/asset/1cb12b03-f2ea-4a71-b426-ba7366e9cec1";
const imgSolid2 = "https://www.figma.com/api/mcp/asset/4a663a36-408b-412e-97de-9a180235b68f";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/736a58e0-5389-49f8-9422-dba99aea6cc1";

function StarEmpty({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="Star/Empty">
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute inset-[10.96%_10.73%_14.16%_10.73%]">
          <div className="absolute inset-[-5.01%_-4.77%]">
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StarFilled({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="Star/Filled">
      <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSolid} />
      </div>
    </div>
  );
}

const formats = [
  { label: "Audiobook", price: "$0.00" },
  { label: "Kindle", price: "$16.99" },
  { label: "Paperback", price: "$25.07" },
  { label: "Hardcover", price: "$16.99", prime: true },
];

export function Revised2() {
  const [selectedFormat, setSelectedFormat] = useState(3);

  return (
    <div className="bg-white relative size-full" data-name="revised-2">
      {/* ── Header image ── */}
      <div className="absolute h-[140px] left-0 top-0 w-[1447px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1288.7%] left-0 max-w-none top-0 w-full" src={imgImage} />
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="absolute content-stretch flex gap-[8px] items-center left-[40px] top-[164px]">
        {["Books", "Health, Fitness & Dieting", "Psychology & Counseling", "Creativity & Genius"].map((t, i, arr) => (
          <div key={t} className="content-stretch flex items-center gap-[8px]">
            <p className="decoration-solid font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text-secondary,#757575)] underline underline-offset-[3px] whitespace-nowrap">
              {t}
            </p>
            {i < arr.length - 1 && (
              <div className="relative shrink-0 size-[12px]">
                <div className="absolute inset-[20.83%_33.33%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSolid2} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Left column: book image + thumbnails + pills ── */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[40px] top-[207px] w-[325px]">
        <div className="bg-[color:var(--text-white,#f5f5f5)] h-[488px] overflow-clip relative rounded-[8px] shrink-0 w-full">
          <div className="absolute h-[334px] left-[49px] top-[77px] w-[228px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="bg-[color:var(--text-white,#f5f5f5)] overflow-clip relative rounded-[8px] shrink-0 size-[95px]">
              <div className="absolute h-[67px] left-[25px] top-[14px] w-[46px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
            </div>
          ))}
        </div>
        <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full">
          {["Book sample", "Audible sample", "See all editions"].map((label) => (
            <Button key={label} variant="link">{label}</Button>
          ))}
        </div>
      </div>

      {/* ── Title block ── */}
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(25%+25px)] top-[207px] w-[358px]">
        <div className="border-2 border-[color:var(--text-white,#f5f5f5)] border-solid content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[8px] shrink-0">
          <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text-primary,#2c2c2c)] text-center whitespace-nowrap">
            Editor&apos;s Pick: Best Books of the Year 2023
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[color:var(--text-primary,#2c2c2c)] w-full">
          <p className="font-medium min-w-full relative shrink-0 text-[24px] tracking-[0.24px] w-[min-content]">
            The Creative Act: A Way of Being
          </p>
          <div className="content-stretch flex font-normal gap-[4px] items-center relative shrink-0 text-[16px] whitespace-nowrap">
            <p className="relative shrink-0">{`by `}</p>
            <p className="decoration-[6.5%] decoration-solid relative shrink-0 underline underline-offset-[3px]">Rick Rubin</p>
          </div>
        </div>
        <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
          Hardcover (January 17, 2023)
        </p>
      </div>

      {/* ── Description text ── */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(25%+25px)] top-[366px] w-[670px]">
        <p className="font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] w-[min-content] whitespace-pre-wrap">
          The #1 New York Times bestseller.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          {`"A gorgeous and inspiring work of art on creation, creativity, the work of the artist. It will gladden the hearts of writers and artists everywhere, and get them working again with a new sense of meaning and direction. A stunning accomplishment." —Anne Lamott`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          From the legendary music producer, a master at helping people connect with the wellsprings of their creativity, comes a beautifully crafted book many years in the making that offers that same deep wisdom to all of us.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          {`"I set out to write a book about what to do to make a great work of art. Instead, it revealed itself to be a book on how to be." —Rick Rubin`}
        </p>
        <div className="content-stretch flex items-start relative shrink-0">
          <Button variant="link">Read more</Button>
        </div>
      </div>

      {/* ── Ratings + Goodreads ── */}
      <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[calc(58.33%+77px)] top-[207px] w-[138px]">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <StarFilled className="relative shrink-0 size-[20px]" />
            <StarFilled className="relative shrink-0 size-[20px]" />
            <StarFilled className="relative shrink-0 size-[20px]" />
            <StarFilled className="relative shrink-0 size-[20px]" />
            <StarEmpty className="relative shrink-0 size-[20px]" />
          </div>
          <div className="content-stretch flex font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
            <p className="relative shrink-0">4.2</p>
            <p className="relative shrink-0">(11, 202 ratings)</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
          <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
            Goodreaders say
          </p>
          <div className="content-stretch flex font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
            <p className="relative shrink-0">3.9</p>
            <p className="relative shrink-0">(89, 541 ratings)</p>
          </div>
        </div>
      </div>

      {/* ── Metadata row ── */}
      <div className="absolute border-0 border-[color:var(--text-white,#f5f5f5)] border-solid content-stretch flex gap-[20px] items-start left-[calc(25%+25px)] py-[16px] top-[778px]">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[210px]">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">Author:</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="relative rounded-[100px] shrink-0 size-[26px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgImage2} />
              </div>
              <p className="decoration-[6.5%] decoration-solid font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] underline underline-offset-[3px] whitespace-nowrap">
                Rick Rubin
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">Print Length:</p>
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">432 pages</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[210px]">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">Language:</p>
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">English</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">Publisher:</p>
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">Penguin Press</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[210px]">
          <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">Dimensions:</p>
          <div className="content-stretch flex flex-col font-normal items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] w-[113px] whitespace-nowrap">
            <p className="relative shrink-0">Width: 6.3&quot;</p>
            <p className="relative shrink-0">Length: 8.82&quot;</p>
            <p className="relative shrink-0">Depth: 1.24&quot;</p>
          </div>
        </div>
      </div>

      {/* ── Right column: format cards + purchase ── */}
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(75%-5px)] top-[207px] w-[325px]">
        {/* Format cards */}
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <FormatGroup
            formats={formats}
            selectedIndex={selectedFormat}
            onSelect={setSelectedFormat}
          />
          <Button variant="link">Used, New, Collectible from $9.00</Button>
        </div>

        {/* In stock / price / delivery */}
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">
                  <p className="font-normal relative shrink-0 text-[16px]">In stock</p>
                  <p className="font-medium relative shrink-0 text-[24px] tracking-[0.24px]">$16.99</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
                  Save 47% (List price: $32.00)
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                      <div className="absolute inset-[-13.64%_-9.38%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                      </div>
                    </div>
                  </div>
                  <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--brand-orange,#ff8e1e)] whitespace-nowrap">Prime</p>
                </div>
                <div className="content-stretch flex items-start relative shrink-0">
                  <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
                    <span className="leading-[normal] text-[#2c2c2c]">You earn</span>
                    {` `}
                    <span className="leading-[normal] text-[#ff8e1e]">17 pts</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] w-full">
              <span className="font-medium">FREE</span>
              {` `}
              <span className="font-medium">delivery</span>
              {` today 5PM – 10PM on qualifying orders over $25, or $4.99 delivery in 3 hours.`}
            </p>

            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] w-[min-content]">
                Delivering to Parker (San Francisco, 94117)
              </p>
              <Button variant="link">Change delivery</Button>
            </div>
          </div>

          {/* Quantity picker */}
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative rounded-[8px] shrink-0">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">Quantity</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]">
                <div className="overflow-clip relative rounded-[100px] shrink-0 size-[24px]">
                  <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
                    <div className="absolute inset-[-1px_-7.14%]">
                      <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--text-primary,#2c2c2c)] text-center tracking-[0.24px] w-full">1</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]">
                <div className="relative rounded-[100px] shrink-0 size-[24px]">
                  <div className="absolute inset-[16.67%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSolid1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
          <Button variant="primary" fullWidth>Add to cart</Button>
          <Button variant="white" fullWidth>Buy Now</Button>
          <Button variant="link" fullWidth className="h-[42px]">Add to list</Button>
        </div>

        {/* Seller info */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] w-full">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <p className="relative shrink-0 text-[color:var(--text-secondary,#757575)] w-[128px]">Shipper / Seller</p>
              <p className="relative shrink-0 text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">Amazon.com</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <p className="relative shrink-0 text-[color:var(--text-secondary,#757575)] w-[128px]">Returns</p>
              <p className="decoration-[6.5%] decoration-solid flex-[1_0_0] min-w-px relative text-[color:var(--text-primary,#2c2c2c)] underline underline-offset-[3px]">Free 30-day refund/replacement</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <p className="relative shrink-0 text-[color:var(--text-secondary,#757575)] w-[128px]">Customer service</p>
              <p className="decoration-[6.5%] decoration-solid flex-[1_0_0] min-w-px relative text-[color:var(--text-primary,#2c2c2c)] underline underline-offset-[3px]">Amazon.com</p>
            </div>
          </div>
          <Button variant="link">Report an issue</Button>
        </div>
      </div>

      {/* ── Customers also bought heading ── */}
      <div className="absolute content-stretch flex flex-col items-start left-[40px] top-[1004px]">
        <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--text-primary,#2c2c2c)] tracking-[0.24px] w-full">
          Customers also bought
        </p>
      </div>

      {/* ── Customers-also-bought thumbnail placeholders ── */}
      <div className="absolute bg-[color:var(--text-white,#f5f5f5)] h-[140px] left-[40px] overflow-clip rounded-[8px] top-[1066px] w-[210px]">
        <div className="absolute h-[67px] left-[82px] top-[36px] w-[46px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute bg-[color:var(--text-white,#f5f5f5)] h-[140px] left-[calc(16.67%+30px)] overflow-clip rounded-[8px] top-[1066px] w-[210px]">
        <div className="absolute h-[67px] left-[82px] top-[36px] w-[46px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute bg-[color:var(--text-white,#f5f5f5)] h-[140px] left-[calc(33.33%+20px)] overflow-clip rounded-[8px] top-[1066px] w-[210px]">
        <div className="absolute h-[67px] left-[82px] top-[36px] w-[46px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>

      {/* ── Customers-also-bought detail cards ── */}
      {[
        { left: "40px" },
        { left: "calc(16.67% + 30px)" },
        { left: "calc(33.33% + 20px)" },
      ].map(({ left }, idx) => (
        <div key={idx} className="absolute content-stretch flex flex-col gap-[8px] items-start top-[1230px] w-[210px]" style={{ left }}>
          <p className="font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] w-[min-content]">
            The Boy, the Mole, the Fox and the Horse: Inspiring conversations on Hope, Love...
          </p>
          <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
            <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap">$14.60</p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                  </div>
                </div>
              </div>
              <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--brand-orange,#ff8e1e)] whitespace-nowrap">Prime</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <StarFilled className="relative shrink-0 size-[20px]" />
              <StarFilled className="relative shrink-0 size-[20px]" />
              <StarFilled className="relative shrink-0 size-[20px]" />
              <StarFilled className="relative shrink-0 size-[20px]" />
              <StarEmpty className="relative shrink-0 size-[20px]" />
            </div>
            <div className="content-stretch flex font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--text-secondary,#757575)] whitespace-nowrap">
              <p className="relative shrink-0">4.2 / 5</p>
              <p className="relative shrink-0">(11, 202 ratings)</p>
            </div>
          </div>
        </div>
      ))}

      {/* ── Add all 3 to cart ── */}
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[calc(50%+10px)] top-[1102px] w-[160px]">
        <Button variant="primary" fullWidth>Add all 3 to cart</Button>
        <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
          <p className="font-normal relative shrink-0 text-[color:var(--text-secondary,#757575)]">Total price:</p>
          <p className="font-medium relative shrink-0 text-[color:var(--text-primary,#2c2c2c)]">$43.80</p>
        </div>
      </div>
    </div>
  );
}
