import { observer } from "mobx-react";
import { useState } from "react";
import GlobalStateAdmin from '../../AppStore/GlobalStateAdmin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';


const SetDetails = observer(() => {
  function handleChange(value, field) {
    // let tempData = data;
    // tempData[field] = value;
    // setData(tempData);
    setData(Object.assign(data, { [field]: value }));
    console.log(data);
  }
  
  //------------------------------
  const [data, setData] = useState({
    name: "",
  
    address: "",
    phone: "",
    owner: "",
    logo: "",
    description:""
  });
  

  function handleSubmit(e) {
    console.log("coming");
    e.preventDefault()
    console.log("Data is", data)
    GlobalStateAdmin.updateDetailsAdmin(data)
    GlobalStateAdmin.setIsStateSetting(false);
    GlobalStateAdmin.setEnableButtons(false);


  }

  return (
    <form onSubmit={handleSubmit}>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}>
        <CardContent>
          <TextField

            id="outlined-required"
            label="name"
            // onChange={(e) => setName(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'name')}
          />
          <br />
          <TextField

            id="outlined-required"
            label="address"
            // onChange={(e) => setAddress(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'address')}

          />
          <br />

          <TextField

            id="outlined-required"
            label="phone"
            // onChange={(e) => setPhone(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'phone')}

          />
          <br />

          <TextField

            id="outlined-required"
            label="owner"
            // onChange={(e) => setOwner(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'owner')}


          />
          <br />

          <TextField

            id="outlined-required"
            label="logo"
            // onChange={(e) => setLogo(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'logo')}

          />
          <br />

          <TextField
            required
            id="outlined-required"
            label="description"
            // onChange={(e) => setdescription(e.target.value)}
            onChange={(e)=>handleChange(e.target.value, 'description')}

          />
          <br />

          <Button size="small" color="primary" type="submit">
            Submit
          </Button>
        </CardContent>
        {/* </CardActionArea> */}
        {/* <CardActions>
    </CardActions> */}
      </Card>

    </form>
  )



})
export default SetDetails;