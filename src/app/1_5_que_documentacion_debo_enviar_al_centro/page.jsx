import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";
import Image from "next/image";

export const metadata = {
  title: "1.5.- ¿Qué documentación debo enviar al centro?",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={15} />

      <div className="flex flex-col gap-4">
        <p>
          Debes presentar la solicitud de convalidación de módulos
          profesionales, acompañada de la documentación establecida
          correspondiente, en el centro.{" "}
          <strong>
            En ningún caso puedes enviar por tu cuenta la solicitud al
            Ministerio.
          </strong>
        </p>

        <ItemLista>
          <strong>Solicitud de convalidación</strong> que encuentras en este
          <a
            href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos"
            className="text-blue-500 underline"
          >
            {" "}
            enlace (ver &quot;Impreso solicitud convalidación módulos profesionales&quot;)
          </a>
          . En ese documento es imprescindible que cumplimentes todos los
          apartados. En este{" "}
          <a
            href="https://www.juntadeandalucia.es/educacion/secretariavirtual/consultas/#FORM_PROF"
            className="text-blue-500 underline"
          >
            enlace
          </a>{" "}
          puedes consultar los módulos de cada ciclo impartido con{" "}
          <strong>
            su nombre y el código exacto. Para ello, debes desplegar dentro de
            cada centro, el apartado &quot;Módulos ofertados de este ciclo&quot;. Recuerda
            que el plazo para enviar la solicitud de convalidación concluye a
            finales de octubre.
          </strong>
        </ItemLista>

        <ItemLista>
          <strong>Fotocopia del Documento Nacional de Identidad</strong> (DNI) o
          fotocopia del Pasaporte o de la Tarjeta de Extranjero/a o del Permiso
          de Residencia (temporal o definitivo) o del Visado de Estudios.
        </ItemLista>

        <ItemLista>
          Además, debe incluirse la siguiente documentación,{" "}
          <strong>ya sea original o fotocopia compulsada</strong> (recuerda que
          puedes compulsar un documento en cualquier Administración Pública que
          cuente con registro simplemente presentando la copia y enseñando el
          original):
        </ItemLista>

        <ItemLista interior={true}>
          <strong>
            Certificación académica oficial expedida por el centro docente donde
            has cursado los estudios que alegas.
          </strong>
          En el caso de estudios universitarios, es obligatorio presentar
          original o fotocopia compulsada de la certificación académica oficial,
          con indicación de las horas o créditos de cada materia superada.
        </ItemLista>

        <ItemLista interior={true}>
          <strong>
            En el caso de alegar un título que acredite la formación previa
            alegada, debes presentar el título oficial o resguardo de haberlo
            solicitado.
          </strong>
          En el caso de que desees convalidar alegando haber cursado otro ciclo
          formativo, es suficiente con el certificado académico de notas y no es
          necesario que adjuntes también la copia del título o el resguardo de
          haberlo solicitado.
        </ItemLista>

        <ItemLista interior={true}>
          <strong>
            En el caso de alegar enseñanzas universitarias, además de la
            certificación académica oficial con indicación de las horas o
            créditos de cada materia superada, deberás presentar
          </strong>
          <strong className="underline">
            los programas de las asignaturas que haya cursado sellados
          </strong>
          <span className="underline">
            (el sello debe ser original y no vale una fotocopia del programa en
            el que el sello no sea original) por el centro universitario.
          </span>
          Estos programas deben recoger la
          <strong>
            duración y contenidos teóricos y prácticos estudiados.
          </strong>
        </ItemLista>

        <ItemLista interior={true}>
          <strong>
            En el caso de alegar unidades de competencia oficialmente
            acreditadas, certificación oficial de la acreditación de la Unidad
            de Competencia o Certificado de profesionalidad expedido por la
            Administración Laboral competente, obtenido de acuerdo con lo
            establecido en el RD 34/2008, de 18 de enero.
          </strong>
        </ItemLista>

        <p>
          <strong>Aunque ya se ha dicho anteriormente, se recuerda que</strong>{" "}
          <strong className="underline">
            todos los documentos (excepto el DNI y el documento de la solicitud
            de convalidación) tienen que ser original o copia compulsada.
            También se recuerda que el centro no puede tramitar ante el
            Ministerio de Educación ninguna solicitud que no venga acompañada de
            la documentación establecida.
          </strong>
        </p>

        <p>
          <strong className="underline">
            El solicitante deberá estar matriculado en los módulos profesionales
            que solicita convalidar y haber satisfecho los derechos de matrícula
            en las enseñanzas para las cuales solicita la convalidación.
          </strong>
        </p>

        <p>
          <strong>
            Las convalidaciones entre estudios universitarios y de Formación
            Profesional se podrán solicitar cuando estos últimos pertenezcan al
            espacio de la educación superior
          </strong>
          . Además, el número de módulos profesionales de los ciclos de grado
          superior convalidados
          <strong>
            no podrá superar el 60% de la totalidad de créditos ECTS
          </strong>
          establecidos en el real decreto por el que se establece el título
          Técnico Superior y se fijan los aspectos básicos del currículo,
          siempre que se aporten
          <strong>
            enseñanzas universitarias que estén relacionadas con el campo de
            conocimiento y exista similitud entre las competencias,
            conocimientos y resultados de aprendizaje.
          </strong>
        </p>

        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/documents-158461_960_720.png"
          width={300}
          height={300}
          alt="Carpeta con documentos"
          className="flex self-center border-2 border-black"
        />
      </div>
    </>
  );
}
