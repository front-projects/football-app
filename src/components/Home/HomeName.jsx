import { useState } from "react";
import { EditIcon } from "../UI/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../util/back/requests";
import ErrorAlert from "../UI/errorAlert";
import { setUser } from "../../store/auth-slice";

export default function HomeName() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.username);
  const [isEditing, setIsEditing] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  const submitEditing = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    const response = await updateUserName(user.telegramId, name);
    if (response) {
      dispatch(setUser({ ...user, username: name }));
      setIsEditing(false);
      setIsLoading(false);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2500);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isError && <ErrorAlert>Something went wrong. Try again</ErrorAlert>}
      <div
        className="flex items-center gap-[10px] mt-[25px]"
        onClick={() => setIsEditing(true)}
      >
        {isEditing ? (
          <input
            type="text"
            value={name}
            autoFocus
            className="max-w-[100px]"
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <p className="text-white/40 text-[18px]">{name}</p>
        )}

        <div className="h-max ">
          {isEditing ? (
            <div className="flex gap-2">
              <div
                className="bg-[#E7FF2B] rounded-[28px] text-[#37C100] px-2"
                onClick={submitEditing}
              >
                {isLoading ? "Saving..." : "Save"}
              </div>
              <div
                className="border-[#37C100] border-2 rounded-[28px] text-white px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(false);
                  setName(user.username);
                }}
              >
                Cancel
              </div>
            </div>
          ) : (
            <div className="mb-2">
              <EditIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
