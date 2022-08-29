export const SERVICES_TYPE = {
  covid: 'Rapid Antigen Test',
  pcr_covid: 'Rapid RT-PCR Test',
  urgent_pcr_covid: 'Urgent RT-PCR Test',
  rapid_antibody_test: 'Rapid COVID Antibody Test',
  wellness_visit: 'Check-up/Wellness visit',
  std_visit: 'STD Visit',
  common: 'Sick Visit'
}

export type ServiceType = {
  covid: string
  pcr_covid: string
  urgent_pcr_covid: string
  rapid_antibody_test: string
  wellness_visit: string
  std_visit: string
  common: string
}
