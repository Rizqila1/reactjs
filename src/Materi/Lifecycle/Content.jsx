import React from "react";
import axios from "axios";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


class Content extends React.Component {
        constructor(props) { 
            super(props); 
            this.state = {
                content: [],
                search: "",
            }; 
        };
        
        getData = () => {
            axios.get(`https://newsapi.org/v2/everything?q=${this.state.search || "a"}&language=en&apiKey=e400dae40cbd4dfc8f8770dfb8de9412`)
            .then ((response) => {
                // console.log(response.data);
                this.setState((values) => ({...values, content: response.data.articles}))
            })
            .catch ((error) =>  {
                console.log(error);
            })
        };
        
        componentDidMount() {
              this.getData();
        };

        handleValue = (event) => {
            this.setState((values) => ({ ...values, search: event.target.value}));
            // console.log(event.target.value);
        };
        
        submit = (event) => {
            event.preventDefault();
            this.getData();
            // console.log(`enter`, this.state);
        };
        

        render() {
            let { content } = this.state;  
            return ( 
                <div className="main-background">
                    <Container fluid className="pt-5">
                    <form onSubmit={this.submit}>
                        <input type="text" className="search" placeholder="Search News..."
                        onChange={this.handleValue}>     
                        </input>
                    </form>
                    <h1 className="rainbow mt-4">Check Up On What's Going On!</h1>
                    </Container>

                    <Container className="mt-5">
                    <Row>
                    {content.map((data, i) => (
                    <Col key={i} className="p-3 col-md-4 col-sm-6 col-none-12">
                    <Card style={{ width: '100%', border: '3px solid white'}} className="mx-5">
                    <Card.Img variant="top" src={data.urlToImage || `http://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png`} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <p style={{color: "grey"}}>{data.author}{` `}{data.publishedAt}</p>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                    <Button variant="dark" href={data.url}>Read News</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    ))}
                    </Row>
                    </Container> 
                </div>
            ); 
        }; 
    };


export default Content;