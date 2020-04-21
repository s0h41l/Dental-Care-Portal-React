import { ToothCondition, ToothJSON } from "@modules";
import { convert } from "@utils";
import { computed, observable } from "mobx";

export class Tooth {
	ISO: number = 11;

	@computed get Universal() {
		return convert(this.ISO).Universal;
	}

	@computed get Palmer() {
		return convert(this.ISO).Palmer;
	}

	@computed get Name() {
		return convert(this.ISO).Name;
	}

	@observable condition: keyof typeof ToothCondition = "sound";

	@observable diagnosis_key: string = '';

	@observable diagnosis_val: string = '';

	@observable notes: string[] = [];

	constructor(input: number | ToothJSON | null) {
		if (typeof input === "number") {
			this.ISO = input;
		} else if (!!input) {
			this.fromJSON(input);
		}
	}

	fromJSON(input: ToothJSON) {
		this.ISO = input.ISO;
		this.condition = input.condition;
		this.diagnosis_key = input.diagnosis_key;
		this.diagnosis_val = input.diagnosis_val;
		this.notes = input.notes;
	}

	toJSON(): ToothJSON {
		return {
			ISO: this.ISO,
			condition: this.condition,
			diagnosis_key: this.diagnosis_key,
			diagnosis_val: this.diagnosis_val,
			notes: Array.from(this.notes)
		};
	}
}
