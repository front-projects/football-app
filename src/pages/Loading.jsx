import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadImages } from "../util/front/loadImages";
import { imagesToLoad } from "../util/front/imagesToLoad";
import { useSelector } from "react-redux";
import LoadingStar from "../components/UI/LoadingStar";

export default function Loading() {
  const [isReady, setIsReady] = useState();
  const [error, setIsError] = useState();
  const [imagesReady, setImagesReady] = useState();
  const userInfo = useSelector((state) => state.auth);

  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    loadImages(imagesToLoad)
      .then(() => {
        setImagesReady(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    if (imagesReady && userInfo && userInfo !== "error") {
      setIsReady(true);
    } else if (userInfo == "error" || !userInfo) {
      setIsError(true);
    }
    console.log(userInfo);
  }, [imagesReady, userInfo]);

  return (
    <>
      <main
        className="relative flex items-center justify-center flex-col w-screen h-screen"
        id="loading-layout"
      >
        <div className="text-center w-full">
          {error ? (
            <div className="text-red-500 px-4 text-[24px] bg-gray-600/70">
              Something went wrong. Try to reload app
            </div>
          ) : (
            <div className="text-xl w-full text-center flex flex-col items-center justify-center gap-4">
              <LoadingStar />
              <p className="text-[36px] mb-4"> Loading ...</p>
              {/* <RingLoader color="white" size={70} /> */}
            </div>
          )}
        </div>
      </main>

      {isReady && <FallbackNavigate to="/menu/home" />}
      {/* <FallbackNavigate to="/menu/home" /> */}
    </>
  );
}
