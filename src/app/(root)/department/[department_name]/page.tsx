interface PageProps {
  params: Promise<{
    department_name: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { department_name } = await params;
  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-10">About {department_name}</h1>
    </div>
  );
};

export default Page;
