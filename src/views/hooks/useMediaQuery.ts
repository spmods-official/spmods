import { useMemo } from "react";
import { useSubscription } from "use-subscription";
import type { Subscription } from "use-subscription";
import json2mq from "json2mq";
import type { QueryObject } from "json2mq";

import type { MediaQuery } from "@/types/mediaquery";

export function getMedia(mediaQuery: MediaQuery): string {
  return typeof mediaQuery === "string" ? mediaQuery : json2mq(mediaQuery as QueryObject);
}

export default function useMediaQuery(mediaQuery: MediaQuery): boolean {
  const media = useMemo(() => getMedia(mediaQuery), [mediaQuery]);

  const subscription = useMemo<Subscription<boolean>>(
    () => ({
      getCurrentValue: () => window.matchMedia(media).matches,
      subscribe(callback) {
        const mql = window.matchMedia(media);
        if ("addEventListener" in mql) {
          mql.addEventListener("change", callback);
        } else {
          (mql as any).addListener(callback);
        }
        return () => {
          if ("removeEventListener" in mql) {
            mql.removeEventListener("change", callback);
          } else {
            (mql as any).removeListener(callback);
          }
        };
      },
    }),
    [media]
  );

  return useSubscription(subscription);
}