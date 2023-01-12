import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    
    "::-webkit-scrollbar": {
      width: 6,
      height: 6,
    },

    "::-webkit-scrollbar-track": {
      background: "$gray900",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$gray600",
      borderRadius: 10,
    },
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    background: '$black',
  },
});
