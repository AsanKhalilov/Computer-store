import React from 'react';
import { Card, Col, Container, Image, Row , Button} from 'react-bootstrap';
import RatingStar from "../assets/RatingStar.png"

const DevicePage = () => {
  const device = {id: 1, name: "SATA 860 Pro", price: 17000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
  const description = [
    {id:1, title: 'Тип', descriptiion: '2.5" SATA накопитель'},
    {id:2, title: 'Модель', descriptiion: 'Samsung 860 Pro'},
    {id:3, title: 'Объем накопителя', descriptiion: '1000 ГБ'},
    {id:4, title: 'NVMe', descriptiion: 'нет'},
    {id:5, title: 'Разьем подключения', descriptiion: 'SATA'},
  ]

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={6}>
          <Image width={450} height={450} src={device.img}/>
        </Col>
        <Col md={3}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'     
              style={{background:`url(${RatingStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64 }}     
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={3}>
          <Card 
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"} >Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h2>Характеристики</h2>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.descriptiion}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
