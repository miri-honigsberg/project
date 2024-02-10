import { action, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'
import { addServiceToServer } from './DataServer';


class DataStore {
  //----------------------------------LOGIN-PAGE:
  //מעדכנת  אותו action/והפונקציה שהיא observable/יצרנו מחלקה שמכילה משתנה 
  //services = [];

  //BusinessData
  isLogin = false;
  isMeeting = true;
  services = [];
  meetings = [];
  businessData = {};
  listServices = [];
  listAppointments = [
  ]
  isAdmin = false;

  constructor() {
    makeObservable(this, {
      // business: observable,
      isLogin: observable,
      setIsLogin: action,
      services: observable,
      setServices: action,
      addService: action,
      meetings: observable,
     // setMeetings: action,
      //addMeeting: action,
      businessData: observable,
      setBusinessData: action,
      editBusinessData: action,
      isMeeting: observable,
     // setIsMeeting: action,

    })
  }
  setServices = (data) => {

    this.services=data;
  }
 
  
  setMeetings=(data)=>{
    this.meetings=data;
  }
  addService = (service) => {
    this.services = [...this.services, service];
  }
  setBusinessData = (data) => {

    if (data !== undefined && data.name !== undefined) {
      this.businessData = data;
    }
    else {
      this.businessData = defaultBusinessData;
    }

  }
initialServices = async () => {
  axios.get("http://localhost:8080/services").then((result) => {
    runInAction(() => {
      this.listServices = result.data;

    });
  });

}

 setServices = (service) => {

    if (Object.keys(service).length === 0) {
      DefaultServices.map(s => addServiceToServer(s))
    }
    else {
      this.services = service;
    }
  }

updateDetailsAdmin=(data)=> {
  console.log("data? is?", data);
  console.log("In update Details:", this.business);
  axios.post("http://localhost:8080/businessData",
    {
      // method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),



    }).then((response) => {
      console.log("then:", response);
      if (response.status == 200) {
        this.business.name = data.name
        this.business.address = data.address
        this.business.phone = data.phone
        this.business.owner = data.owner

        this.business.logo = data.logo
        this.business.description = data.description
      }
      console.log("BUISNESS IS", this.business);

    }).catch((response) => {
      console.log("ERROR", response.status);
    })

};
  setIsLogin(status) {
    this.isLogin = status;
  }
  addBySortedWay=(newAppointment) =>{
    // newAppointment=JSON.stringify(newAppointment)
    const insertIndex = this.appointments.findIndex(
      // משמעות: האם האיבר הנוכחי במערך גדול יותר מהתאריך שקבלה ה פנוקציה
      //(אחרי שממירים אותו לפורמט הנדרש)
      (appointment) => new Date(appointment.dateTime) > new Date(newAppointment.dateTime)
    );
    //הפונקציה  נעצרת באיבר הראשון שיותר גדול ממה שהפונקציה קבלה
    if (insertIndex === -1) {
      //אם לא נמצא  אבר גדול יותר סימן שהתאריך שקבלנו הוא הכי גדול ולכן נוסיף לסוף
      this.listAppointments.push(this.addnewAppointment);
    } else {
      this.listAppointments.splice(insertIndex, 0, newAppointment);
    }
  }
  //----------------------
  setIsStateSetting = (val) => {
    this.isStateSetting = val;
  }
  setBusinessData = (data) => {
    alert("v")
    if(data!={}&&data.name!=undefined){
      this.business.name = data.name
      this.business.address = data.address
      this.business.phone = data.phone
      this.business.owner = data.owner
  
      this.business.logo = data.logo
      this.business.description = data.description
    }
    else{
      this.businessData=defaultBusinessData;
    }
  }
  setIsAdmin = (val) => {
    this.isAdmin = val;
  
  }
  setEnableButtons = (val) => {
    this.enableButtons = val;
  }
  setIsNewService = (val) => {
    this.isNewService = val;
  }
  initBusinessData = async () => {
    console.log("rt");
    const responseData = await fetch("http://localhost:8080/businessData")
    const jsData = await responseData.json()
    this.business.name = jsData.name
    this.business.address = jsData.address
    this.business.phone = jsData.phone
    this.business.owner = jsData.owner
  
    this.business.logo = jsData.logo
    this.business.description = jsData.description
    // this.business=jsData;
  
  }
    editBusinessData(formData) {
      this.businessData = formData;
    }
    addnewAppointment = (appointment) => {
      this.listAppointments = [...this.listAppointments, appointment];
    }
  };
  export default new DataStore();

  const defaultBusinessData = {
    name: " B-B-A",
    address: " Ben GURYON, Bney Braq",
    phone: "053-311-1444",
    email: "bba@gmail.com",
    owner: " Rubinshtein",
    logo: '.././logo1',

    description: "מתחם הבריכה והבריאות הגדול בישראל"
  }

   const DefaultServices = [
    {

      name: "כניסה לבריכה",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://portals.co.il/uploads/36E102FF564F2A2FF8E8_500x500_4.jpg"

    },

    {
      name: "כניסה לסאונה יבשה",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://www.spaplus.co.il/gallery/1646894498400034jpeg/999x4501646894498400034.jpeg"


    },
    {
      name: "כניסה לג'קוזי",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://sharespa.co.il/wp-content/uploads/2021/12/%D7%9E%D7%92%D7%99%D7%A7-%D7%92%D7%A8%D7%93%D7%9F-%D7%A0%D7%A9%D7%A8-26.jpeg"

    },
    {
      name: "כניסה לחדר כושר",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://portals.co.il/uploads/36E102FF564F2A2FF8E8_500x500_4.jpg"

    },
    {
      name: "כניסה לבריכה",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://www.yamitspark.co.il/files/SPA/%D7%A1%D7%A4%D7%90_%D7%97%D7%93%D7%A9___Copy.jpg"

    }, {
      name: "כניסה לספא",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://portals.co.il/uploads/36E102FF564F2A2FF8E8_500x500_4.jpg"
    }
  ];


 

  
