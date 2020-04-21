import {
	AsyncComponent,
	Col,
	DataTableComponent,
	ProfileComponent,
	ProfileSquaredComponent,
	Row,
	TagComponent,
	stringToTagType
	} from "@common-components";
import { router, text, user } from "@core";
import {
	genderToString,
	Patient,
	PatientAppointmentsPanel,
	PatientGalleryPanel,
	patients,
	setting,
	Diagnosis
	} from "@modules";
import { EditableListComponent } from "../../../common-components/editable-list/editable-list";
import { formatDate } from "@utils";
import { computed, observable, action, autorun } from "mobx";
//import { CSVReader } from 'react-papaparse';
import { parse, unparse } from 'papaparse';
import { observer } from "mobx-react";
import {
	Dialog,
	DialogFooter,
	PrimaryButton,
	DefaultButton,
	Dropdown,
	Icon,
	IconButton,
	Panel,
	PanelType,
	PersonaInitialsColor,
	TextField,
	TooltipHost,
	MessageBar,
	MessageBarType,
	MessageBarButton
	} from "office-ui-fabric-react";
import * as React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { array } from 'prop-types';

interface IDocument {
	key: string;
	name: string;	
	tooth: string;
	diagnosis: string;
}
 
interface IState {
	filez: string | File | NodeJS.ReadableStream;	
}


const DiagnosisPanel = observer(({ patient }) => (
	<>
		<h3> {'Diagnosis Table'} </h3> 
		<DataTableComponent
					maxItemsOnLoad={10}					
					heads={[
						text("Tooth No."),
						text("Diagnosis"),
						text("Notes"),
						text("Delete")
					
					]}
					rows={patient.diagnosis ? patient.diagnosis.map((item: any) => ({

						id: item._id,
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
										{patient.teeth[Number(item.tooth)] &&
										<EditableListComponent
											label={text("History notes")}
											value={
												patient.teeth[Number(item.tooth)].notes
											}
											disabled={false}
											onChange={e => {
												patient.teeth[
													Number(item.tooth)
												].notes = e;
												console.log("Change in notes"+e)
												patient.triggerUpdate++;
											}}
										/>
								}
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
												onClick={() => { 
													var index = patient.diagnosis.indexOf(item);
													if (index >= 0) { patient.diagnosis.splice(index, 1);}
													
													patients.removeDiagnosis(patient, Number(item.tooth))
													patient.triggerUpdate++;
													alert("Deleted diagnosis for Tooth: "+ item.tooth); } }
											/>
										</TooltipHost>
										
									</div>
								)
							}
							
						]
					})) : null
					
				
				}
				
				/>
	</>
))

@observer
export class PatientsPage extends React.Component<{},  {smsDialog: Boolean, showMessage: Boolean} > {

	@observable selectedId: string = router.currentLocation.split("/")[1];

	@observable viewWhich: number = router.currentLocation.split("/")[1]
		? 1
		: 0;

	@observable mydocument : IDocument[] = []; 

	@observable filez : File = new File([""], "filename"); 

	inputElement: any = null;

	constructor(props: {}) {
		super(props);
		this.state = {
			smsDialog: false,
			showMessage: false,
		}
	}	

	@computed
	get patient() {
		return patients.list.find(patient => patient._id === this.selectedId);
	}

	@computed get canEdit() {
		return user.currentUser.canEditPatients;
	}

	@action addDoc(val: IDocument){
		this.mydocument.push(val);
		console.log("My docs here: "+this.mydocument)
	}
	
	closeSmsDialog = () => {
		this.setState({ smsDialog: false });
	}

	closeSmsDialogOnSend = () => {
		this.setState({ smsDialog: false, showMessage: true });
	}


	componentDidMount(){
	/*	patients.list.sort((a, b) => parseInt(b._date) - parseInt(a._date)).map( (pat) => {
			console.log("Patient name"+ pat.name)
		});*/
		//
	}

	mapQuadrant(patient: Patient, min: number, max: number, reverse: boolean) {
		let arr = patient.teeth;
		arr = arr.filter(tooth => tooth.ISO >= min && tooth.ISO <= max);
		arr = reverse ? arr.reverse() : arr;
		arr.map(tooth => {
			if (tooth.diagnosis_key){
				let val = {key:tooth.diagnosis_key, name: tooth.diagnosis_val, tooth: tooth.ISO.toString(), diagnosis: tooth.diagnosis_val} 
				this.mydocument.push(val);
			}
		});
	}	

