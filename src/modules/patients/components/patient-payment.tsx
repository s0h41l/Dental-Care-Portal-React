import { Col, Row, DataTableComponent } from "@common-components";
import { user, text } from "@core";
import { Patient, patients, Payment, setting, appointments } from "@modules";
import { computed } from "mobx";
import { formatDate } from "@utils";
import { observer } from "mobx-react";
import {
  CommandBar,
  Checkbox,
  TextField,
  Dropdown
} from "office-ui-fabric-react";
import * as React from "react";
import { PaymentModal } from "./payment-modal";
import { parse } from "json2csv";
@observer
export class PatientPaymentPanel extends React.Component<{
  patient: Patient;
}> {
  state = {
    viewWhich: 0,
    selectedPaymentId: "",
    checkedAppointmentIds: [""]
  };

  @computed get canEdit() {
    return user.currentUser.canEditPatients;
  }

  @computed
  get formateToCsvData() {
    return this.props.patient.appointments.map(appointment => ({
      Id: appointment._id,
      Status: appointment.status,
      Price: appointment.finalPrice,
      Profit: appointment.profit,
      Paid: appointment.paidAmount,
      Remaining: appointment.remainingAmount,
      Insurance: appointment.insuranceDetails.discount,
      Discount: appointment.discount,
      Description: appointment.paymentDescription,
      Tooth: appointment.involvedTeeth.join(", "),
      Procedure: appointment.procedureName,
      Date: new Date(appointment.date).toString(),
      Signature: ""
    }));
  }

  handleChange = (id: string, key: string) => (
    e: any,
    value: string | number
  ) => {
    const payments = this.props.patient.payments.map((payment: any) => {
      if (payment._id === id) {
        payment[key] = value;
      }
      return payment;
    });
    this.props.patient.payments = payments;
  };

  render() {
    const { viewWhich } = this.state;
    const { patient } = this.props;
    const {
      totalDues,
      totalDiscount,
      totalPaid,
      totalRemaining
    } = patient.paymentDetails;
    return (
      <div className="payment">
        {viewWhich === 1 ? (
          <PaymentModal
            patient={this.props.patient}
            onClick={() => {
              this.setState({ viewWhich: 0 });
            }}
          />
        ) : (
          ""
        )}
        <Row gutter={6}>
          <Col sm={4}>Total Dues : {totalDues}</Col>
          <Col sm={4}>Discount : {totalDiscount}</Col>
          <Col sm={4}>Net : {totalPaid}</Col>
          <Col sm={4}>Remaining : {totalRemaining}</Col>
        </Row>
        <Row className="break-line"></Row>
        <Row className="payment-header">
          <CommandBar
            items={[
              {
                key: "newPayment",
                text: "New Payment",
                iconProps: { iconName: "Add" },
                onClick: () => {
                  this.setState({
                    viewWhich: 1
                  });
                }
              },
              {
                key: "delete",
                text: "Delete",
                iconProps: { iconName: "Trash" },
                onClick: () => {
                  const { checkedAppointmentIds } = this.state;
                  checkedAppointmentIds.forEach(id => {
                    appointments.deleteByID(id);
                  });
                  this.setState({ checkedPaymentIds: [] });
                }
              },
              {
                key: "procedure",
                text: "Procedure",
                iconProps: { iconName: "Share" },
                onClick: () => console.log("Share")
              },
              {
                key: "exportTable",
                text: "Export Table",
                iconProps: { iconName: "Download" },
                onClick: () => {
                  if (this.formateToCsvData.length) {
                    const csv = parse(this.formateToCsvData);
                    console.log(csv);
                    const blob = new Blob([csv], {
                      type: "application/octet-stream"
                    });
                    saveAs(blob, this.props.patient.name + " Payment.csv");
                  }
                }
              }
            ]}
          />
        </Row>
        <Row>
          {this.props.patient.appointments.length !== 0 && (
            <DataTableComponent
              maxItemsOnLoad={3}
              heads={[
                "",
                text("Id"),
                text("Status"),
                text("Price"),
                text("Profit"),
                text("Paid"),
                text("Remaining"),
                text("Insurance") + "(%)",
                text("Discount") + "(%)",
                text("Description"),
                text("Tooth"),
                text("Procedure"),
                text("Date"),
                text("Signature")
              ]}
              hideSearch={true}
              rows={
                this.props.patient.appointments.map((appointment, i) => ({
                  id: i + "pp",
                  cells: [
                    {
                      dataValue: "",
                      component: (
                        <Checkbox
                          checked={this.state.checkedAppointmentIds.includes(
                            appointment._id
                          )}
                          onChange={(event, value) => {
                            const { checkedAppointmentIds } = this.state;
                            if (value) {
                              checkedAppointmentIds.push(appointment._id);
                              this.setState({
                                checkedAppointmentIds
                              });
                            } else {
                              const index = checkedAppointmentIds.indexOf(
                                appointment._id
                              );
                              if (index > -1) {
                                checkedAppointmentIds.splice(index, 1);
                                this.setState({ checkedAppointmentIds });
                              }
                            }
                          }}
                        />
                      )
                    },
                    {
                      dataValue: appointment._id,
                      component: <p>{appointment._id}</p>
                    },
                    {
                      dataValue: appointment.status,
                      component: (
                        <p style={{ width: "150px" }}>
                          <Dropdown
                            options={[
                              "Completed",
                              "Not Completed",
                              "In Processing",
                              "Delayed",
                              "Discontinued"
                            ].map(x => ({
                              key: x.toString(),
                              text: x.toString()
                            }))}
                            selectedKey={appointment.status}
                            onChange={(ev, val) => {
                              if (val.key.toString() === "Completed") {
                                appointment.setIsDone(true);
                                // this.props.appointment!.isDone = true;
                              } else {
                                appointment.setIsDone(true);
                                // this.props.appointment!.isDone = false;
                              }
                              if (patient && patient.procedures) {
                                const newPro: any = patient.procedures.map(
                                  pro => {
                                    if (pro.id === appointment.procedureId) {
                                      pro.status = val.key.toString();
                                    }
                                    return pro;
                                  }
                                );
                                patient.procedures = newPro;
                              }
                              appointment!.setStatus(val.key.toString());
                            }}
                          />
                        </p>
                      )
                    },
                    {
                      dataValue: appointment.finalPrice,
                      component: <p>{appointment.finalPrice}</p>
                    },
                    {
                      dataValue: appointment.profit,
                      component: <p>{appointment.profit}</p>
                    },
                    {
                      dataValue: appointment.paidAmount,
                      component: <p>{appointment.paidAmount}</p>
                    },
                    {
                      dataValue: appointment.remainingAmount,
                      component: <p>{appointment.remainingAmount}</p>
                    },
                    {
                      dataValue: appointment.insuranceDetails.discount,
                      component: <p>{appointment.insuranceDetails.discount}</p>
                    },
                    {
                      dataValue: appointment.discount,
                      component: <p>{appointment.discount}</p>
                    },
                    {
                      dataValue: appointment.paymentDescription,
                      component: <p>{appointment.paymentDescription}</p>
                    },
                    {
                      dataValue: appointment.involvedTeeth,
                      component: <p>{appointment.involvedTeeth.join(", ")}</p>
                    },
                    {
                      dataValue: appointment.procedureName,
                      component: <p>{appointment.procedureName}</p>
                    },
                    {
                      dataValue: appointment.date,
                      component: (
                        <p>
                          {formatDate(new Date(appointment.date), "dd/mm/yyyy")}
                        </p>
                      )
                    },
                    {
                      dataValue: "",
                      component: <p>{""}</p>
                    }
                  ]
                })) as any
              }
            />
          )}
        </Row>
      </div>
    );
  }
}
