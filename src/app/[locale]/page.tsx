import logo from "../../../public/logo.jpg";
import { useTranslations } from "next-intl";

export default function Home() {
  
  const t = useTranslations('Index')
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <div className="flex flex-col m-auto w-3/4 md:w-1/2 lg:w-1/3 text-center gap-y-8">
        <img className="w-full" src={logo.src}/>
        <p className="text-3xl md:text-5xl text-blue-darkest font-bold">{t("COMING_SOON")}</p>
        <p className="text-md md:text-xl text-blue-darkest">{t("TEXT_BEFORE")} <a className="text-orange" rel="noreferrer" target="_blank" href="https://www.instagram.com/personal_online_swim_coach/">instagram</a> {t("TEXT_AFTER")} <a className="text-orange" rel="noreferrer" target="_blank" href="mailto:info@personalonlineswimcoach.com">info@personalonlineswimcoach.com</a>.</p>
      </div>
    </main>
  );
}
