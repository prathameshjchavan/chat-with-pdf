import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between border-b bg-white p-5 shadow-sm">
      <Link href="/dashboard" className="text-2xl">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:block">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>
          
          {/* Upgrade Button */}
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
};

export default Header;
