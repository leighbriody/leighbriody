import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { useEffect } from "react";
("use client;");

//How to do custom font
//how do i make this easier to use across project
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: "900",
  subsets: ["vietnamese"],
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
    <main className={`${vietnam.className} bg-primary font-sans text-blue-300`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
