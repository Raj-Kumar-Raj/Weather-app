import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/1498960552/photo/thermometer-shows-high-temperature-in-summer-heat-and-bottle-with-water-with-drinking-glass.webp?b=1&s=170667a&w=0&k=20&c=0tD_o2Qwfj_b7c3m33hYwYdOZlk8bxfujskYMsuDMuM=";
    const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 
    return (
        <div className="InfoBox">

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAINY_URL: info.temp>15?HOT_URL:COLD_URL}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} &nbsp;
                        {info.humidity>80?<ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
