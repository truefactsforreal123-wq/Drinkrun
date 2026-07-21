import Image from "next/image";
import logo from "@/597339780_1161609369512307_6169244094823315805_n.jpg";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo-mark ${compact ? "logo-mark--compact" : ""}`}>
      <Image
        src={logo}
        alt="Drink Run sun, waves, and beach umbrella logo"
        fill
        priority
        sizes={compact ? "48px" : "(max-width: 640px) 240px, 310px"}
      />
    </span>
  );
}
