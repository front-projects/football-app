import { useState } from "react";
import { EditIcon } from "../UI/icons";

export default function HomeName() {
  const [name, setName] = useState();

  return (
    <div className="flex items-end gap-[10px] mt-[25px]">
      <p className="text-white/40 text-[14px]">Nick Name</p>
      <div className="h-max ">
        <EditIcon />
      </div>
    </div>
  );
}
