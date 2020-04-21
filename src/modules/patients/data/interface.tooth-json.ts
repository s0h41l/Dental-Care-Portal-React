import { ToothCondition } from "@modules";

export interface ToothJSON {
	ISO: number;
	condition: keyof typeof ToothCondition;
	diagnosis_key: string,
	diagnosis_val: string,
	notes: string[];
}
