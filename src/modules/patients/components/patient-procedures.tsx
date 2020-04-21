import { EditableListComponent } from "../../../common-components/editable-list/editable-list";
import { DataTableComponent, ProfileComponent, ProfileSquaredComponent, Col, Row } from "@common-components";
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { text, user } from "@core";
import { Gender, Patient, Tooth, patients } from "@modules";
import { PatientsPage } from "./page.patients";

import { computed, observable, action } from "mobx";
import { observer } from "mobx-react";
import { TooltipHost, IconButton, Panel, PanelType, DefaultButton,  PrimaryButton, BaseButton, Button } from "office-ui-fabric-react";
import * as React from "react";
//import React, { useEffect} from 'react';


interface IDocument {
	key: string;
	name: string;	
	tooth: string;
	diagnosis: string;
  }

interface MyProps {
	patient: Patient;
	document: IDocument[];
	index?: number;	
}

interface MyState {
	
}


export class PatientProcedures extends React.Component<MyProps, MyState > 
{	
	  constructor(props: MyProps) {
		super(props);
		//this._allItems = this.props.document;	  
		
	  }

	  @computed get items() {
			return this.props.document;
	  }

	 // @observable _allItems: IDocument[];
	 // @observable _columns: IColumn[];
	/*  handleRowDel = (prod: Procedures): void => {
			var index = this.state.procedures.indexOf(prod);
			this.state.procedures.splice(index, 1);
		//	this.setState( { procedures: this.state.procedures } );
		this.setState({
			procedures: this.state.procedures
		}, () => {
			this.props.patient.procedures = this.state.procedures
		})
	  };
	
	  handleAddEvent = (): void =>  {
		var d = new Date();
		let date = [
		  d.getFullYear(),
		  ('0' + (d.getMonth() + 1)).slice(-2),
		  ('0' + d.getDate()).slice(-2)
		].join('-');
			let idx = generateID();
			var product = {
				_id: idx,
				patientid: "",
				done: "",
				date: date,
				priority: 0,
				tooth: 0,
				desc: "",
				fees: "",
				discount: "",
				fdiscount: "",
				insurance: "",
				psignature: ""
			  }

			  var pp = new Procedures(product);
			//product.SetPatientID(this.props.patient._id);
			this.state.procedures.push(pp);
			//this.setState({ procedures: this.state.procedures });	
			this.setState({
				procedures: this.state.procedures
			}, () => {
				this.props.patient.procedures = this.state.procedures
			})
	  }
	
	  handleProductTable = (evt: any): void =>  {
		var item = {
			id: evt.target.id,
			name: evt.target.name,
			value: evt.target.value
		};
		var products = this.state.procedures.slice();
		var newProducts = products.map(function(product: any) {
	
		for (var key in product) {
			if (key == item.name && product.id == item.id) {
			product[key] = item.value;
	
			}
		}
		return product;
		});
	
		this.setState({
			procedures: newProducts
		}, () => {
			this.props.patient.procedures = this.state.procedures
		})
		//  console.log(this.state.products);
		
	}*/ 
//	@observable _allItems: IDocument[]; 
//	@observable _delete: boolean; 
//	@observable _tooth: number; 

	render() {
	//	const { items, deletes } = this.state;
		
		return (
		
			<div> 
				
				<h3> {'Diagnosis Table'} </h3> 
			
				{/* 
				 <Dialog
					hidden={deletes}
					onDismiss={this._closeDialog}
					dialogContentProps={{
						type: DialogType.normal,
						title: 'Delete Diagnosis',
						closeButtonAriaLabel: 'Close',
						subText: 'Do you really want to delete the diagnosis on that Tooth?'
					}}
         
       			 >
					<DialogFooter>
						<PrimaryButton onClick={this._closeDialog} text="Delete" />
						<DefaultButton onClick={this._closeDialog} text="Cancel" />
					</DialogFooter>
				</Dialog>
				<DetailsList
					items={items}
					compact={true}
					columns={columns}
					selectionMode={SelectionMode.none}
					getKey={this._getKey}
					setKey="none"
					layoutMode={DetailsListLayoutMode.justified}
					isHeaderVisible={true}
				/>*/}
				<DataTableComponent
					maxItemsOnLoad={10}
					
					heads={[
						text("Tooth No."),
						text("Diagnosis"),
						text("Notes"),
						text("Delete")
					
					]}
					rows={this.items.map(item => ({
						id: item.key,
						searchableString: item.diagnosis,
						cells: [
							{
								dataValue: item.tooth,
								component: (
									<div>
									<label>	{ text(item.tooth) }</label>
									</div>
								),
								className: "no-label"
							},
							{
								dataValue: item.diagnosis,
								component: (
									<div>
										<label>	{ text(item.diagnosis) }</label>
									</div>
								),
								className: "hidden-xs"
							},
							{
								dataValue: item.tooth,
								component: (
									<div>
										<EditableListComponent
											label={text("History notes")}
											value={
												this.props.patient.teeth[Number(item.tooth)].notes
											}
											disabled={false}
											onChange={e => {
												this.props.patient.teeth[
													Number(item.tooth)
												].notes = e;
												console.log("Change in notes"+e)
												this.props.patient.triggerUpdate++;
											}}
										/>
										<br />
										
									</div>
								),
								className: "hidden-xs"
							},
							{
								dataValue: item.tooth,
								component: (

									<div>
											<TooltipHost content={text("Delete")}>
											<IconButton
												className="action-button delete"
												iconProps={{
													iconName: "Trash"
												}}
												onClick={() => { patients.removeDiagnosis(this.props.patient, Number(item.tooth)); alert("Deleted diagnosis"); } }
											/>
										</TooltipHost>
										
									</div>
								)
							}
							
						]
					}))
					
				
				}
				
				/>

			</div>
	
		);
	}

/*mapQuadrant(min: number, max: number, reverse: boolean) {
		let arr = this.props.patient.teeth;
		arr = arr.filter(tooth => tooth.ISO >= min && tooth.ISO <= max);
		arr = reverse ? arr.reverse() : arr;
		arr.map(tooth => {
			if (tooth.diagnosis_key){
				let val = {key:tooth.diagnosis_key, name: tooth.diagnosis_val, tooth: tooth.ISO.toString(), diagnosis: tooth.diagnosis_val} 
				this.state.items.push(val);
			}
		});
	} */
	
	/*componentDidUpdate(prevProps: MyProps, prevState: MyState) {
		if (prevProps.document.length !== this.props.document.length) {
			console.log("Update in Diagnosis")
			this.forceUpdate();

		}
	  }*/

	  shouldComponentUpdate(nextProps: MyProps){
		console.log("Update in Diagnosis 2")
		return nextProps.document !== this.props.document;
	}


	
}
