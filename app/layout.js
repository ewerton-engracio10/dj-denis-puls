import "./globals.css";
import "./adjustments.css";

export const metadata = {
  title: "DJ Denis Puls | Wedding DJ | Graduation DJ",
  description: "DJ Denis Puls — mais de 17 anos criando experiências únicas em casamentos, formaturas, festas e eventos corporativos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
