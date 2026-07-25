export default async function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}