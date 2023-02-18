import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'


export default class ContainerFluidExample extends React.Component {
    render () {
  return (
    <Container fluid>
      <Row className="navbar">
        <Col md={{span: 6 , offset: 1}}>
          <img src={require('./img/eduwork navbar.png')} alt="eduwork" className="imgNavbar"/>
        </Col>
        <Col md={1} style={{color: "white", fontWeight: "bold"}}>Home</Col>
        <Col md={1} style={{color: "white" , fontWeight: "bold"}}>Class &#9662;</Col>
        <Col md={1} style={{color: "white", fontWeight: "bold"}}>Member &#9662;</Col>
        <Col md={1} className="me-5 pe-5" style={{color: "white", fontWeight: "bold"}}>Help</Col>
      </Row>
      <Row className="gradient">
        <Col md={5}>
                <h3 className="ft" style={{color: "white"}}>Pelatihan dan penyaluran kerja!</h3>
                <h5 className="ft2">Dapatkan gaji s.d lebih dari 10jt! Yuk, Pilih program yang sesuai dengan yang kamu inginkan!</h5>
                <button type="button" className="btn btn-warning">Daftar</button>
                <button type="button" className="btn btn-dark">Konsul Dulu</button>
        </Col>
        <Col md={7}>
                <img src={require('./img/aniq.png')} alt="aniq" className="aniq"/>
        </Col>
      </Row>
      <div className="whatIs" style={{backgroundColor: "#e8f7ff"}}>
        <Row>
          <Col md={{span:6, offset: 1}}>
            <h2 style={{fontWeight: "Bold"}}>Apa Itu Eduwork?</h2>
          </Col>
          <Col md={4}>
            <h5>Platform pelatihan & penyaluran kerja. Kamu bisa belajar dari 0 sampai bisa dan dapat kerja, dijamin!</h5>
          </Col>  
        </Row>
      </div>
      <Row className="feed" style={{backgrounColor: "#f7fcff"}}>
          <Col md={{span:6, offset: 1}} className="mt-5">
                <div className="txt">
                <h2 style={{fontWeight: "bolder"}}>Dibimbing Sampai Bisa!</h2>
                <h5>Walaupun kamu tidak memiliki latar belakang skill digital. Kamu masih bisa belajar karena materi disesuaikan untuk pemula. Dan akan dibimbing oleh mentor/praktisi.</h5>
                </div>
          </Col>
          <Col md={4} className="mt-5">
              <img src="https://eduwork.id/assets/benefit-home.png" alt="asset1"/>
          </Col>
      </Row>
      <Row className="bluebox">
          <Col md={{span:6,offset:0}}>
                <img src="https://eduwork.id/assets/ISA.png" alt="asset2" style={{width :"450px", height: "400px"}}/>
          </Col>
          <Col md={6} >
          <div className="textBx">
                <h2 style={{fontWeight: "bold"}}>Murah, Bisa Dicicil!</h2>
                <h5>Bisa mulai dari 1jt, pelunasan bisa sampai 6 bulan. Dengan gaji sampai dengan 10jt lebih, 1x gaji sudah balik modal untuk menutup biaya!</h5>
          </div>
          </Col>
      </Row>
      <Row>
        <Col md={{span: 6, offset: 1}} className="mt-1">
        <div className="txt">
                <h2 style={{fontWeight: "bolder"}}>Disalurkan Kerja, Dijamin!</h2>
                <h5>Selain kalian akan dibimbing sampai bisa, Kamu juga akan dicarikan kerja sampai kalian dapat loh. Ayo tunggu apalagi mumpung program ini masih ada.</h5>
        </div>
        </Col>
        <Col md={4} className="mt-5">
                <img src="https://eduwork.id/assets/benefit-home.png" alt="assets3"/>
        </Col>
      </Row>
    </Container>
  );
    }
}
