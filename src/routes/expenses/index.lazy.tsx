import { createLazyFileRoute } from '@tanstack/react-router'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import "./expenses.css";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInvoiceStore } from "../../lib/store/invoice.store";

const InvoicesPage =  ()=> {

  const invoices = useInvoiceStore((state) => state.invoices);
  const deleteInvoice = useInvoiceStore((state) => state.delete);

  return (
    <Card className="w-full max-w-3xl m-12">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant={"destructive"}
                    onClick={() => deleteInvoice(invoice.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
export const Route = createLazyFileRoute('/expenses/')({
  component: () => <InvoicesPage></InvoicesPage>
})