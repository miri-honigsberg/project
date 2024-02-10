import { action, makeObservable, observable } from "mobx"
const list = []

class DataStore {
  services = []
  businessData = {}
  isLogin = false;
  meetings = [];
  constructor() {
    makeObservable(this, {
      services: observable,
      businessData: observable,
      isLogin: observable,
      meetings: observable,
      setServices: action,
      addService: action,
      setMeetings: action,
      setBusinessData: action
    })
  }

  setBusinessData(data) {
    this.businessData = data
  }
  setServices(data) {
    this.services = [...list, ...data]

  }
  setMeetings(data) {
    this.meetings = data
  }
  addService(data) {
    this.services = [...this.services, data];
  }
  addnewAppointment(data) {
    this.meetings = [...this.meetings, data];
  }

}

export default new DataStore()