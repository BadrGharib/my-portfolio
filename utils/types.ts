export interface CardExperianceInfo {
  companyTitle: string
  companyLogo: string
  roleTitle: string
  roleInfo: string[]
  color: string
  date: string
  companyLink: string
}

export interface CardInfo {
  imgs?: string[]
  title: string
  link?: string
  logo?: string
  smallTitle?: string
  description?: string
}

export interface ISkillCard {
  title: string
  icon: string
  percent: number
  group: string
}
export interface IItem {
  title: string
  smallTitle?: string
}
