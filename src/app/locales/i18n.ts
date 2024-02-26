"use server";

import i18n from "i18next";
import { headers } from "next/headers";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "COMING_SOON": "Coming soon...",
            "TEXT_BEFORE": "In the mean time, check out our",
            "TEXT_AFTER": "or contact us via"
        }
    },
    nl: {
        translation: {
            "COMING_SOON": "Binnenkort online...",
            "TEXT_BEFORE": "Bekijk in de tussentijd onze ",
            "TEXT_AFTER": "of neem contact met ons op via"
        }
    }
};

async function initLanguage() {
    const headersList = headers();
    const domain = headersList.get("x-forwarded-host") || ""
    const locale = (domain.includes(".nl") ? "nl" : "en")
    i18n.changeLanguage(locale)
}


i18n.init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});
initLanguage()