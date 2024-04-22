import React from "react";

function loadingPage() {
  return (
    <div className="bg-blueFirst min-h-screen ">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-white text-center text-2xl">
          Cargando datos......
        </h1>
      </div>
    </div>
  );
}

export default loadingPage;

// function loadingPage() {
//   return (
//     <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//       Cargando Datos....
//     </div>
//   );
// }
