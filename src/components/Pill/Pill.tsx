interface PillProps {
  name: string;
}

export function Pill(props: PillProps) {
  return (
    <div className="rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400">
    {props.name}
  </div>
  );
}
