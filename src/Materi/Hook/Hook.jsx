import React, { useCallback, useEffect ,useState } from "react";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Loader from "./Loader";
import "./css/index.css"

const Hook = () => {
    const [article, setArticle] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // let totalPage = 0
    const perPage = 15
    const apiKey = "9938ad9d30f8403bb51362acb0a0537b"
    
    const getData = () => {
        setLoading(true);
            axios
            .get(`https://newsapi.org/v2/everything?q=a&language=en&page=1&pageSize=15&apiKey=9938ad9d30f8403bb51362acb0a0537b`)
            .then ((response) => {
                // console.log(response.data);
                setLoading(false);
                setArticle(response.data.articles)
            })
            .catch ((error) =>  {
                console.log(error);
            });
        }


    const handleValue = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loadData()
    };

    const loadData = () => {
        setLoading(true);
            axios
            .get(`https://newsapi.org/v2/everything?q=${search || "a"}&language=en&page=${page}&pageSize=${perPage}&apiKey=${apiKey}`)
            .then ((response) => {
                console.log(response.data);
                setLoading(false);
                setArticle(response.data.articles)
            })
            .catch ((error) =>  {
                console.log(error);
            });
    }

    const Prev = () => {
        setPage(page - 1)
        console.log(page)
        loadData()
    }

    const Next = () => {
        setPage(page + 1)
        console.log(page)
        loadData()
    }

    const fetcharticle = useCallback(() => getData(), []) 

    useEffect(() => {
    const API = fetcharticle;
    setArticle(API);
    },  [fetcharticle]);
      

    return (
        <div className="main-background">
                    <Container fluid className="pt-5">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="search" 
                        placeholder="Search News..."
                        onChange={handleValue}>
                        </input>
                    </form>
                    <h1 id="Title" className="rainbow mt-4">Check Up On What's Going On!</h1>
                    <p style={{color : "white", textAlign: "center"}}>(Made with Functional Component)</p>
                    </Container>

                    {loading ? <Loader/> :
                        <div style={{width: "93%"}}>                
                            <Row className="mt-5">
                                {article?.map((element, i) => (
                                    <Col key={i} className="p-3 col-md-4 col-sm-6 col-none-12">
                                        <Card style={{ width: '100%'}} className="mx-5 border-gradient border-gradient-purple">
                                        <Card.Img variant="top" src={element.urlToImage || `http://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png`} />
                                            <Card.Body>
                                                <Card.Title>{element.title}</Card.Title>
                                                <p style={{color: "grey"}}>{element.author}{` `}{element.publishedAt}</p>
                                                <Card.Text>
                                                    {element.description}
                                                </Card.Text>
                                                <Button variant="dark" href={element.url}>Read News</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))};
                            </Row>   
                        </div>
                    };
        </div>
    )
}


export default Hook;