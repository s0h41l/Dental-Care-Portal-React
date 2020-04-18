import { SectionComponent } from "@common-components";
import { text, user } from "@core";
import {
  Appointment,
  appointments,
  AppointmentsListV2,
  Patient
} from "@modules";
import { computed } from "mobx";
import { observer } from "mobx-react";
import {
  DefaultButton,
  MessageBar,
  MessageBarType,
  PrimaryButton
} from "office-ui-fabric-react";
import * as React from "react";

@observer
export class PatientAppointmentsPanelV2 extends React.Component<
  { patient: Patient; selectedProcedureId: string },
  {}
> {
  @computed
  get appointments() {
    return appointments.list.filter(item => {
      return (
        item.patientID === this.props.patient._id &&
        item.procedureId === this.props.selectedProcedureId
      );
    });
  }

  @computed get canEdit() {
    return user.currentUser.canEditPatients;
  }

  @computed
  get procedure() {
    return this.props.patient.procedures.find(
      pro => pro.id === this.props.selectedProcedureId
    );
  }

  l: AppointmentsListV2 | null = null;

  render() {
    return (
      <div className="spa-panel appointments">
        <SectionComponent title={text(`Patient Appointments`)}>
          <AppointmentsListV2
            ref={l => (this.l = l)}
            list={this.appointments}
            procedure={this.procedure}
          />
          {this.appointments.length ? (
            ""
          ) : (
            <MessageBar messageBarType={MessageBarType.info}>
              {text("This patient does not have any appointment")}
            </MessageBar>
          )}
          <br />
          {this.canEdit ? (
            <DefaultButton
              onClick={() => {
                const apt = new Appointment();
                apt.patientID = this.props.patient._id;
                apt.finalPrice = this.procedure.fees;
                apt.involvedTeeth = this.procedure.tooth;
                apt.procedureId = this.props.selectedProcedureId;
                apt.date = new Date().getTime();
                appointments.list.push(apt);
                if (this.l) {
                  this.l.selectedAppointmentID = apt._id;
                }
              }}
              iconProps={{ iconName: "add" }}
              text={text("Book new appointment")}
            />
          ) : (
            ""
          )}
        </SectionComponent>
      </div>
    );
  }
}
