import { User } from "@/type";
import { formatDateOfBirth } from "@/formatDateOfBirth";
import { motion } from "framer-motion";

export default function PersonalInformationSection({ user }: { user: User }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-2xl flex flex-col gap-6 p-8 w-full"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
    >
      <div className="flex flex-row w-full gap-2">
        <div className="min-h-full w-[6px] rounded-full bg-teal-500"></div>
        <h1 className="text-2xl font-medium text-teal-500">
          Personal Information
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">First Name</p>
          <p className="text-base font-medium text-white">{user.name.first}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Last Name</p>
          <p className="text-base font-medium text-white">{user.name.last}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Email</p>
          <p className="text-base font-medium text-white">{user.email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Date of Birth</p>
          <p className="text-base font-medium text-white">
            {formatDateOfBirth(user.dob.date.toString())}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Age</p>
          <p className="text-base font-medium text-white">{user.dob.age}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Phone Number</p>
          <p className="text-base font-medium text-white">{user.phone}</p>
        </div>
      </div>
    </motion.div>
  );
}
