"use client"

import { useI18n } from "./i18n"
import { 
  personalDataEs, 
  professionalExperienceEs, 
  educationDataEs, 
  projectsDataEs,
  publicationsDataEs,
  interestAreasEs,
  skillsTyping as skillsTypingEs,
  skillsDataEs,
} from "./data-es"
import { 
  personalDataEn, 
  professionalExperienceEn, 
  educationDataEn, 
  projectsDataEn,
  publicationsDataEn,
  interestAreasEn,
  skillsTyping as skillsTypingEn,
  skillsDataEn,
} from "./data-en"

export function useLocalizedData() {
  const { locale } = useI18n()
  
  const isEs = locale === 'es'
  
  const personalData = isEs ? personalDataEs : personalDataEn
  const professionalExperience = isEs ? professionalExperienceEs : professionalExperienceEn
  const educationData = isEs ? educationDataEs : educationDataEn
  const projectsData = isEs ? projectsDataEs : projectsDataEn
  const publicationsData = isEs ? publicationsDataEs : publicationsDataEn
  const interestAreas = isEs ? interestAreasEs : interestAreasEn
  const skillsTyping = isEs ? skillsTypingEs : skillsTypingEn
  const skillsData = isEs ? skillsDataEs : skillsDataEn
  
  return {
    personalData,
    professionalExperience,
    educationData,
    projectsData,
    publicationsData,
    interestAreas,
    skillsTyping,
    skillsData,
  }
}
