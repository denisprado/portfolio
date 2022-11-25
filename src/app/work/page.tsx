import { Suspense } from "react";
import Loading from "./loading";
import Modal from "./modal";
import supabase from "@utils/supabase";

export default async function Works() {
  const { data: work, error } = await supabase?.from("work").select("*");
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-36 bg-base-300 font-serif">Work</div>
      <ul>
        {work?.map((w) => (
          <li key={w.id} className={"flex flex-row gap-4"}>
            <h2>{w.title}</h2>
            <p>{w.description}</p>
          </li>
        ))}
      </ul>
      <Modal />
    </Suspense>
  );
}
