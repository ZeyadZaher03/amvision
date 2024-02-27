import Head from "next/head";
import { Hero } from "@/components/hero/hero";
import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/footer/footer";
import { AboutUs } from "@/components/about-us/about-us";
import { Services } from "@/components/services/services";
import { ScheduleAnAppointment } from "@/components/schedule-an-appointment/schedule-an-appointment";

export default function Home() {
  return (
    <>
      <Head>
        <title>AM VISION | Empower you brand</title>
        <meta
          name="description"
          content="Explore AmVision: Your ultimate destination for elevating brands and businesses to new heights. Uncover cutting-edge strategies and data-driven insights meticulously crafted to propel your brand's identity and business growth. Our platform offers tailored solutions designed to cultivate engagement, foster loyalty, and drive profitability, ensuring your brand stands out in today's competitive market. Join us on the journey towards unparalleled success and distinction in the dynamic realm of commerce. Embrace the vision, embrace success, with AmVision."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Hero />
        <Services />
        <ScheduleAnAppointment />
        <AboutUs />
        <Footer />
      </main>
    </>
  );
}
