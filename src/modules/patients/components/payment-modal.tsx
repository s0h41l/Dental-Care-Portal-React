import * as React from "react";
import { getId } from "office-ui-fabric-react/lib/Utilities";
import {
  Modal,
  IconButton,
  DatePicker,
  TextField,
  Button,
  Icon,
  Dropdown,
  TooltipHost,
  Panel,
  PanelType
} from "office-ui-fabric-react";
import { Col, Row, ProfileComponent } from "@common-components";
import {
  Patient,
  Payment,
  PatientAppointmentsPanel,
  appointments
} from "@modules";
import { text } from "@core";
import { computed } from "mobx";
import { num } from "@utils";

export class PaymentModal extends React.Component<
  {
    onClick: () => void;
    patient: Patient;
  },
  {}
> {
  state = {
    openAppointment: false,
    discount: 0,
    insurance: 0,
    paidFees: 0,
    description: "",
    date: new Date(),
    receipt: 1,
    doctors: [],
    dueRemaining: "",
    selectedAppointmentId: ""
  };
  private _titleId: string = getId("title");
  private _subtitleId: string = getId("subText");

  @computed
  get appointment() {
    return appointments.list.find(
      app => app._id === this.state.selectedAppointmentId
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <Panel
          isOpen={this.state.openAppointment}
          type={PanelType.medium}
          customWidth={"100%"}
          closeButtonAriaLabel="Close"
          isLightDismiss={true}
          onDismiss={() => {
            this.setState({ openAppointment: false });
          }}
          onRenderNavigation={() => {
            return (
              <Row className="panel-heading">
                <Col span={22}>
                  <ProfileComponent
                    name={this.props.patient!.name}
                    secondaryElement={<div>{text("Patient Appointments")}</div>}
                    size={3}
                  />
                </Col>
                <Col span={2} className="close">
                  <IconButton
                    iconProps={{ iconName: "cancel" }}
                    onClick={() => {
                      this.setState({ openAppointment: false });
                    }}
                  />
                </Col>
              </Row>
            );
          }}
        >
          <PatientAppointmentsPanel patient={this.props.patient} />
        </Panel>
        <Modal
          titleAriaId={this._titleId}
          subtitleAriaId={this._subtitleId}
          isOpen={true}
          onDismiss={onClick}
          isBlocking={false}
          containerClassName="container"
        >
          <div className="modal-header">
            <span id={this._titleId}>Cash</span>
            <IconButton
              iconProps={{ iconName: "Cancel" }}
              ariaLabel="Close popup modal"
              onClick={onClick}
            />
          </div>
          <div id={this._subtitleId} style={{ padding: "10px" }}>
            <Row gutter={12}>
              <Col sm={16}>
                <h4>Payment</h4>
              </Col>
              <Col sm={5}>
                <Row gutter={6}>
                  <Col sm={3}>On</Col>
                  <Col sm={20}>
                    <DatePicker disabled value={this.state.date} />
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <Row gutter={12}>
                  <Col sm={12}>Receipt#</Col>
                  <Col sm={12}>{Payment.triggerUpdate}</Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col sm={6}>
                <TextField
                  disabled
                  type="number"
                  label="Due Remaining"
                  value={this.state.dueRemaining.toString()}
                />
              </Col>
              <Col sm={8}>
                <TextField
                  type="number"
                  placeholder="Payment"
                  label="Payment"
                  onChange={(e, newValue) => {
                    this.setState({ paidFees: newValue });
                  }}
                />
              </Col>
            </Row>
            <Row gutter={12}>
              <Col sm={24}>
                <TextField
                  placeholder="Description"
                  onChange={(e, newValue) => {
                    this.setState({ description: newValue });
                  }}
                />
              </Col>
            </Row>
            <Row gutter={12}>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col sm={4}>Patient</Col>
                  <Col sm={12}>
                    <TextField
                      disabled
                      placeholder="Patient"
                      value={this.props.patient.name}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col className="abcd" sm={4}>
                    Discount
                  </Col>
                  <Col sm={12}>
                    <TextField
                      disabled
                      value={this.state.discount.toString()}
                      placeholder="Discount"
                      prefix="%"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col sm={4}>Dentist</Col>
                  <Col sm={12}>
                    <Dropdown
                      disabled
                      placeholder="Dentist"
                      defaultSelectedKeys={this.state.doctors}
                      multiSelect
                      options={this.state.doctors.map(v => ({
                        key: v,
                        text: v
                      }))}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col sm={4}>Insurance</Col>
                  <Col sm={12}>
                    <TextField
                      disabled
                      value={
                        this.props.patient.insurance
                          ? this.props.patient.insurance.discount.toString()
                          : ""
                      }
                      placeholder="Insurance"
                      prefix="%"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col sm={4}>
                    <Button
                      disabled={
                        this.state.selectedAppointmentId && this.state.paidFees
                          ? false
                          : true
                      }
                      onClick={() => {
                        this.appointment.paidAmount =
                          num(this.appointment.paidAmount) +
                          num(this.state.paidFees);
                        this.appointment.paymentDescription = this.state.description;
                        onClick();
                      }}
                    >
                      <Icon iconName="CheckMark" />
                      Ok
                    </Button>
                  </Col>
                  <Col sm={4}>
                    <Button disabled>
                      <Icon iconName="Print" />
                      Print
                    </Button>
                  </Col>
                  <Col sm={4}>
                    <Button onClick={onClick}>
                      <Icon iconName="Cancel" />
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12}>
                <Row gutter={12}>
                  <Col sm={4}>Appointment</Col>
                  <Col sm={12}>
                    <Dropdown
                      placeholder="Appointment"
                      options={this.props.patient.appointments.map(v => ({
                        key: v as any,
                        text: new Date(v.date).toString()
                      }))}
                      onChange={(e, value: any) => {
                        this.setState({
                          dueRemaining: value.key.remainingAmount.toString(),
                          doctors: value.key.doctors,
                          selectedAppointmentId: value.key._id,
                          discount: value.key.discount
                        });
                      }}
                    />
                  </Col>
                  <Col sm={4}>
                    <TooltipHost content={text("Add appointment")}>
                      <IconButton
                        iconProps={{ iconName: "Add" }}
                        onClick={() => {
                          this.setState({ openAppointment: true });
                        }}
                      />
                    </TooltipHost>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}