	sortValues(arrayz: any[]){
		let finished = [];
		for (let val of arrayz){
			if (val.tooth !== 0){
				finished.push(val)
			}
		}
		return finished
	}

	onChange (e: any)  {
		console.log(" Files: "+ e.target.files[0].name )
		parse( e.target.files[0], {
			complete: (result: any) => { 
				let datax = result.data
				const found = datax.some((e:any) => e.id !== undefined && e.name !== undefined && e.birth !== undefined && e.gender !== undefined && e.tags !== undefined && e.address !== undefined && e.email !== undefined 
				&& e.phone !== undefined && e.labels !== undefined  && e.history !== undefined && e.gallery !== undefined && e.diagnosis !== undefined );
				if (found) {
					//alert('Working!')
					console.log("Found val: "+ JSON.stringify(datax) )
					for (let val of datax){
						if (val.id !== ""){
						var patient = new Patient();						
						var foundItem = patients.list.find(patient => patient._id ===  val.id)
						if (foundItem){
							
							break;
						}

						console.log("Diagnosis val: "+ JSON.parse(val.diagnosis).length)

						//if (val.diagnosis) { patient.diagnosis = JSON.parse(JSON.stringify(val.diagnosis)) }
						patient._id = val.id;
						patient.name = val.name;
						patient.birthYear = val.birth;
						patient.gender = val.gender;
						patient.tags = val.tags;
						patient.address = val.address;
						patient.email = val.email;
						patient.phone = val.phone;
						if (val.diagnosis) {
							JSON.parse(val.diagnosis).map((diag:any) => {
								if (diag) {
									const proc = new Diagnosis(diag);
									patient.diagnosis.push(proc);

									patient.teeth[
										Number(diag.tooth)
									].diagnosis_key = diag.name;

									patient.teeth[
										Number(diag.tooth)
									].diagnosis_val = diag.diagnosis;
								}
							});
						}						
						if (val.labels) {
							JSON.parse(val.labels).map((x:any) => {
								patient.labels.push( {
									text: x.text,
									type: stringToTagType(x.type)
								})							
							});
						}

						if (val.history) { patient.medicalHistory = JSON.parse(val.history) }
						if (val.gallery) { patient.gallery = JSON.parse(val.gallery) }					
						patients.list.push(patient);
						alert("Added data into Patients Database") 			
					}		
					}
					
				
				}
				else{
					alert ('Sorry, this CSV file does not match the required Format. Please get the proper format before Uploading.')
				}
				//console.log("CSV results:"+ JSON.stringify(result.data)); 
			},
			header: true
		  });
	}


