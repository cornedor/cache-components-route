"use cache";

import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  cacheTag(`foo_${slug}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>Foo bar {slug}</div>;
}

export async function generateStaticParams() {
  return [{ slug: "baz" }, { slug: "qux" }];
}
