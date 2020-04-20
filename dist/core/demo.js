import { getRandomTagType } from "@common-components";
import { Appointment, appointments, OrthoCase, orthoCases, Patient, patients, PrescriptionItem, prescriptions, setting, SettingsItem, staff, StaffMember, Treatment, treatments, Insurance, insurances } from "@modules";
import { day, store } from "@utils";
import { toJS } from "mobx";
function randomInRange(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
function randomDate() {
    const now = new Date().getTime();
    const diff = day * 50;
    return randomInRange(now - diff, now + diff);
}
function randomFromArray(array, canBeUndefined) {
    return array[randomInRange(0, array.length - 1)];
}
function randomLabels() {
    const labels = [
        "VIP",
        "comprehensive",
        "ideal",
        "friend",
        "colleague",
        "co-worker",
        "relative",
        "TM",
        "hesitant",
        "introvert",
        "cooperative",
        "family-plan",
        "religious",
        "frail",
        "old"
    ];
    const label = randomFromArray(labels, true);
    const result = [];
    if (label) {
        result.push({ text: label, type: getRandomTagType(label) });
    }
    return result;
}
function randomAddress() {
    const addresses = [
        "6031 Vest Dr, Dublin, VA, 24084",
        "19638 Deer Run Rd, Warrenton, MO, 63383",
        "380 32nd St NE, Paris, TX, 75460",
        "5118 W Scioto Dr, Fairfield, OH, 45014",
        "6250 Mirons 16.8 Ln, Rapid River, MI, 49878",
        "26933 State 3 Rte #3, Watertown, NY, 13601",
        "6031 Vest Dr, Dublin, VA, 24084",
        "19638 Deer Run Rd, Warrenton, MO, 63383",
        "380 32nd St NE, Paris, TX, 75460",
        "1244 W Lebanon St, Mount Airy, NC, 27030",
        "5118 W Scioto Dr, Fairfield, OH, 45014"
    ];
    return randomFromArray(addresses, false);
}
function randomPhoneNumber() {
    const addresses = [
        "07874653871",
        "07387462516",
        "07839847564",
        "07184758493",
        "07878362531",
        "07654578123",
        "07809032513",
        "07800983726",
        "07829477772"
    ];
    return randomFromArray(addresses, false);
}
function randomCondition() {
    const addresses = ["filled", "sound", "compromised", "endo", "missing"];
    return randomFromArray(addresses, false);
}
export function loadDemoData() {
    return new Promise((resolve, reject) => {
        const Http = new XMLHttpRequest();
        const url = "./demo.json";
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                const demoData = JSON.parse(Http.responseText);
                treatments.list = demoData.treatmentsData.treatments.list.map((x) => new Treatment(x));
                setting.list = demoData.settingsData.settings.list.map((x) => new SettingsItem(x));
                staff.list = demoData.staffData.staffMembers.list.map((x) => new StaffMember(x));
                insurances.list = demoData.staffData.staffMembers.list.map((x) => new Insurance(x));
                prescriptions.list = demoData.prescriptionsData.prescriptions.list.map((x) => new PrescriptionItem(x));
                patients.list = demoData.patientsData.patients.list.map((x) => new Patient(x));
                orthoCases.list = demoData.orthoData.cases.list.map((x) => new OrthoCase(x));
                appointments.list = demoData.appointmentsData.appointments.list.map((x) => new Appointment(x));
                patients.list.forEach((patient, i) => {
                    patients.list[i].labels = randomLabels();
                    patients.list[i].address = randomAddress();
                    patients.list[i].phone = randomPhoneNumber();
                    patients.list[i].email =
                        patients.list[i].name.toLowerCase().replace(/\W/g, "") +
                            "@gmail.com";
                    patients.list[i].birthYear =
                        Math.floor(Math.random() * 49) + 12;
                    patients.list[i].teeth.forEach((x, ti) => {
                        if (Math.floor(Math.random() * 49) + 12 < 35) {
                            patients.list[i].teeth[ti].condition = randomCondition();
                        }
                    });
                });
                staff.list.forEach((member, i) => {
                    staff.list[i].phone = randomPhoneNumber();
                    staff.list[i].email =
                        staff.list[i].name.toLowerCase().replace(/\W/g, "") +
                            "@gmail.com";
                });
                insurances.list.forEach((insurance, i) => {
                    insurances.list[i].information = randomPhoneNumber();
                    insurances.list[i].name = randomAddress();
                    insurances.list[i].discount = randomInRange(1, 8);
                });
                appointments.list.forEach((appointment, i) => {
                    appointments.list[i].date = randomDate();
                    appointments.list[i].treatmentID =
                        randomFromArray(treatments.list.map(x => x._id), false) || treatments.list[0]._id;
                    appointments.list[i].finalPrice =
                        appointment.expenses + randomInRange(0, 30);
                    if (randomInRange(0, 10) > 8) {
                        appointments.list[i].paidAmount =
                            appointment.finalPrice + randomInRange(-10, 0);
                    }
                    else {
                        appointments.list[i].paidAmount =
                            appointment.finalPrice;
                    }
                    appointments.list[i].staffID = [
                        randomFromArray(staff.list.filter(x => x.operates).map(x => x._id), false)
                    ];
                    console.log(toJS(appointments.list[i].staffID));
                    appointments.list[i].isDone =
                        appointment.date < new Date().getTime();
                });
                store.set("user_id", "89ab37f032d6f1b11512");
                resolve();
            }
        };
    });
}
//# sourceMappingURL=demo.js.map