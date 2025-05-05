import { getUser } from "@/data/user";
import Image from "next/image";

export default async function UserSection() {
  const { name, imageUrl } = await getUser();
  return (
    <div className="flex justify-around items-center">
      <Image
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={
          imageUrl ||
          `https://flowbite.com/docs/images/people/profile-picture-5.jpg`
        }
        alt="Avatar"
        width={40}
        height={40}
      />
      <h4 className="font-semibold">{name}</h4>
    </div>
  );
}
