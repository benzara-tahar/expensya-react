import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
export type Invoice = {
   id: string;
   name: string;
   amount: number;
}

export interface InvoiceState {
   currentInvoice: Invoice | null;
   invoices: Invoice[];
   delete: (id: string) => void

 }


const mockData = [
   { id: "a1b2c3", name: "John Doe", amount: 1250.75 },
   { id: "d4e5f6", name: "Jane Smith", amount: 980.50 },
   { id: "g7h8i9", name: "Bob Johnson", amount: 1750.25 },
   { id: "j0k1l2", name: "Alice Brown", amount: 500.00 },
   { id: "m3n4o5", name: "Charlie Davis", amount: 2100.80 },
   { id: "p6q7r8", name: "Eva Wilson", amount: 1500.60 },
   { id: "s9t0u1", name: "Frank Miller", amount: 750.30 },
   { id: "v2w3x4", name: "Grace Lee", amount: 3000.00 },
   { id: "y5z6a7", name: "Henry Taylor", amount: 1800.90 },
   { id: "b8c9d0", name: "Ivy Martinez", amount: 950.45 }
 ];




export const useInvoiceStore = create<InvoiceState>()(
   devtools(
     persist(
      (set) => ({
         currentInvoice : null,
         invoices: mockData,
         delete: (id: string) => set((state)=> ({...state, invoices: state.invoices.filter(i=>i.id !==id  ) }))
      }),
      { name: 'invoice_store' },
   ), 
   ),
 )