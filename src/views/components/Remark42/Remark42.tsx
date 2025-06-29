import React, { useEffect, useRef } from "react";

interface Remark42Props {
  host: string;
  siteId?: string;
  url?: string;
  components?: ("embed" | "last-comments" | "counter")[];
  maxShownComments?: number;
  maxLastComments?: number;
  theme?: "light" | "dark";
  pageTitle?: string;
  locale?: string;
  showEmailSubscription?: boolean;
  showRssSubscription?: boolean;
  simpleView?: boolean;
  noFooter?: boolean;
}

interface Remark42Config {
  host: string;
  site_id?: string;
  url?: string;
  components?: string[];
  max_shown_comments?: number;
  max_last_comments?: number;
  theme?: string;
  page_title?: string;
  locale?: string;
  show_email_subscription?: boolean;
  show_rss_subscription?: boolean;
  simple_view?: boolean;
  no_footer?: boolean;
}

interface Remark42CreateInstanceConfig extends Remark42Config {
  node: HTMLDivElement;
}

declare global {
  interface Window {
    remark_config: Remark42Config;
    REMARK42?: {
      createInstance: (config: Remark42CreateInstanceConfig) => {
        destroy: () => void;
      };
    };
  }
}

const Remark42: React.FC<Remark42Props> = ({
  host,
  siteId = "remark",
  url,
  components = ["embed"],
  maxShownComments = 15,
  maxLastComments = 15,
  theme = "light",
  pageTitle,
  locale = "en",
  showEmailSubscription = true,
  showRssSubscription = true,
  simpleView = false,
  noFooter = false,
}) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const remark42InstanceRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const currentUrl =
      url ||
      window.location.origin +
        window.location.pathname +
        window.location.search;

    // Set up the config
    window.remark_config = {
      host,
      site_id: siteId,
      url: currentUrl,
      components,
      max_shown_comments: maxShownComments,
      max_last_comments: maxLastComments,
      theme,
      page_title: pageTitle || document.title,
      locale,
      show_email_subscription: showEmailSubscription,
      show_rss_subscription: showRssSubscription,
      simple_view: simpleView,
      no_footer: noFooter,
    };

    const initRemark42 = () => {
      if (window.REMARK42 && commentRef.current) {
        // Destroy previous instance if it exists
        if (remark42InstanceRef.current) {
          remark42InstanceRef.current.destroy();
        }

        // Create new instance
        remark42InstanceRef.current = window.REMARK42.createInstance({
          node: commentRef.current,
          ...window.remark_config,
        });
      }
    };

    const loadRemark42 = () => {
      if (scriptLoadedRef.current) {
        // Scripts already loaded, just init
        initRemark42();
        return;
      }

      const componentsToLoad = components || ["embed"];

      componentsToLoad.forEach((component) => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = `${host}/web/${component}.js`;

        const target = document.head || document.body;
        target.appendChild(script);
      });

      scriptLoadedRef.current = true;

      // Wait for REMARK42 to be ready
      if (window.REMARK42) {
        initRemark42();
      } else {
        const handleReady = () => {
          initRemark42();
          window.removeEventListener("REMARK42::ready", handleReady);
        };
        window.addEventListener("REMARK42::ready", handleReady);
      }
    };

    loadRemark42();

    // Cleanup function
    return () => {
      if (remark42InstanceRef.current) {
        remark42InstanceRef.current.destroy();
        remark42InstanceRef.current = null;
      }
    };
  }, [
    host,
    siteId,
    url,
    components,
    maxShownComments,
    maxLastComments,
    theme,
    pageTitle,
    locale,
    showEmailSubscription,
    showRssSubscription,
    simpleView,
    noFooter,
  ]);

  return <div id="remark42" ref={commentRef}></div>;
};

export default Remark42;
