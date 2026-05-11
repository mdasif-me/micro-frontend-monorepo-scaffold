import { bangla, satoshi } from './fonts/fonts';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const font_class = lang === 'bn' ? bangla.variable : satoshi.variable;

  return (
    <html lang={lang} className={font_class}>
      <body>{children}</body>
    </html>
  );
}
