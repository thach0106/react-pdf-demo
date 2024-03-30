'use client';

import EstimatesDocument from "@/components/screendoor/EstimatesPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Home() {
  return ( 
      <PDFDownloadLink  document={<EstimatesDocument />} fileName="Estimates.pdf">
        Download pdf
      </PDFDownloadLink>
    );
}
