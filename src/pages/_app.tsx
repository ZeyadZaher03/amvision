import { Inter, Roboto } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${roboto.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
