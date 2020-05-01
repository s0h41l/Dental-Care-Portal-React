export interface StaffMemberJSON {
	_id: string;
	name: string;
	noServerPass: string;
	email: string;
	phone: string;
	typex: string;
	speciality: string;
	notes: string;
	operates: boolean;
	onDutyDays: string[];
	canEditStaff: boolean;
	canEditPatients: boolean;
	canEditOrtho: boolean;
	canEditAppointments: boolean;
	canEditTreatments: boolean;
	canEditPrescriptions: boolean;
	canEditSettings: boolean;
	canViewStaff: boolean;
	canViewPatients: boolean;
	canViewOrtho: boolean;
	canViewAppointments: boolean;
	canViewTreatments: boolean;
	canViewPrescriptions: boolean;
	canViewSettings: boolean;
	canViewStats: boolean;
	canEditConsents: boolean;
	pin: string | undefined;
}
