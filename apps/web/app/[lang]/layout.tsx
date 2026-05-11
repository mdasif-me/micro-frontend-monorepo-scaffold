import { bangla, satoshi } from '../fonts/fonts';
import '../styles/globals.css';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${satoshi.variable} ${bangla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
