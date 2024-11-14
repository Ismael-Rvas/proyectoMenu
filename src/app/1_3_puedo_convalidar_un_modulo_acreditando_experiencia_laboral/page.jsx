import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";

export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={13} />

<div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <p>
          <strong>Salvo el módulo de Formación en Centros de Trabajo</strong>{" "}
          (las &quot;prácticas&quot;), <strong>la respuesta es no</strong>. En general,
          <strong>
            no es posible convalidar un módulo acreditando experiencia laboral a
            través de un informe de vida laboral.
          </strong>
        </p>

        <p>
          Si alguna persona cree que con su experiencia profesional ha adquirido
          las competencias necesarias de un módulo concreto, debe acreditar la
          posesión de esas unidades de competencia bien mediante un
          <strong> certificado de profesionalidad</strong> o bien porque ha
          participado en un{" "}
          <a
            className="text-blue-500 underline"
            href="https://todofp.es/acreditacion-de-competencias.html"
          >
            procedimiento de acreditación de competencias profesionales{" "}
          </a>
          y así se lo han reconocido,
          <span className="underline">
            no a través de un certificado de vida laboral
          </span>
          .
          <strong>
            Tampoco serán válidos los resguardos de haber solicitado el
            certificado de profesionalidad, los diplomas o certificados de
            asistencia expedidos por el centro o entidad de formación u otros
            documentos justificativos distintos de los indicados.
          </strong>{" "}
          Estas convalidaciones se regulan en el anexo V.A del Real Decreto que
          crea el título que se está estudiando (en este anexo se indican las
          unidades de competencia que se adquieren al superar cada módulo
          profesional).
        </p>

        <p>
          Por tanto,<strong> las unidades de competencia debidamente acreditadas pueden
          ser aportadas para solicitar la convalidación de módulos profesionales
          según lo regulado en el anexo V.A del Real Decreto </strong>que regula cada
          título siempre que se aporte el <strong>certificado de profesionalidad</strong> o la
          <strong>certificación oficial de la acreditación de la Unidad de Competencia.</strong>
        </p>
      </div>
      <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg"
          width={300}
          height={300}
          alt="Imagen en Pixabay de Voltamax bajo CC"
        />
        </div>
    </>
  );
}
