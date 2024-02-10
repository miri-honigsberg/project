import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 import './Header.css'
 import logo from '../../assets/picture/logo1.png';

// export default function MediaCard() {
//   return (
//     <div className="card">
//     <Card sx={{ maxWidth: 250 }}>
//       <CardMedia
//     sx={{ height: 20  }}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         <img className="header-logo" src={logo} alt="Logo" /> 
//           <h1 id='hh1'>B-B-A</h1>
//           <h3>בני ברק אקטיב</h3>
//           <h4>כתובת: מתחם הסופרים</h4>
//           <p> - בחסות עיריית בני ברק -</p>

//         </Typography>
       
//       </CardContent>
//       <CardActions>
//         <Button size="small">ליצירת קשר</Button>
//         <Button size="small"> לדרכי הגעה</Button>
//       </CardActions>
//     </Card>
//     </div>
//   );
// }                  


const Header = () => {
  return (
   

    <div className='hd' >

<div className="header-content">
<img className="header-logo" src={logo} alt="Logo" /> 
  <h1 className="header-title">B B A</h1>
  <h3 className="header-subtitle">בני ברק אקטיב</h3>
        <h3 className="header-description">מתחם הבריכה הגדול בישראל</h3>
        <p className="header-disclaimer"> - בחסות עיריית בני ברק -</p>

  
</div>
 
    
    </div>
  
  );
};
export default Header