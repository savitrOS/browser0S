type Bookmark = {
  icon: string;
  name: string;
  url: string;
};

export const bookmarks: Bookmark[] = [
  {
    icon: "/System/Icons/google.png",
    name: "Google",
    url: "https://www.google.com/webhp?igu=1",
  },
  {
    icon: "/favicon2.ico",
    name: "alphabreacher",
    url: "https://alphabreacher.repl.co/",
  },
  {
    icon: "/System/Icons/yc.png",
    name: "Y-Combinator",
    url: "https://www.ycombinator.com/",
  },
  {
    icon: "/System/Icons/replit.png",
    name: "Replit",
    url: "https://replit.com/",
  },
  {
    icon: "/System/Icons/youtube.png",
    name: "YouTube",
    url: "https://www.youtube.com/",
  },
  {
    icon: "/System/Icons/airbnb.png",
    name: "AirBnB",
    url: "https://www.airbnb.co.in/",
  },
  {
    icon: "/System/Icons/zoom.png",
    name: "Zoom",
    url: "https://zoom.us/",
  },
];

export const config = {
  referrerPolicy: "no-referrer" as React.HTMLAttributeReferrerPolicy,
  sandbox:
    "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts",
};

export const HOME_PAGE = "https://www.google.com/webhp?igu=1";
