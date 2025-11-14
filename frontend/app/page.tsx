"use client"

import { AppContext} from "./state/app-context";
import { useContext } from "react";

export default function Home() {
    const context = useContext(AppContext)

    return <div>
        <a href="/create">
                    <button>Create page</button>
                  </a>
                 { context.pages.map(page => <div key={page}>{page}</div>) }
    </div>
}
