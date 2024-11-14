import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">
        <p>
          La documentación a aportar varía en función del módulo Inglés que se
          desee convalidar. Siempre deben ser estudios cursados y superados de
          lengua inglesa.
        </p>

        <table className=" mx-[10%] w-[80%] border-separate mt-2">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200">Modulo a convalidar</th>
              <th className="p-2 w-[60%] bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="10" className="p-2  bg-blue-200">
                0156 Inglés
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Lengua Extranjera LOGSE (duración de 65 horas, según el Real
                Decreto que establece el título de formación profesional y sus
                enseñanzas mínimas) Cuando la lengua extranjera cursada y
                superada sea inglés.
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                Lengua Extranjera LOGSE o de la C.A. Cuando la lengua extranjera
                cursada y superada sea inglés
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                Módulos Profesionales de Lengua Extranjera LOGSE de ciclos
                formativos de Grado Superior, en cualquiera de sus
                denominaciones, siempre que sea la misma que la que se desea
                convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado del Ciclo Elemental, de Inglés, de la Escuela
                Oficial de Idiomas. (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela
                Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado de Aptitud de Inglés de la Escuela Oficial de
                Idiomas. (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado de Nivel Avanzado (B2), o superior, de Inglés de la
                Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Título de Grado, o equivalente, en Filología Inglesa.
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Título de Grado, o equivalente, en Traducción e Interpretación
                (Inglés).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                0179 Inglés.
              </td>
            </tr>

            <tr>
              <th rowSpan="7" className="p-2  bg-blue-200">
                0179 Inglés
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Lengua Extranjera LOGSE (Inglés).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Lengua Extranjera (duración de 90 horas, según reales decretos
                por los que se establecen los títulos de formación profesional y
                sus enseñanzas mínimas) Cuando la lengua extranjera cursada y
                superada sea inglés
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Lengua Extranjera en Comercio Internacional. Cuando la lengua
                extranjera cursada y superada sea inglés.
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado de Aptitud de Inglés de la Escuela Oficial de
                Idiomas. (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Certificado de Nivel Avanzado (B2), o superior, de Inglés de la
                Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Título de Grado, o equivalente, en Filología Inglesa
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Título de Grado, o equivalente, en Traducción e Interpretación
                (Inglés).
              </td>
            </tr>
          </tbody>
        </table>

        <div className="border-2 rounded-2xl border-[#66521D] bg-yellow-100 p-7 flex flex-col">
          <div className="flex">
            <img
              src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png"
              alt="foliio"
            />
            <h1 className="text-3xl text-[#66521D] ml-4 mt-3 font-bold">Para saber más</h1>
          </div>
          <p className="mt-8 mb-4 text-[#66521D] ">Por tanto, no es posible, <strong className="font-bold bg-yellow-300 border-b-2 border-[#66521D]">EN NINGÚN CASO</strong>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
      </div>
    </>
  );
}
