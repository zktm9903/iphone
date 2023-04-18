import { Preview, ShootBtn, View } from "./components";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { albumState } from "../../recoil/atom";

const CameraApp = () => {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const setPictures = useSetRecoilState(albumState);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setPictures((e) => [imageSrc, ...e]);
    }
  }, [webcamRef]);

  const [flicker, setFlicker] = useState(false);

  return (
    <div className="flex justify-center w-full h-full bg-black rounded-[50px] relative">
      <View flicker={flicker}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        {url && <img src={url} />}
      </View>
      <Preview />
      <ShootBtn capture={capture} setFlicker={setFlicker} />
    </div>
  );
};

export default CameraApp;
