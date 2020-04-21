import { ToothJSON } from "@modules";
import { DiagnosisJSON } from "@modules";

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
	gallery: string[];
	teeth: (ToothJSON | null)[];
	diagnosis: (DiagnosisJSON | null)[];
	datex: string;
	labels: {
		text: string;
		type: string;
	}[];
}
