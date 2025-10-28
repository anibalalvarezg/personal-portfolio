"use client"

import { useI18n } from "./i18n"
import { personalDataEs, professionalExperienceEs, educationDataEs, interestAreasEs } from "./data-es"
import { personalDataEn, professionalExperienceEn, educationDataEn, interestAreasEn } from "./data-en"

export function useLocalizedData() {
  const { locale } = useI18n()
  
  const personalData = locale === 'es' ? personalDataEs : personalDataEn
  const professionalExperience = locale === 'es' ? professionalExperienceEs : professionalExperienceEn
  const educationData = locale === 'es' ? educationDataEs : educationDataEn
  const interestAreas = locale === 'es' ? interestAreasEs : interestAreasEn
  
  return {
    personalData,
    professionalExperience,
    educationData,
    interestAreas
  }
}

