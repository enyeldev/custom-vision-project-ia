import { useState } from "react";
import { useUpload } from "./hooks/useUpload";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [infoVisible, setInfoVisible] = useState(false);

  const {
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
  } = useUpload();

  return (
    <main>
      <header className="w-screen bg-orange-600 p-2 flex justify-center">
        <div className="w-full max-w-screen-md">
          <h1 className="text-white font-bold text-2xl">Payless</h1>
        </div>
      </header>

      <section className="w-full py-10 px-4 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="calzado" className="font-bold">
            Tipo de calzado:
          </label>
          <div className="flex items-center gap-2">
            <select
              name=""
              id="calzado"
              className="p-1 rounded-md border-none outline-orange-600"
              onChange={({ target }) => setTypeCalzado(target.value)}
              value={typeCalzado}
            >
              <option value="">Seleccione el tipo de calzado</option>
              <option value="sandalias">Sandalias</option>
              <option value="tenis">Tenis</option>
              <option value="zapatos">Zapatos</option>
              <option value="tacones">Tacones</option>
              <option value="botas">Botas</option>
            </select>
            <div
              className="group flex items-center relative"
              onMouseEnter={() => setInfoVisible(true)}
              onMouseLeave={() => setInfoVisible(false)}
            >
              <IoIosInformationCircleOutline size={20} />
              {infoVisible && (
                <div className="animate-display absolute left-7 border rounded-md border-black p-2">
                  <p className="text-xs w-48">
                    Debe seleccionar el tipo de calzado y subir una imagen del
                    mismo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <input
          type="file"
          name=""
          id=""
          className="hidden"
          ref={inputRef}
          onChange={handleChange}
          accept="image/*"
        />

        <div className=" w-full max-w-screen-md h-72  border-2  border-orange-600 border-dashed bg-white rounded-md flex items-center">
          {statusUpload == "empty" ? (
            <div
              className="w-full flex flex-col items-center justify-center cursor-pointer"
              onClick={handleClick}
            >
              <IoCloudUploadOutline color="#ea580c" size={50} />
              <h1 className="font-bold text-orange-600">Cargar imagen</h1>
            </div>
          ) : statusUpload == "loading" ? (
            <div className="w-full h-full py-20 flex justify-center items-center">
              <TailSpin color="#ea580c" />
            </div>
          ) : (
            <div className="w-full h-full p-2 relative">
              <div
                className="absolute w-7 h-7 flex justify-center items-center top-1 right-1 bg-gray-300 rounded-full cursor-pointer"
                onClick={handleDelteImg}
              >
                <IoIosClose size={20} />
              </div>
              <img
                src={urlImg}
                alt=""
                className=" w-full h-full object-contain rounded-md"
              />
            </div>
          )}
        </div>

        <button
          className="bg-orange-600 text-white font-bold px-16 py-2 rounded-md disabled:bg-orange-400 disabled:cursor-not-allowed"
          onClick={submit}
          disabled={disableButton}
        >
          Verificar
        </button>
      </section>
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
