import { ToothJSON } from "@modules";
import { ProceduresJSON, PaymentJSON, OrthoCase, Insurance } from "@modules";

export interface PatientJSON {
  _id: string;
  name: string;
  birthYear: number;
  gender: string;
  tags: string;
  address: string;
  email: string;
  phone: string;
  whatsapphone: string;
  medicalHistory: string[];
  procedureGraphicCode: string[];
  insurance: Insurance;
  gallery: string[];
  teeth: (ToothJSON | null)[];
  procedures: (ProceduresJSON | null)[];
  payments: (PaymentJSON | null)[];
  labels: {
    text: string;
    type: string;
  }[];
  alerts: string;
  allergies: string;
  cheifComplaint: string;
  orthoCaseId: string;
  reports: string[];
}
