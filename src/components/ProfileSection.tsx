import Image from "next/image";
import Iconify from "./Iconify";
import { User } from "@/type";

export default function ProfileSection({ user }: { user: User }) {
  return (
    <div className="bg-black rounded-2xl flex flex-col gap-6 p-8 w-full">
      <div className="flex flex-row w-full gap-2">
        <div className="min-h-full w-[6px] rounded-full bg-teal-500"></div>
        <h1 className="text-2xl font-medium text-teal-500">Profile</h1>
      </div>
      <div className="flex flex-row gap-6 w-full items-center">
        <Image
          src={user.picture.medium}
          alt="Profile Photo"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full"
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-1 items-center">
            <p className="text-2xl font-medium text-white">
              {user.name.first} {user.name.last}
            </p>
            <Iconify
              icon={
                user.gender === "female"
                  ? "tabler:gender-female"
                  : "tabler:gender-male"
              }
              className={`${
                user.gender === "female" ? "text-pink-500" : "text-blue-500"
              } text-[30px]`}
            />
          </div>
          <div className="flex flex-row gap-6 w-full">
            <div className="flex flex-col gap-1 bg-gray-900 rounded-xl py-2 px-4 w-full">
              <p className="text-sm font-medium text-gray-400">ID</p>
              <p className="text-base font-normal text-white">
                {user.id.value ? user.id.value : "-"}
              </p>
            </div>
            <div className="flex flex-col gap-1 bg-gray-900 rounded-xl py-2 px-4 w-full">
              <p className="text-sm font-medium text-gray-400">Username</p>
              <p className="text-base font-normal text-white">
                {user.login.username}
              </p>
            </div>
            <div className="flex flex-col gap-1 bg-gray-900 rounded-xl py-2 px-4 w-full">
              <p className="text-sm font-medium text-gray-400">City, Country</p>
              <p className="text-base font-normal text-white">{`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
