import React from "react";
import {Link} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex gap-4">
      
      <Link
        isExternal
        href="https://github.com/hghyhghy"
        showAnchorIcon
      >
        Head To our Projects
      </Link>
    </div>
  );
}
