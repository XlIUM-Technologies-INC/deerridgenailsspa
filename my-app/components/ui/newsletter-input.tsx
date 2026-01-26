"use client";

import * as React from "react";
import { Input } from "./input";

export function NewsletterInput(props: React.ComponentProps<typeof Input>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <input
        type="email"
        placeholder={props.placeholder}
        className={props.className}
        disabled
        suppressHydrationWarning
      />
    );
  }

  return <Input {...props} />;
}
