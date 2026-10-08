"use client";

import { useRef } from "react";

import {
  ScrambleText,
  type ScrambleTextHandle,
} from "@/components/reactbits/ScrambleText";

type ScrambleLinkProps = {
  href: string;
  className?: string;
  external?: boolean;
  children: string;
};

export function ScrambleLink({
  href,
  className,
  external,
  children,
}: ScrambleLinkProps) {
  const text = useRef<ScrambleTextHandle>(null);

  return (
    <a
      href={href}
      className={className}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      onMouseEnter={() => text.current?.play()}
      onFocus={() => text.current?.play()}
    >
      <ScrambleText ref={text}>{children}</ScrambleText>
    </a>
  );
}
