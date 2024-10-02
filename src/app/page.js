
"use client";
import { Provider } from "react-redux";
import App from "./app";
import store from "./redux/store";
import { useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";


export default function Home({pageProps}) {
  useEffect(() => {
    datadogRum.init({
      applicationId: '1cba1d95-5af6-484a-a033-a248bf61ebda',
      clientToken: 'pub73c4ecc1a36377623f5ccb183c39ead0',
      site: 'us5.datadoghq.com',
      service: 'portofolio',
      env: 'production', 
      version: '1.0.0',
      sampleRate: 20,
      trackInteractions: true, 
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input'
    });
    datadogRum.startSessionReplayRecording();
  }, []);

  return (
    <Provider store={store} {...pageProps}>
      <App></App>
    </Provider>
  );
}
