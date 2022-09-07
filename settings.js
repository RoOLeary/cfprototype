const settings = {
    meta: {
      rootUrl: "https://cfprototype.vercel.app",
      title: "App",
      description: "The app description goes here.",
      social: {
        graphic:
          "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
        twitter: "@tnwevents",
      },
    },
    routes: {
      authenticated: {
        pathAfterFailure: "/login",
      },
      public: {
        pathAfterFailure: "/documents",
      },
    },
  };
  
  export default settings;