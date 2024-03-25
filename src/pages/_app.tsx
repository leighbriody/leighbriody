import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { useEffect } from "react";
("use client;");

import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: ["900", "300"],
  subsets: ["latin"],
  variable: "--font-vietnam",
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <main className={`${vietnam.variable} bg-primary font-sans  text-blue-300`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
