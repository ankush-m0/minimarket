import Image from "next/image";
import React from "react";
import closeIcon from "@/images/closeIcon.png";

export default function CloseButton({ close }: {close: () => void}) {
  return (
    <button type="button" className="text-black place-self-end mb-4 sticky top-8" onClick={close}>
        <Image
          width="40"
          height="40"
          src={closeIcon}
          alt="cancel"
          className="rounded-full border border-black shadow-[rgba(0,0,0,1)_1px_1px_0px_1px]"
        />
      </button>
  );
}
