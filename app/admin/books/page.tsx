import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full rounded-2xl bg-gray-900 p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin hover:bg-primary-admin/65" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
      </div>
    </section>
  );
};

export default Page;