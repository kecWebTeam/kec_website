import Header from "@/components/header/header";

export default async function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}