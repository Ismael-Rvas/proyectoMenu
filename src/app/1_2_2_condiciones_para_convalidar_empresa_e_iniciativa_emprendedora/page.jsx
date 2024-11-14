import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export const metadata = {
  title:
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={7} />

      <div className="flex flex-col gap-4">
        <p>
          Para poder convalidar el módulo de&nbsp;
          <strong>Empresa e Iniciativa Emprendedora</strong>&nbsp;es necesario
          acreditar alguna de las siguientes condiciones:
        </p>
        <ItemLista>
          Tener&nbsp;
          <strong>
            aprobado el módulo de Empresa e Iniciativa Emprendedora de otro
            ciclo formativo
          </strong>
          , cualquiera que sea el grado, incluso en grados cruzados -medio o
          superior-.
        </ItemLista>
        <ItemLista>
          Tener&nbsp;
          <strong>
            aprobado el módulo de Administración, gestión y comercialización en
            la pequeña empresa
          </strong>
          &nbsp;(o con una denominación similar).
        </ItemLista>
        <ItemLista>
          <strong>Poseer el Título</strong>{" "}
          <strong>de Técnico en Gestión administrativa o Técnico </strong>
          <strong>superior en Administración y finanzas</strong>.
        </ItemLista>

        <table className=" mx-[10%] w-[80%] border-separate mt-2">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200">Modulo a convalidar</th>
              <th className="p-2 w-[60%] bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="15" className="p-2  bg-blue-200">
                Empresa e Iniciativa Emprendedora.(Cualquier ciclo formativo)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Administración, gestión y comercialización en la pequeña
                empresa. (Cualquier ciclo formativo)
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                Administración y gestión de un pequeño establecimiento
                comercial. Ciclo Comercio. (Comercio y Marketing)
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                Organización y gestión de una explotación agraria familiar Ciclo
                Trabajos Forestales y de Conservación del Medio Natural. (RD
                1713/1996, de 12 de julio). (Agraria) Ciclo Jardinería. (RD
                1714/1996, de 12 de julio). (Agraria) Ciclo Explotaciones
                Agrarias Extensivas. (RD 1715/1996, de 12 de julio) (Agraria)
                Ciclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12
                de julio). (Agraria) Ciclo Explotaciones Ganaderas. (RD
                1717/1996, de 12 de julio). (Agraria)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22
                de julio). (Administración y Gestión)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Administración, gestión y comercialización en la pequeña
                empresa. (Cualquier ciclo formativo)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Organización y gestión de una pequeña empresa de actividades de
                tiempo libre y socioeducativas. Ciclo Animación Sociocultural.
                (Servicios Socioculturales y a la Comunidad) Ciclo Animación de
                Actividades Físicas y Deportivas. (Actividades Físicas y
                Deportivas) Ciclo Animación Turística. (Hostelería y Turismo)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Organización y control en agencias de viajes. Ciclo Agencias de
                Viajes. (Hostelería y Turismo)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Administración de establecimientos de restauración. Ciclo
                Restauración. (Hostelería y Turismo)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Administración y gestión de una unidad/gabinete de
                Ortoprotésica. Ciclo Ortoprotésica. (Sanidad)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Organización, administración y gestión de una unidad/gabinete de
                prótesis dentales. Ciclo Prótesis Dentales. (Sanidad)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Administración y gestión de un gabinete audioprotésico. Ciclo
                Audioprótesis. (Sanidad)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Organización y gestión de una empresa agraria. Ciclo Gestión y
                Organización de los Recursos Naturales y Paisajísticos.
                (Agraria) Ciclo Gestión y Organización de Empresas
                Agropecuarias. (Agraria)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Ciclo completo de Administración y finanzas. (RD 1659/1994, de
                22 de julio). (Administración y Gestión)
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Técnico en Gestión Administrativa LOE. Ciclo completo
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                Técnico en Superior en Administración y Finanzas LOE. Ciclo
                completo
              </td>
            </tr>

            <tr>
              <th rowSpan="1" className="p-2  bg-blue-200">
                0402. Empresa e iniciativa emprendedora.
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Gestión económico-administrativa en agencias de viajes.
                Organización y control en agencias de viajes.
              </td>
            </tr>

            <tr>
              <th rowSpan="1" className="p-2  bg-blue-200">
                0863. Empresa e iniciativa emprendedora.
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Organización, administración y gestión de una unidad/gabinete de
                prótesis dentales.
              </td>
            </tr>

            <tr>
              <th rowSpan="1" className="p-2  bg-blue-200">
                Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo
                LOE)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo
                LOE)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
