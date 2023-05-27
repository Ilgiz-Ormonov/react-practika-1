import './App.css';
import Description from './components/Description';
import Img from './components/Img';
import Name from './components/Name';
import Price from './components/Price';
import Id from './components/id';
const foods = [
  {
    img:"https://www.open.kg/uploads/posts/2020-02/1581181803_screenshot_48.png",
    id: "1",
    name: "Куурдак",
    description: "кыргыз элинин эң сыйлуу тамактарынын бири.",
    price: "500 som",
  },
  {
    img:"https://multivarka-receptik.ru/wp-content/uploads/2022/10/beshbarmak-reczept-klassicheskij.jpg",
    id: "2",
    name: "Бешбармак",
    description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
    price: "350 som",
  },
  {
    img:"https://www.open.kg/uploads/posts/2019-12/1576333496_screenshot_43.png",
    id: "3",
    name: "Чучук",
    description: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
    price: "400 som",
  },
  {
    img:"https://barometr.kg/storage/app/uploads/public/5f3/4d4/6c2/5f34d46c22669519679695.jpg",
    id: "4",
    name: "Быжы",
    description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
    price: "750 som",
  },
];


function App() {

  return (
    <div className="App">

      {foods.map((el)=>{
        return (
          <div key={el.id}>
            <Id title = {el.id}/>
            <Name Ima = {el.name}/>
            <Description Des = {el.description}/>
            <Price Pri = {el.price}/>
            <Img Im = {el.img}/>
            
          </div>


        )


      
      })}

    </div>
  );
}

export default App;
