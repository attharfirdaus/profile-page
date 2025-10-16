import { User } from "@/type";
import { motion } from "framer-motion";

export default function AddressSection({ user }: { user: User }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-2xl flex flex-col gap-6 p-8 w-full"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
    >
      <div className="flex flex-row w-full gap-2">
        <div className="min-h-full w-[6px] rounded-full bg-teal-500"></div>
        <h1 className="text-2xl font-medium text-teal-500">Address</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Street</p>
          <p className="text-base font-medium text-white">
            {user.location.street.name}, {user.location.street.number}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">City</p>
          <p className="text-base font-medium text-white">
            {user.location.city}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">State</p>
          <p className="text-base font-medium text-white">
            {user.location.state}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Country</p>
          <p className="text-base font-medium text-white">
            {user.location.country}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-gray-500">Postcode</p>
          <p className="text-base font-medium text-white">
            {user.location.postcode}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
