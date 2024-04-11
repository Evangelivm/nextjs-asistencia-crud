import React from "react";

function page() {
  return (
    <div className="bg-blueFirst min-h-screen ">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-white text-center lg:text-3xl sm:text-2xl">
          Indicadores
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellowFirst">
                  2.7K
                </h2>
                <p className="leading-relaxed text-white">
                  Participantes en Compañias
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellowFirst">
                  1.8K
                </h2>
                <p className="leading-relaxed text-white">Confirmados</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellowFirst">
                  35
                </h2>
                <p className="leading-relaxed text-white">Contactados</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellowFirst">
                  4
                </h2>
                <p className="leading-relaxed text-white">Cancelados</p>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-10">
          <h2 className="text-white text-center mb-3 lg:text-2xl sm:text-xl">
            Sin Compañia Asignada
          </h2>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              {/* Encabezado de la tabla */}
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Compañia
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Nombres
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Apellidos
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Edad
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Estaca
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Barrio
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-center mb-3 lg:text-2xl sm:text-xl">
            Cancelados
          </h2>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              {/* Encabezado de la tabla */}
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Compañia
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Nombres
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Apellidos
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Edad
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Estaca
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Barrio
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
