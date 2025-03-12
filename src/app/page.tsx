
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Impulsa tus Ventas con Webs Inteligentes"
              subheadline="Websites profesionales, optimizadas con IA y enfocadas en la conversión, ideales para emprendedores y empresas online"
              cta1="Comienza Gratis Hoy"
            />

            <How
              step1Title="Empieza con nosotros"
              step1Desc="Envíanos tus ideas e información sobre tu negocio"
              step2Title="Creación y optimización"
              step2Desc="Construimos y optimizamos tu website basado en ventas"
              step3Title="Lanza tu sitio"
              step3Desc="Tu nuevo sitio de ventas eficiente está listo en días"
            />

            <Aboutus
              headline="Webgo: Tu socio en la creación de sitios web profesionales"
              subheadline="Descripción"
              beneficio1="Diseño optimizado para ventas"
              beneficio2="Webgo se enfoca en lo que realmente importa: generar más ventas para tu negocio online."
              beneficiotitulo1="Rediseño para mejorar la conversión"
              beneficiotitulo2="Si tu web actual no es efectiva, Webgo la rehace y la optimiza para vender. No más sitios web mal hechos."
            />

            <Services
              heading="Acelera tus Ventas Online con una Web Optimizada"
              description="Desbloquea el verdadero potencial de tu negocio online con sitios web construidos para convertir visitas en ventas. Sin importar si estás comenzando o ya tienes una web, nuestros rediseños agregan valor y eficacia a tu presencia en línea."
              services={[{"name":"Creacion de Websites","icon":"web","description":"Sitios web hechos a medida, optimizados para atraer y convertir clientes."},{"name":"Website Gratis","icon":"gift","description":"Empieza tu viaje online con una web gratuita e inteligente."},{"name":"Rediseno de Websites","icon":"refresh","description":"Transformamos tu web existente en una máquina de ventas online."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[]}
            />

            <BookAppointment
              heading="Conviértase en un gigante online con Webgo"
              description="Salta a la cima con sitios web optimizados para SEO. Empieza gratis, crece sin límites."
            />
<Footer />
    </main>
  );
}
    