import { AsyncComponent, Col, ProfileComponent, Row, SectionComponent } from "@common-components";
import { text, user } from "@core";
import { conditionToColor, Patient, ToothCondition } from "@modules";
import { EditableListComponent } from "common-components/editable-list/editable-list";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import { Dropdown, IconButton, Panel, PanelType, Toggle, DefaultButton } from "office-ui-fabric-react";
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import * as React from "react";


interface MyProps {
	patient: Patient;
}

interface MyState {
	printview: string;	
}


@observer
export class DentalHistoryPanel extends React.Component<
	{ patient: Patient },
	MyState
> {

	constructor(props: MyProps) {
		super(props);

		this.state = {
		  printview: ""
		};
	  }
	
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

				 <Dropdown
						disabled={!this.canEdit}
						placeholder={text("Print")}
						options={Object.keys(options).map(x => ({
							key: x,
							text: text((options as any)[x])
						}))}
						defaultSelectedKey={options.both}
						onChange={(ev, has: any) => {
							if (has.key === options.left){
								this.setState({
									printview: "left"
								}, () => {
									window.print();
								})
							}
						}}
					/>
			{/*	<ReactToPrint
							trigger={() => <IconButton
								iconProps={{ iconName: "print" }}
							
							/>}
							content={() => this}
							/> */}

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
							<DefaultButton text="Add Diagnosis" onClick={()=>{ !this.viewDiagnosis; }} style={{ width: '100%' }} allowDisabledFocus />
						
							<Nav
								styles={{ root: { width: 300 } }}
								ariaLabel="Nav example similiar to one found in this demo page"
								groups={[
									{
									name: 'K00 Disorders of tooth development and eruption',
										
									links: [
										{
										key: 'K00.0',
										name: 'K00.0 Anodontia',
										url:'',
										onClick: (ev, item: any) => {
											alert(item)
										}
										},
										{
										key: 'K00.1',
										name: 'K00.1 Supernumerary teeth',
										url: '',
										onClick: (ev, item: any) => {
											alert(item)
										}
										},
										{
										key: 'Button',
										name: 'Button',
										url: '#/examples/button'
										}
									]
									},
									{
									name: 'Extended components',
									
									links: [
										{
										key: 'ColorPicker',
										name: 'ColorPicker',
										url: '#/examples/colorpicker'
										},
										{
										key: 'ExtendedPeoplePicker',
										name: 'ExtendedPeoplePicker',
										url: '#/examples/extendedpeoplepicker'
										},
										{
										key: 'GroupedList',
										name: 'GroupedList',
										url: '#/examples/groupedlist'
										}
									]
									},
									{
									name: 'Utilities',
									
									links: [
										{
										key: 'FocusTrapZone',
										name: 'FocusTrapZone',
										url: '#/examples/focustrapzone'
										},
										{
										key: 'FocusZone',
										name: 'FocusZone',
										url: '#/examples/focuszone'
										},
										{
										key: 'MarqueeSelection',
										name: 'MarqueeSelection',
										url: '#/examples/marqueeselection'
										}
									]
									}
								]}
						/>
							
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

	
}


/**
 * <Dropdown
								placeholder={text(`Condition`)}
								onChange={(ev, newVal: any) => {
									this.props.patient.teeth[
										this.viewToothISO
									].condition = newVal.key.toString();
									this.props.patient.triggerUpdate++;
									this.forceUpdate();
								}}
								defaultSelectedKey={
									this.props.patient.teeth[this.viewToothISO]
										.condition
								}
								className="single-tooth-condition"
								options={Object.keys(ToothCondition).map(c => ({
									key: c,
									text: text(c)
								}))}
								disabled={!this.canEdit}
							/>
							<EditableListComponent
								label={text("History notes")}
								value={
									this.props.patient.teeth[this.viewToothISO]
										.notes
								}
								disabled={!this.canEdit}
								onChange={e => {
									this.props.patient.teeth[
										this.viewToothISO
									].notes = e;
									this.props.patient.triggerUpdate++;
								}}
							/>
 *  **/