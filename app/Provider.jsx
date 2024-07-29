import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function Provider({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}