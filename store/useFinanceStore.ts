
'use client'

import { create } from 'zustand'

export const useFinanceStore = create(() => ({
  totalDebt: 27000000,
  cards: [
    {
      id: 1,
      bank: 'VPBank',
      debt: 18000000,
      limit: 50000000,
      dueDate: '25/05'
    },
    {
      id: 2,
      bank: 'Techcombank',
      debt: 9000000,
      limit: 30000000,
      dueDate: '18/05'
    }
  ]
}))
