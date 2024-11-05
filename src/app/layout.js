import "./globals.css"; 
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  variable: '--font-prompt', 
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

export const metadata = {
  title: "DuckerPacker Quiz", 
  description: "Quiz application for DuckerPacker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className={prompt.variable}> 
        <main>{children}</main>
      </body>
    </html>
  );
}
