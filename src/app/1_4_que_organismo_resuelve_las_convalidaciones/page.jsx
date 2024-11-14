import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">
        <p>
          Las convalidaciones recogidas expresamente en los <strong>diferentes Anexos
          del <a
            href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274"
            className="text-blue-500 underline"
          >RD 1085/2020, de 9 de diciembre</a></strong> las resuelve la dirección del
          centro donde esté matriculado el alumno/a. Se <strong>resolverá negativamente
          aquellas solicitudes de su competencia que no aparezcan en los anexos
          anteriormente citados.</strong>
        </p>

        <p>
          Aquellas solicitudes que acrediten para convalidar <strong>una titulación
          universitaria o un título de FP1 o FP2</strong> las resuelve el <strong>Ministerio de
          Educación y Formación Profesional.</strong> Estas últimas convalidaciones se
          envían al centro y se trasladan al Ministerio. <strong className="underline">En ningún caso el
          alumnado podrá enviar directamente la solicitud de convalidación al
          Ministerio.</strong>
        </p>
      </div>
    </>
  );
}
