import { CloudProvider } from "@/cloud/useCloud";
import { ConfigProvider } from "@/hooks/useConfig";
import { ConnectionProvider } from "@/hooks/useConnection";
import { ToastProvider } from "@/components/toast/ToasterProvider";
import "@livekit/components-styles/components/participant";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ConfigProvider>
        <CloudProvider>
          <ConnectionProvider>
            <Component {...pageProps} />
          </ConnectionProvider>
        </CloudProvider>
      </ConfigProvider>
    </ToastProvider>
  );
}