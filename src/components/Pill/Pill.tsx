interface PillProps {
  name: string;
}

export function Pill(props: PillProps) {
  return (
    <div className="rounded border border-gray-500 px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-400">
    {props.name}
  </div>
  );
}
