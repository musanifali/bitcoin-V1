import type { ElementType } from 'react'

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned'

export interface ChainData {
  name: string
  tagline: string
  description: string
  fullDescription: string
  logo: string
  color: string
  gradient: string
  features: Array<{
    icon: ElementType
    title: string
    description: string
  }>
  stats: Array<{
    label: string
    value: string
    change?: string
  }>
  useCases: Array<{
    title: string
    description: string
    icon: ElementType
  }>
  technology?: {
    title: string
    description: string
    specs: Array<{
      label: string
      value: string
    }>
  }
  roadmap?: Array<{
    quarter: string
    title: string
    status: RoadmapStatus
    items: string[]
  }>
  team?: {
    title: string
    description: string
    members: Array<{
      name: string
      role: string
      avatar: string
    }>
  }
  partnerships?: Array<{
    name: string
    logo: string
    category: string
  }>
  security?: {
    audits: Array<{
      company: string
      date: string
      status: string
    }>
    features: string[]
  }
  faq?: Array<{
    question: string
    answer: string
  }>
}
