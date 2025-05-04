export async function generateStaticParams() {
  return [
    { slug: ["deutschland", "politik"] },
    { slug: ["deutschland", "kultur-und-bildung"] },
    { slug: ["deutschland", "sport"] },
    { slug: ["deutschland", "divers"] },
    { slug: ["deutschland", "deutschland-erleben"] },

    { slug: ["ausland", "politik"] },
    { slug: ["ausland", "kultur-und-bildung"] },
    { slug: ["ausland", "sport"] },
    { slug: ["ausland", "divers"] },
    { slug: ["ausland", "wirtschaft"] },

    { slug: ["international"] },
    { slug: ["deine-stimme"] },
  ];
}

export default async function Page(props) {
  const { slug } = await props.params;
  const slugPath = slug.join("/");

  return (
    <div className="h-full min-h-[calc(100dvh-124px)]">
      Slug Page Example for: {slugPath}
    </div>
  );
}
