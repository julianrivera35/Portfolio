import { useTranslation } from "react-i18next";

const LanguageButton = () => {
    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <button className="group relative border border-gray-300 bg-white text-slate-500 text-2xl px-2 py-1 rounded min-w-[150px] font-semibold">
            {t("language.buttonLabel")}
            <div className="bg-stone-100 absolute top-full right-0 rounded-lg p-2 mt-1 min-w-[150px] shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200 font-normal flex flex-col gap-3">
                <a onClick={() => handleChangeLanguage("en")} className='hover:bg-stone-200/50 rounded-2xl py-1 px-2'> {t("language.english")} </a>
                <a onClick={() => handleChangeLanguage("es")} className='hover:bg-stone-200/50 rounded-2xl py-1 px-2'> {t("language.spanish")} </a>
            </div>
        </button>
    );

}

export default LanguageButton;