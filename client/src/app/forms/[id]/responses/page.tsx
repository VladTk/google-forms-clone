type Props = {
  params: { id: string };
};

export default async function FormResponsesPage({ params }: Props) {
  const { id } = await params;

  return <h1>Responses Page — ID: {id}</h1>;
}
