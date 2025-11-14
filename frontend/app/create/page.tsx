"use client"

import { AppContext} from "../state/app-context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
    const context = useContext(AppContext)
    const router = useRouter()

    const onClick = () => {
        context.setPages([...context.pages, `page${context.pages.length + 1}`])
        router.push("/")
    }

      // We should have a dropdown for all available page templates to optionally
      // select a template to use.
  return <div>
      <h1>Create a new page</h1>
      <button onClick={onClick}>Create</button>
  </div>
}