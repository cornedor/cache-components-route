"use cache";
export default async function Page({
  params,
}: {
  params: Promise<{ language: string; slug: string }>;
}) {
  const { language, slug } = await params;

  return (
    <div>
      adsf {language} / {slug}
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
