import { useState } from "react";
import { EditIcon } from "../UI/icons";
import { useSelector } from "react-redux";

export default function HomeName() {
  const username = useSelector((state) => state.auth.username);
  const [name, setName] = useState(username);

  return (
    <div className="flex items-end gap-[10px] mt-[25px]">
      <p className="text-white/40 text-[14px]">{name}</p>
      <div className="h-max ">
        <EditIcon />
      </div>
    </div>
  );
}
