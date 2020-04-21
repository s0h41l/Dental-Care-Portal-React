import { AsyncComponent, Col, ProfileComponent, Row, SectionComponent } from "@common-components";
import { text, user } from "@core";
import { conditionToColor, Patient, ToothCondition, Diagnosis } from "@modules";
//import { EditableListComponent } from "common-components/editable-list/editable-list";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import { Dropdown, IconButton, Panel, PanelType, Toggle, DefaultButton } from "office-ui-fabric-react";
import { Nav, INavLink, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as React from "react";


interface MyProps {
	patient: Patient;
	onClick: (val: IDocument) => void;
}

interface MyState {
	printview: string;
	items: INavLinkGroup[];
	selectionDetails: string;	
	diagnosis: Diagnosis[];
	show: boolean;
}

interface IDocument {
	key: string;
	name: string;	
	tooth: string;
	diagnosis: string;
}


@observer
export class DentalHistoryPanel extends React.Component<
	{ patient: Patient, onClick: (val: IDocument) => void },
	MyState
> {

	constructor(props: MyProps) {
		super(props);

		this._allItems = [
				{
				name: 'K00 Disorders of tooth development and eruption',
				collapseByDefault: true,
				links: [
					{
						key: 'K00.0',
						name: 'K00.0 Anodontia',
						url:'',
						onClick: (ev, item: any) => {
							
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
						 	this.props.onClick(val)												

						}
					},
					{
						key: 'K00.1',
						name: 'K00.1 Supernumerary teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												
				   
						}
					},
					{
						key: 'K00.2',
						name: 'K00.2 Abnormalities of tooth size and form',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
						
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					},
					{
						key: 'K00.3',
						name: 'K00.3 Mottled Teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						
						}
					},
					{
						key: 'K00.4',
						name: 'K00.4 Disturbances in tooth formation',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)						

							
						}
					},
					{
						key: 'K00.5',
						name: 'K00.5 Hereditary disturbances in tooth structure, not elsewhere classified',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					},
					{
						key: 'K00.6',
						name: 'K00.6 Disturbances in tooth eruption',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					},
					{
						key: 'K00.7',
						name: 'K00.7 Teething Syndrome',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					},
					{
						key: 'K00.8',
						name: 'K00.8 Other disorders of tooth development',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					},
					{
						key: 'K00.9',
						name: 'K00.9 Disorders of tooth development, unspecified',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)												

						}
					}
				]
				},
				{
				name: 'K01 Embedded and impacted teeth',
				collapseByDefault: true,
				links: [
					{
						key: 'K01.0',
						name: 'K01.0 Embedded Teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)	
						}
					},
					{
						key: 'K01.1',
						name: 'K01.1 Impacted Teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)	
						}
					}
				]
				},
				{
				name: 'K02 Dental Caries',
				collapseByDefault: true,
				links: [
					{
						key: 'K02.0',
						name: 'K02.0 Caries limited to the enamel',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)	
						}
					},
					{
						key: 'K02.1',
						name: 'K02.1 Caries to the dentine',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)	
						}
					},
					{
						key: 'K02.2',
						name: 'K02.2 Caries to the cementum',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K02.3',
						name: 'K02.3 Arrested dental caries',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K02.4',
						name: 'K02.4 Odontoclasia',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K02.8',
						name: 'K02.8 Other dental caries',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K02.9',
						name: 'K02.9 Dental caries, unspecified',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					}
				]
				},
				{
				name: 'K03 Other diseases of hard tissues of teeth',
				collapseByDefault: true,
				links: [
					{
						key: 'K03.0',
						name: 'K03.0 Excessive attrition of teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.1',
						name: 'K03.1 Abrasion of teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.2',
						name: 'K03.2 Erosion of teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.3',
						name: 'K03.3 Pathological resorption of teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.4',
						name: 'K03.4 Hypercementosis',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.5',
						name: 'K03.5 Ankylosis of teeth',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.6',
						name: 'K03.6 Deposits [accretions] on teeth ',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.7',
						name: 'K03.7 Posteruptive colour change of dental hard tissues ',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.8',
						name: 'K03.8 Other specified diseases of hard tissue of teeth ',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},
					{
						key: 'K03.9',
						name: 'K03.9 Diseases of hard tissue or teeth, unspecified ',
						url: '',
						onClick: (ev, item: any) => {
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
						}
					},

				]
				},
				{
					name: 'K04 Diseases of the pulp and periapical tissues',
					collapseByDefault: true,
					links: [
						{
							key: 'K04.0',
							name: 'K04.0 Pulpitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.1',
							name: 'K04.1 Abrasion of teeth',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.2',
							name: 'K04.2 Pulp degeneration',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.3',
							name: 'K04.3 Abnormal hard tissue formation in pulp',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.4',
							name: 'K04.4 Acute apical periodontitis of pulpal origin',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.5',
							name: 'K04.5 Chronic apical periodontitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.6',
							name: 'K04.6 Periapical abscess with sinus ',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.7',
							name: 'K04.7 Periapical abscess without sinus',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.8',
							name: 'K04.8 Radicular Cyst ',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K04.9',
							name: 'K04.9 Other and unspecified diseases of the pulp and periapical tissues ',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
	
					]
				}
				,
				{
					name: 'K05 Gingivitis and periodontal diseases',
					collapseByDefault: true,
					links: [
						{
							key: 'K05.0',
							name: 'K05.0 Acute gingivitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.1',
							name: 'K05.1 Chronic gingivitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.2',
							name: 'K05.2 Acute Periodontitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.3',
							name: 'K05.3 Chronic Periodontitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.4',
							name: 'K05.4 Periodontosis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.5',
							name: 'K05.5 Other periodontal disease',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K05.6',
							name: 'K05.6 Periodontal disease , unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,

				//6th--k06
				{
					name: 'K06 Other disorders of the gingiva and edentulous alveolar ridges',
					collapseByDefault: true,
					links: [
						{
							key: 'K06.0',
							name: 'K06.0 Gingival recession',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K06.1',
							name: 'K06.1 Gingival enlargement',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K06.2',
							name: 'K06.2 Gingiva and edentulous alveolar ridge lesions associated with trauma',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K06.3',
							name: 'K06.3 Other specified disorders of the gingiva and edentulous alveolar ridge',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K06.4',
							name: 'K06.4 Disorder of the gingiva and edentulous alveolar ridge, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//7th--K07
				{
					name: 'K07 Dento-facial anomalies including malocclusion',
					collapseByDefault: true,
					links: [
						{
							key: 'K07.0',
							name: 'K07.0 Major anomalies of jaw size',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.1',
							name: 'K07.1 Anomalies of jaw-cranial base relationship',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.2',
							name: 'K07.2 Anomalies of dental arch relationship',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.3',
							name: 'K07.3 Anomalies of tooth position',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.4',
							name: 'K07.4 Malocclusion, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.5',
							name: 'K07.5 Dento-facial functional abnormalities',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.6',
							name: 'K07.6 Temporo-mandibular joint disorders',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.7',
							name: 'K07.7 Other dento-facial anomalies',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K07.8',
							name: 'K07.8 Dento-facial anomaly, Unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//8th--K08
				{
					name: 'K08 Other disorders of the teeth and supporting structures',
					collapseByDefault: true,
					links: [
						{
							key: 'K08.0',
							name: 'K08.0 Exfoliation of teeth due to systemic disorders',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K08.1',
							name: 'K08.1 Loss of teeth due to extraction, accident or local periodontal disease',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K08.2',
							name: 'K08.2 Atrophy of edentulous alveolar ridge',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K08.3',
							name: 'K08.3 Retained dental root',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K08.4',
							name: 'K08.4 Other specified disorders of teeth and supporting structures ',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K08.5',
							name: 'K08.5 Disorders of teeth and supporting structures, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//9th--K09
				{
					name: 'K09 Cysts of oral origin, not elsewhere classified',
					collapseByDefault: true,
					links: [
						{
							key: 'K09.0',
							name: 'K09.0 Developmental odontogenic cysts',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K09.1',
							name: 'K09.1 Developmental (non-odontogenic) cysts of oral region',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K09.2',
							name: 'K09.2 Other cysts of jaws',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K09.3',
							name: 'K09.3 Other cysts of oral region, not elsewhere classified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K09.4',
							name: 'K09.4 Other Cysts of oral region, not elsewhere',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K09.5',
							name: 'K09.5 Cysts of oral region, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//10th--K10
				{
					name: 'K10 Other diseases of jaws',
					collapseByDefault: true,
					links: [
						{
							key: 'K10.0',
							name: 'K10.0 Developmental disorders of jaws',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K10.1',
							name: 'K10.1 Giant cell granuloma, central',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K10.2',
							name: 'K10.2 Inflammatory conditions of jaws',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K10.3',
							name: 'K10.3 Inflammatory conditions of jaws',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K10.4',
							name: 'K10.4 Other Cysts of oral region, not elsewhere',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K10.5',
							name: 'K10.5 Disease of jaws, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//11th--K11
				{
					name: 'K11 Diseases of the salivary glands',
					collapseByDefault: true,
					links: [
						{
							key: 'K11.0',
							name: 'K11.0 Atrophy of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.1',
							name: 'K11.1 Hypertrophy of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.2',
							name: 'K11.2 Sialoadenitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.3',
							name: 'K11.3 Abscess of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.4',
							name: 'K11.4 Atrophy of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.5',
							name: 'K11.5 Fistula of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.6',
							name: 'K11.6 Sialolithiasis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.7',
							name: 'K11.7 Mucocoele of salivary gland',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.8',
							name: 'K11.8 Disturbances of salivary secretion',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.9',
							name: 'K11.9 Other diseases of salivary glands',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K11.10',
							name: 'K11.10 Disease of salivary gland, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//12th--K12
				{
					name: 'K12 Stomatitis and related lesions',
					collapseByDefault: true,
					links: [
						{
							key: 'K12.0',
							name: 'K12.0 Recurrent oral aphthae',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K12.1',
							name: 'K12.1 Other forms of stomatitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K12.2',
							name: 'K12.2 Cellulitis and abscess of mouth. Excludes K04.6-K04.7 and K02.5',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}
					]
				}
				,
				//13th--K13
				{
					name: 'K13 Other diseases of the lip and oral mucosa',
					collapseByDefault: true,
					links: [
						{
							key: 'K13.0',
							name: 'K13.0 Diseases of lips',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.1',
							name: 'K13.1 Cheek and lip biting',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.2',
							name: 'K13.2 Leukoplakia and other disturbances of the oral epithelium including tongue',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.3',
							name: 'K13.3 Hairy Leukoplakia',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.4',
							name: 'K13.4 Granuloma and granuloma-like lesions of oral mucosa',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.5',
							name: 'K13.5 Oral submucous fibrosis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.6',
							name: 'K13.6 Irritative hyperplasia of oral mucosa',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K13.7',
							name: 'K13.7 Other and unspecified lesions of oral mucosa',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}

					]
				}
				,
				//14th--K14
				{
					name: 'K14 Diseases of the tongue',
					collapseByDefault: true,
					links: [
						{
							key: 'K14.0',
							name: 'K14.0 Glossitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.1',
							name: 'K14.1 Geographic Tongue',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.2',
							name: 'K14.2 Median Rhomboid Glossitis',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.3',
							name: 'K14.3 Hypertrophy of papillae',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.4',
							name: 'K14.4 Atrophy of papillae',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.5',
							name: 'K14.5 Plicated tongue',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.6',
							name: 'K14.6 Glossodynia',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.7',
							name: 'K14.7 Other diseases of the tongue',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K14.8',
							name: 'K14.8 Disease of the tongue, unspecified',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}

					]
				}
				,
				//15th--K15
				{
					name: 'Z Z codes',
					collapseByDefault: true,
					links: [
						{
							key: 'Z41.0',
							name: 'Z41.0 Dental examination',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K41.8',
							name: 'K41.8 Other procedures for purposes other than remedying health state',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K46.3',
							name: 'K46.3 Fitting and adjusting of dental prosthetic device',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K46.5',
							name: 'K46.5 Fitting and adjusting of dental orthodontic device',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K46.6',
							name: 'K46.6 Attention to surgical dressings or sutures',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K46.7',
							name: 'K46.7 Adjustment and management of other implanted devices',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						},
						{
							key: 'K53.6',
							name: 'K53.6 Procedure not carried out because of patient"s decision for other and unspecified reasons',
							url: '',
							onClick: (ev, item: any) => {
								this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_key = item.key;
							this.props.patient.teeth[
								this.viewToothISO
							].diagnosis_val = item.name;
							let val = {key: item.key + this.viewToothISO.toString() , name: item.key, tooth: this.viewToothISO.toString(), diagnosis:  item.name}	
							this.props.onClick(val)
							}
						}

					]
				}
				
		];
		this._allDocItems = [];
		
		this.state = {
		  printview: "",
		  items: this._allItems,
		  diagnosis: this.props.patient.diagnosis,
		  selectionDetails: '',
		  show: false
		};
	  }

	@observable _allItems: INavLinkGroup[];
	@observable _allDocItems: IDocument[];
	
	@observable viewChart: boolean = true;
	@observable viewToothISO: number = 0;
	@observable triggerUpdate: number = 0;

	@observable viewDiagnosis: boolean = false;

	@computed get canEdit() {
		return user.currentUser.canEditPatients;
	}

	componentWillMount() {
		this.viewToothISO = 0;
	}

	render() {
		let options = { left: 'left', right: 'right', both: 'both' };
		const { items, selectionDetails, show } = this.state;
		return (
			<div className="dental-history teeth" >
				<Toggle
					defaultChecked={true}
					onText={text("View graphic chart")}
					offText={text("View sorted table")}
					onChange={(ev, newVal) => {
						this.viewChart = newVal!;
					}}
				/>

				<DefaultButton text="Send Page as E-mail"  allowDisabledFocus /> &nbsp;&nbsp;&nbsp;&nbsp;
				<DefaultButton text="Print Page"  allowDisabledFocus /> 

				<div className="m-t-20">
					{this.viewChart ? (
						<div className="chart">
							<SectionComponent title={text(`Permanent Teeth`)} backgroundColor='#F7F7F7'>
								<AsyncComponent
									key="teeth-permanent"
									loader={async () => {
										const Component = (await import("./teeth-permanent"))
											.TeethPermanentChart;
										return (
											<Component
												teeth={this.props.patient.teeth}
												onClick={number =>
													(this.viewToothISO = number)
												}
											/>
										);
									}}
								/>
							</SectionComponent>
							<SectionComponent title={text(`Deciduous Teeth`)} backgroundColor='#F7F7F7'>
								<AsyncComponent
									key="teeth-primary"
									loader={async () => {
										const Component = (await import("./teeth-deciduous"))
											.TeethDeciduousChart;
										return (
											<Component
												teeth={this.props.patient.teeth}
												onClick={number =>
													(this.viewToothISO = number)
												}
											/>
										);
									}}
								/>
							</SectionComponent>
						</div>
					) : (
						<div className="tabulated">
							<SectionComponent title={text(`Permanent Teeth`)}>
								<table className="permanent">
									<tbody>
										<tr>
											{[
												this.mapQuadrant(11, 18, true),
												this.mapQuadrant(21, 28, false)
											]}
										</tr>
										<tr>
											{[
												this.mapQuadrant(41, 48, true),
												this.mapQuadrant(31, 38, false)
											]}
										</tr>
									</tbody>
								</table>
							</SectionComponent>
							<SectionComponent title={text(`Deciduous Teeth`)}>
								<table className="deciduous">
									<tbody>
										<tr>
											{[
												this.mapQuadrant(51, 55, true),
												this.mapQuadrant(61, 65, false)
											]}
										</tr>
										<tr>
											{[
												this.mapQuadrant(81, 85, true),
												this.mapQuadrant(71, 75, false)
											]}
										</tr>
									</tbody>
								</table>
							</SectionComponent>
						</div>
					)}
				</div>

				<Panel
					isOpen={!!this.props.patient.teeth[this.viewToothISO]}
					type={PanelType.medium}
					closeButtonAriaLabel="Close"
					isLightDismiss={true}
					onDismiss={() => (this.viewToothISO = 0)}
					onRenderNavigation={() => {
						const tooth = this.props.patient.teeth[
							this.viewToothISO
						];

						return (
							<Row className="panel-heading">
								<Col span={22}>
									<ProfileComponent
										name={`ISO: ${
											tooth ? tooth.ISO : ""
										} - Universal: ${
											tooth ? tooth.Universal : ""
										}`}
										secondaryElement={
											<span>
												{tooth
													? tooth.Name.split(" ")
															.filter((x, i) => i)
															.join(" ")
													: ""}
											</span>
										}
										onRenderInitials={() => (
											<span className="palmer">
												{tooth ? tooth.Palmer : ""}
											</span>
										)}
										size={3}
									/>
								</Col>
								<Col span={2} className="close">
									<IconButton
										iconProps={{ iconName: "cancel" }}
										onClick={() => {
											this.viewToothISO = 0;
										}}
									/>
								</Col>
							</Row>
						);
					}}
				>
					<br />
					<br />
					{this.props.patient.teeth[this.viewToothISO] ? (
						<div className="tooth-details">
							<DefaultButton text="Normal"  allowDisabledFocus />
							<DefaultButton text="Add Diagnosis" onClick={() => {
											this.viewDiagnosis = !this.viewDiagnosis;
										}}  style={{ width: '100%' }} allowDisabledFocus />
							<div style={ { display: this.viewDiagnosis ? 'block' : 'none' } }>
									<TextField								
										label="Filter by name:"
										onChange={this._onFilter}
										styles={{ root: { maxWidth: '400dp' } }}
										/>

									<Nav
										styles={{ root: { width: '100%' } }}
										ariaLabel="Diagnosis "
										groups={items}
										/>
							</div>
						</div>
					) : (
						""
					)}
				</Panel>
			</div>
		);
	}

	mapQuadrant(min: number, max: number, reverse: boolean) {
		let arr = this.props.patient.teeth;
		arr = arr.filter(tooth => tooth.ISO >= min && tooth.ISO <= max);
		arr = reverse ? arr.reverse() : arr;
		return arr.map(tooth => (
			<td
				key={"tooth" + tooth.ISO}
				style={{ background: conditionToColor(tooth.condition) }}
				onClick={() => (this.viewToothISO = tooth.ISO)}
			>
				<span
					className="has-notes"
					style={tooth.notes.length ? {} : { display: "none" }}
				/>
				{tooth.ISO}
			</td>
		));
	}

	private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string | undefined): void => {
		console.log("Here is your text: "+ text)
		this.setState({
		  items: text ? 
		  
		 this._allItems.filter(function(item) {
			return item.links.some(e => e.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ) || ( item.name && item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ) ;
		  })
		  
		  : this._allItems
		});
	  };

	  //style={{ display: this.viewDiagnosis ? 'block' : 'none'}}
	  //onClick={()=>{ this.viewDiagnosis === false ? this.viewDiagnosis = true : this.viewDiagnosis = false ; console.log("Diagnosis view"+ this.viewDiagnosis); }}
}
