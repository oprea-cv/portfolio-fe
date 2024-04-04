import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/theme-toggle";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMediaQuery } from "@/hooks";
import { breakpoints } from "@/utils/constants";

export default function Home() {

  const isMedium = useMediaQuery({ maxWidth: breakpoints.md });

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <ModeToggle />
      <h1 className={`text-4xl font-bold`}>Hello, World!</h1>

      <InputOTP maxLength={7}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
        </InputOTPGroup>
      </InputOTP>
    </main>
  );
}
