import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"


export default function InfoBox({info}) {


const img_Url = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBpbWd8ZW58MHx8MHx8fDA%3D"
const hot_Url = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg="
const rain_Url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
const cold_Url = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return (
        <div className="infoBox">
            
        <Card sx={{ Width: 345 }} className='image'>
            <CardMedia 
              sx={{ height: 200 }}
              image={ info.humidity >80 ? rain_Url : info.temp >15 ? hot_Url :cold_Url}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {info.city}
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Tempratue = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Temp Max = {info.tempMax}&deg;C</p>
                <p>Temp Min = {info.tempMin}&deg;C</p>
                <p>The weather feels like {" "} {info.feelsLike}&deg;C</p>
              </Typography>
            </CardContent>
          
        </Card>


        </div>
    );

}