	render() {
	
		/*
			this.mapQuadrant(this.patient!,11, 18, true);
			this.mapQuadrant(this.patient!,21, 28, false);
			this.mapQuadrant(this.patient!,41, 48, true);
			this.mapQuadrant(this.patient!,31, 38, false);
			.sort((a, b) => parseInt(b._date) - parseInt(a._date))
		}
		*/
		if(this.patient){
			console.log("Diagnosis Vals: "+ JSON.stringify(this.patient.diagnosis) )
		}
		return (
			<div className="patients-component p-15 p-l-10 p-r-10">

				{this.state.showMessage
				?
				<div style={{marginBottom: '10px', background: "white"}}>
					<MessageBar
						messageBarType={MessageBarType.success}
						isMultiline={false}
						// onDismiss={p.resetChoice}
						dismissButtonAriaLabel="Close"
						actions={
							<div>
								<MessageBarButton onClick={() => this.setState({ showMessage: false })}>Close</MessageBarButton>
							</div>
						}
					>
						Your message has been sent successfully...
					</MessageBar>
				</div>
				:
				null
				}

				<input type="file" name="import" onChange={this.onChange} ref={input => this.inputElement = input} accept=".csv" style={{ opacity: 0 }} />

				{this.patient ? (
					
					<Panel
						key={this.selectedId + this.viewWhich}
						isOpen={!!this.patient}

						type={this.viewWhich === 2 ? PanelType.custom : PanelType.medium}
						customWidth={'100%'}
						
						closeButtonAriaLabel="Close"
						isLightDismiss={true}
						onDismiss={() => {
							this.selectedId = "";
							this.viewWhich = 0;
						}}
						onRenderNavigation={() => {
							return (
								<Row className="panel-heading">
									<Col span={22}>
										<ProfileComponent
											name={this.patient!.name}
											secondaryElement={
												<div>
													{this.viewWhich === 1
														? text(
																"Patient Details"
														  )
														: ""}
													{this.viewWhich === 2
														? text("Dental History")
														: ""}
													{this.viewWhich === 3
														? text(
																"Gallery and X-Rays"
														  )
														: ""}
													{this.viewWhich === 4
														? text(
																"Patient Appointments"
														  )
														: ""}
												</div>
											}
											size={3}
										/>
									</Col>
									<Col span={2} className="close">
										<IconButton
											iconProps={{ iconName: "cancel" }}
											onClick={() => {
												this.selectedId = "";
												this.viewWhich = 0;
											}}
										/>
									</Col>
								</Row>
							);
						}}
					>
						{this.viewWhich === 1 ? (
							<AsyncComponent
								key=""
								loader={async () => {
									const PatientDetailsPanel = (await import("./patient-details"))
										.PatientDetailsPanel;
									return (
										<PatientDetailsPanel
											patient={this.patient!}
										/>
									);
								}}
							/>
						) : (
							""
						)}
						{this.viewWhich === 2 ? (
								<div>
									<div style={{ width: '100%'}}>
										<div style={{width: '65%', padding: '8px', marginLeft: 'auto'}}>
											<AsyncComponent
												key=""
												loader={async () => {
													const DentalHistoryPanel = (await import("./dental-history"))
														.DentalHistoryPanel;
													
														return (
															<DentalHistoryPanel patient={this.patient!} onClick={(val) => {
																let diag = new Diagnosis();
																diag.id = val.key; 
																diag.name = val.name;
																diag.tooth = Number(val.tooth);
																diag.diagnosis = val.diagnosis;
																this.patient!.diagnosis.push(diag);
															
															}} />													
													);
												}}
											/>
										</div>
									</div>
									<div style={{width: '50%', borderTop: '1px solid #999'}}>
									<AsyncComponent
										key=""
										loader={async () => {
											//const ProceduresPanel = (await import("./patient-procedures")).PatientProcedures;
											//<ProceduresPanel patient={this.patient!} document = {this.mydocument}/>
											//<DiagnosisPanel items={this.mydocument} patient={this.patient} /> 
											//							
											
												return (
													<DiagnosisPanel patient={this.patient!} />
											);
										}}
									/>
									</div>
								</div>
						) : (
							""
						)}
						{this.viewWhich === 3 ? (
							<PatientGalleryPanel patient={this.patient} />
						) : (
							""
						)}
						{this.viewWhich === 4 ? (
							<PatientAppointmentsPanel patient={this.patient} />
						) : (
							""
						)}
					</Panel>
				) : (
					""
				)}
				<DataTableComponent
					maxItemsOnLoad={10}
					className={"patients-data-table"}
					direction = {-1}
					heads={[
						text("ID"),
						text("Patient"),
						text("Contact"),
						text("Last/Next Appointment"),
						text("Total/Outstanding Payments"),
						text("Label")
					]}
					rows={patients.list.sort((a, b) => parseInt(b.datex) - parseInt(a.datex)).map( (patient) => ({
						id: patient.datex,
						searchableString: patient.searchableString,
						cells: [
							{
								dataValue: patient.datex,
								component: (
									<div>
										<label>{patient._id} </label><br></br> <br></br>
										<label> { formatDate(
															new Date(),
															setting.getSetting(
																"date_format"
															),
															setting.getSetting(
																"month_format"
															)
															
													  ) } 
										</label>
									</div>
								),
								className: "no-label"
							}
							,
							{
								dataValue:
									patient.name +
									" " +
									patient.age +
									" " +
									genderToString(patient.gender),
								component: (
									<div>
										<ProfileComponent
											name={patient.name}
											secondaryElement={
												<span>
													{text(
														genderToString(
															patient.gender
														)
													)}{" "}
													- {patient.age}{" "}
													{text("years old")}
												</span>
											}
											size={3}
										/>
										<br />

										<TooltipHost
											content={text("Patient Details")}
										>
											<IconButton
												className="action-button"
												iconProps={{
													iconName: "DietPlanNotebook"
												}}
												onClick={() => {
													this.selectedId =
														patient._id;
													this.viewWhich = 1;
												}}
											/>
										</TooltipHost>

										<TooltipHost
											content={text("Dental History")}
										>
											<IconButton
												className="action-button"
												iconProps={{
													iconName: "Teeth"
												}}
												onClick={() => {
													this.selectedId =
														patient._id;
													this.viewWhich = 2;
												}}
											/>
										</TooltipHost>

										<TooltipHost
											content={text("Gallery and X-Rays")}
										>
											<IconButton
												className="action-button"
												iconProps={{
													iconName: "PhotoCollection"
												}}
												onClick={() => {
													this.selectedId =
														patient._id;
													this.viewWhich = 3;
												}}
											/>
										</TooltipHost>

										{user.currentUser
											.canViewAppointments ? (
											<TooltipHost
												content={text(
													"Patient Appointments"
												)}
											>
												<IconButton
													className="action-button"
													iconProps={{
														iconName: "Calendar"
													}}
													onClick={() => {
														this.selectedId =
															patient._id;
														this.viewWhich = 4;
													}}
												/>
											</TooltipHost>
										) : (
											""
										)}

										<TooltipHost
											content={text("WhatsApp")}
										>								
											<IconButton
												className="action-button"
												onClick={() => { window.location.href= `https://web.whatsapp.com/send?phone=+${patient.whatsapphone}&text=${setting.getSetting("message_body")}` } }
												onRenderIcon={() => <WhatsappIcon size={20} round crossOrigin />}
											/>							
										</TooltipHost>

										<TooltipHost
											content={text("SMS")}
										>
											<IconButton
												className="action-button"
												iconProps={{
													iconName: "Mail"
												}}
												onClick={() => this.setState({ smsDialog: true })}
											/>
										</TooltipHost>


										<TooltipHost content={text("Delete")}>
											<IconButton
												className="action-button delete"
												iconProps={{
													iconName: "Trash"
												}}
												onClick={() =>
													patients.deleteModal(
														patient._id
													)
												}
												disabled={!this.canEdit}
											/>
										</TooltipHost>
									</div>
								),
								className: "no-label"
							},


							{
								dataValue: patient.phone,
								component: (
									<div>
										<label>  <b>Phone: </b> {patient.phone} </label> <br></br>  <br></br> 
										<label> <b>WhatsApp: </b>{ patient.whatsapphone } </label> <br></br>  <br></br> 
										<label> <b> Email: </b> { patient.email } </label><br></br>  <br></br> 
										<label> <b> Address:  </b>{ patient.address } </label>  <br></br> 
									</div>
								)
							},
							{
								dataValue: (
									patient.lastAppointment ||
									patient.nextAppointment || { date: 0 }
								).date,
								component: (
									<div>
										<ProfileSquaredComponent
											text={
												patient.lastAppointment
													? ""														
													: ""
											}
											subText={
												patient.lastAppointment
													? formatDate(
															patient
																.lastAppointment
																.date,
															setting.getSetting(
																"date_format"
															),
															setting.getSetting("month_format")
													  )
													: text(
															"No last appointment"
													  )
											}
											size={3}
											onRenderInitials={() => (
												<Icon iconName="Previous" />
											)}
											onClick={() => {}}
											initialsColor={
												patient.lastAppointment
													? undefined
													: PersonaInitialsColor.transparent
											}
										/>
										<br />
										<ProfileSquaredComponent
											text={
												patient.nextAppointment
													? ""
														
													: ""
											}
											subText={
												patient.nextAppointment
													? formatDate(
															patient
																.nextAppointment
																.date,
															setting.getSetting(
																"date_format"
															),
															setting.getSetting("month_format")
													  )
													: text(
															"No next appointment"
													  )
											}
											size={3}
											onRenderInitials={() => (
												<Icon iconName="Next" />
											)}
											onClick={() => {}}
											initialsColor={
												patient.nextAppointment
													? undefined
													: PersonaInitialsColor.transparent
											}
										/>
									</div>
								),
								className: "hidden-xs"
							},
							{
								dataValue: patient.totalPayments,
								component: (
									<div>
										<ProfileSquaredComponent
											text={
												setting.getSetting(
													"currencySymbol"
												) +
												patient.totalPayments.toString()
											}
											subText={text("Payments made")}
											size={3}
											onRenderInitials={() => (
												<Icon iconName="CheckMark" />
											)}
											onClick={() => {}}
											initialsColor={
												patient.totalPayments > 0
													? PersonaInitialsColor.darkBlue
													: PersonaInitialsColor.transparent
											}
										/>
										<br />
										<ProfileSquaredComponent
											text={
												setting.getSetting(
													"currencySymbol"
												) +
												(patient.differenceAmount < 0
													? patient.outstandingAmount.toString()
													: patient.differenceAmount >
													  0
													? patient.overpaidAmount.toString()
													: "0")
											}
											subText={
												patient.differenceAmount < 0
													? text("Outstanding amount")
													: patient.differenceAmount >
													  0
													? text("Overpaid amount")
													: text(
															"No outstanding amount"
													  )
											}
											size={3}
											onRenderInitials={() => (
												<Icon iconName="Cancel" />
											)}
											onClick={() => {}}
											initialsColor={
												patient.differenceAmount !== 0
													? PersonaInitialsColor.darkRed
													: PersonaInitialsColor.transparent
											}
										/>
									</div>
								),
								className: "hidden-xs"
							},
							{
								dataValue: patient.labels
									.map(x => x.text)
									.join(","),
								component: (
									<div>
										{patient.labels.map((label, index) => {
											return (
												<TagComponent
													key={index}
													text={label.text}
													type={label.type}
												/>
											);
										})}
									</div>
								),
								className: "hidden-xs"
							}
						]
					}))}
					commands={
						this.canEdit
							? [
									{
										key: "addNew",
										title: "Add new",
										name: text("Add new"),
										onClick: () => {
											const patient = new Patient();
											patients.list.push(patient);
											this.selectedId = patient._id;
											this.viewWhich = 1;
										},
										iconProps: {
											iconName: "Add"
										}
									},
									{
										key: "addImport",
										title: "Import Patients",
										name: text("Import Patients"),
										onClick: () => {
											this.inputElement.click()
										},
										iconProps: {
											iconName: "Edit"
										}
									},
									{
										key: "addExport",
										title: "Export Patients",
										name: text("Export Patients"),
										onClick: () => {
											var d = confirm('Are you sure you want to export this Patient data?')
											if (d){
												let patient: Patient[] = patients.list;
												/*let fields = ["id", "name", "birthyear", "gender", "tags",
												 "address", "email", "phone", "labels", "history",
												 "gallery", "diagnosis", "age", "appointments", 
												 "Last appointments", "Next appointments", "Primary Teeth",
												  "Permanent teeth", "Total Payments", "Outstanding", 
												"Over Paid Amount", "Difference Amount"]*/
									
											
												let newpat = patient.map(pat => {												
													return {
														"Id": pat._id,
														"Name": pat.name,
														"Birth Year":pat.birthYear,
														"Gender":pat.gender,
														"Tags": pat.tags,
														"Address":pat.address,
														"Email":pat.email,
														"Phone":pat.phone,
														"Labels":pat.labels,
														"History":JSON.stringify(pat.medicalHistory),
														"Gallery":JSON.stringify(pat.gallery),
														"Diagnosis": JSON.stringify(pat.diagnosis),
														"Age":pat.age,
														"Appointments":JSON.stringify(pat.appointments),
														"Last Appointments":JSON.stringify(pat.lastAppointment),
														"Next Appointments":JSON.stringify(pat.nextAppointment),
														"Primary Teeth":pat.nextAppointment,
														"Permanent teeth":pat.hasPrimaryTeeth,
														"Total Payments":pat.totalPayments,
														"Outstanding":pat.outstandingAmount,
														"Over Paid Amount":pat.overpaidAmount,
														"Difference Amount":pat.differenceAmount
													};
												})

												var csv = unparse(newpat);
												
												var blob = new Blob([csv]);
												var a = window.document.createElement("a");
														a.href = window.URL.createObjectURL(blob);
														a.download = "patients.csv";
														document.body.appendChild(a);
														a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
														document.body.removeChild(a);
												
											}
										},
										iconProps: {
											iconName: "Edit"
										}
									}
							  ]
							: []
					}
				/>

					<Dialog
					hidden={!this.state.smsDialog}
					onDismiss={this.closeSmsDialog}
					modalProps={{
						isBlocking: true,
						topOffsetFixed: true
					}}
					>
					
					<Dropdown
						label={text("Select User")}
						options={patients.list.map(x => ({
							key: x.name,
							text: text(x.name)
						}))}
						// defaultSelectedKey={this.props.orthoCase.obturation}
						// onChange={(ev, has: any) => {
						// 	this.props.orthoCase.obturation = has.key;
						// }}
					/>
						<TextField
							label="Message"
							value={setting.getSetting(
								"message_body"
							)}
							// onChange={(ev, v) => {
							// 	this.props.orthoCase.canals = num(v!);
							// }}
							multiline
							rows={5}
							/>
						<DialogFooter>
							<PrimaryButton onClick={this.closeSmsDialogOnSend} text="Send" />
							<DefaultButton onClick={this.closeSmsDialog} text="Cancel" />
						</DialogFooter>
					</Dialog>
			</div>
		);
	}
}

/****
 *	
 * /*	unparse({
													{
														"Column 1": "foo",
														"Column 2": "bar"
													},
													{
														"Column 1": "abc",
														"Column 2": "def"
													}
												});
 * 
 */
