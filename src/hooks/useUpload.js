import { useRef, useState } from "react";

import { toast } from "react-hot-toast";
import axios from "axios";

export const useUpload = () => {
  const inputRef = useRef();
  const [urlImg, setUrlImg] = useState("");
  const [statusUpload, setStatusUpload] = useState("empty");
  const [typeCalzado, setTypeCalzado] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = async (e) => {
    const fileUpload = e.target.files[0];
    const isImage = fileUpload.type.split("/")[0];

    if (isImage !== "image") {
      toast.error("Solo puede subir imagenes.");
      e.target.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", fileUpload);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("api_key", import.meta.env.VITE_API_KEY);

    try {
      setStatusUpload("loading");

      const respuesta = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_NAME_CLOUDINARY
        }/image/upload`,
        formData
      );

      e.target.value = "";
      setStatusUpload("loaded");
      setUrlImg(respuesta.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelteImg = () => {
    setStatusUpload("empty");
    setUrlImg("");
  };

  const submit = async () => {
    if (typeCalzado === "" || urlImg === "") {
      toast.error("Debe seleccionar un calzado y subir una imagen.");
      return;
    }

    try {
      setDisableButton(true);
      toast.loading("Validando imagen...");
      const respuesta = await axios.post(
        import.meta.env.VITE_URL_AI,
        { Url: urlImg },
        {
          headers: {
            "Prediction-Key": import.meta.env.VITE_PREDICTION_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(respuesta);

      toast.remove();

      if (typeCalzado == respuesta.data.predictions[0].tagName) {
        toast.success("Validacion completada.");
        setTimeout(() => {
          toast.remove();
          toast("Puede pasar a devovler el producto.");
        }, 2000);
        resetStates();
        return;
      }

      if (respuesta.data.predictions[0].tagName == "no calzado") {
        toast.error("La imagen no es un calzado");
        resetStates();
        return;
      }

      toast.error("La imagen no concuerda con el tipo de calzado seleccioando");
      resetStates();
    } catch (error) {
      console.log(error);
    }
  };

  const resetStates = () => {
    setDisableButton(false);
    setTypeCalzado("");
    setUrlImg("");
    setStatusUpload("empty");
  };

  return {
    handleClick,
    handleChange,
    inputRef,
    statusUpload,
    urlImg,
    handleDelteImg,
    setTypeCalzado,
    submit,
    disableButton,
    typeCalzado,
  };
};
