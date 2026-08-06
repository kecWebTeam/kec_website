interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    department_name: string;
  }>;
}

export default async function DepartmentLayout({
  children,
  params,
}: LayoutProps) {
  const { department_name } = await params;
  return <div>{children}</div>;
}
