import type { Config } from "tailwindcss";

const sizes: Record<string, string> = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "cover": "cover"
      },
      backgroundImage: {
        "top_alert": "url('/images/top_alert_bg.png')",
        "introduce": "url('/images/introduce_bg.png')",
        "time": "url('/images/time_bg.png')",
        "shop_header": "url('/images/shop_header_bg.png')",
        "shop_content": "url('/images/shop_content.png')",
        "small_widget": "url('/images/small_widget.png')",
        "pink_button": "url('/images/pink_button.png')",
        "pink_input": "url('/images/pink_input.png')",
        "stake_button": "url('/images/stake_button.png')",
        "white_button": "url('/images/white_button.png')",
        "stake": "url('/images/stake.png')",
        "castle": "url('/images/castle.png')",
        "tokenomic": "url('/images/tokenomic.png')",
        "tokenomic_button": "url('/images/tokenomic_button.png')",
        "total_card": "url('/images/total_card.png')",
        "total_card_mobile": "url('/images/total_card_mobile.png')",
      },
      fontFamily: {
        'lakki': 'Lakki Reddy',
        'clash': 'Clash Grotesk'
      },
      colors: {
      },
      dropShadow: {
        "text-radial": "0 5px 10px rgba(94, 126, 255, 0.4)",
      },
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: {
        ...sizes,
        content: "fit-content",
        "wrapper": "1380px"
      },
      borderRadius: sizes,
      lineHeight: {
        "1": "1",
      }
    },
  },
  plugins: [],
};
export default config;
