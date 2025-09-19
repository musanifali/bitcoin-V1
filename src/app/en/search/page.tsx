import { Metadata } from 'next'
import SearchPage from '@/components/pages/SearchPage'

export const metadata: Metadata = {
  title: 'Search - Bitcoin Holding',
  description: 'Search for Bitcoin Holding information, guides, and resources',
}

export default function Search() {
  return <SearchPage />
}
