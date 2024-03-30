'use client';

import InvoiceDocument from "@/components/screendoor/InvoicePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Home() {
  return ( 
      <PDFDownloadLink  document={<InvoiceDocument />} fileName="Invoice.pdf">
        Download now
      </PDFDownloadLink>
    );
}
