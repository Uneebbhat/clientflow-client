const useGetPriorityChip = (priority: string) => {
  const color =
    priority === "High"
      ? "bg-yellow-200 text-yellow-800"
      : priority === "Urgent"
      ? "bg-red-200 text-red-800"
      : "bg-gray-200 text-gray-800";

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-semibold ${color} whitespace-nowrap`}
    >
      {priority}
    </span>
  );
};

export default useGetPriorityChip;
