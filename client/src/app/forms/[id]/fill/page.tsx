type Props = {
  params: { id: string };
};

export default async function FillFormPage({ params }: Props) {
const { id } = await params;

  return <h1>Fill Form Page — ID: {id}</h1>;
}
