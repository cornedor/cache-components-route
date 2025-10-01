export default async function Homepage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  return (
    <div>This is the homepage for a the {language.toUpperCase()} website</div>
  );
}
