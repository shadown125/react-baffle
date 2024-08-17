import React, { useEffect } from "react";
import baffle from "./classes/Baffle";

export function Baffle({
  children,
  characters = "░░▓ ▒▒/▒░ ░██░▒ █░> ██░▓░ █░░▒ ▓>/ ██▓▓ ▓>░/",
  speed = 50,
  as: Component = "div",
}: {
  children: string;
  characters?: string;
  speed?: number;
  as?: React.ElementType<{
    className?: string;
  }>;
}) {
  useEffect(() => {
    baffle(".baffle")!
      .set({
        characters: characters,
        speed: speed,
      })
      .start()
      .reveal(3000);
  });
  return <Component className="baffle">{children}</Component>;
}
