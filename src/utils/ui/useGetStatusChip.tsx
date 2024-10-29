const useGetStatusChip = (status: string) => {
  const color =
    status === "In Progress"
      ? "bg-blue-200 text-blue-800"
      : status === "Completed"
      ? "bg-green-200 text-green-800"
      : "bg-gray-200 text-gray-800";

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-semibold ${color} whitespace-nowrap sm:text-xs`}
    >
      {status}
    </span>
  );
};

export default useGetStatusChip;
