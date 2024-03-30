'use client';

import EstimatesDocument from "@/components/screendoor/EstimatesPDF";
import { usePDF } from "@react-pdf/renderer";
import { useRef } from "react";

export default function Home() {
  const [instanceDoc, updateDoc] = usePDF({ document: <EstimatesDocument /> });
  const pdfDownloadRef = useRef(null);

  const handleExportPdf = () => {
    updateDoc(<EstimatesDocument />);
    (pdfDownloadRef.current as unknown as HTMLAnchorElement).click()
  };
  return (
    <>
      <button onClick={handleExportPdf} 
        style={{padding: 8, color: 'blueviolet', fontSize: 13, fontWeight: 'bold', outline: 'auto', }} >
        Download estimates pdf
      </button>
      <a ref={pdfDownloadRef} href={instanceDoc.url as string} download="Estimates.pdf" />
    </>
  );
}
