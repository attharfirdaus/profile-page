"use client";

import AddressSection from "@/components/AddressSection";
import PersonalInformationSection from "@/components/PersonalInformationSection";
import ProfileSection from "@/components/ProfileSection";
import { User } from "@/type";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setUser(data.results[0]);
      } catch (err) {
        console.error("Failed to load user data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 min-h-screen flex items-center justify-center text-white text-lg">
        Loading user data...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-gray-800 min-h-screen flex items-center justify-center text-red-500">
        Failed to load user data.
      </div>
    );
  }

  return (
    <div className="bg-[url(/profile-background.svg)] min-h-screen flex flex-col gap-6 items-center justify-start py-10 px-80">
      <ProfileSection user={user} />
      <PersonalInformationSection user={user}/>
      <AddressSection user={user}/>
    </div>
  );
}
