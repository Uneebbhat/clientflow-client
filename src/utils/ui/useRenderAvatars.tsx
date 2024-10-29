import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const useRenderAvatars = (assignedUsers: { name: string; image: string }[]) => {
  const MAX_AVATARS = 3;
  const totalUsers = assignedUsers.length;

  return (
    <div className="flex items-center">
      {assignedUsers.slice(0, MAX_AVATARS).map((user, index) => (
        <Avatar
          key={index}
          className={`-ml-2 ${
            index > 0 ? "z-10" : ""
          } transition-transform w-6 h-6`}
        >
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      ))}
      {totalUsers > MAX_AVATARS && (
        <span className="ml-2 text-gray-500">+{totalUsers - MAX_AVATARS}</span>
      )}
    </div>
  );
};

export default useRenderAvatars;
