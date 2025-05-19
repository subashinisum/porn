import React, { useState } from 'react';
import {
  Carousel,
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Card,
  Pagination,
  Form
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer';

const featuredVideos = [
  { title: 'Hot Summer Beach Party With Amazing Views', thumb: '1.2.jpg', duration: '12:34', views: '1.2M', date: '2 days ago' },
  { title: 'Intense Workout Session With Professional Trainer', thumb: '2.jpg', duration: '10:21', views: '890K', date: '1 week ago' },
  { title: 'Romantic Evening in a Luxury Hotel Room', thumb: '3.jpg', duration: '15:42', views: '2.1M', date: '3 days ago' },
  { title: 'Intimate Massage Techniques for Couples', thumb: '4.1.jpg', duration: '18:56', views: '3.5M', date: '5 days ago' },
];
const allVideos = [
  { title: 'Seductive Blonde Takes A Hot Shower After Workout', thumb: '1.1.jpg', duration: '8:24', views: '1.5M', date: '2 days ago', video: 'videos/1.mp4' },
  { title: 'Amateur Couple Having Fun In Their New Apartment', thumb: '1.2.jpg', duration: '12:05', views: '876K', date: '1 week ago', video: 'videos/2.mp4' },
  { title: 'Hot Asian Beauty Shows Off Perfect Body', thumb: '1.jpg', duration: '15:22', views: '2.3M', date: '3 days ago', video: 'videos/3.mp4' },
  { title: 'Professional Massage Turns Into Something More', thumb: '2.jpg', duration: '20:18', views: '3.1M', date: '5 days ago', video: 'videos/3.mp4' },
  { title: 'Fit Brunette Does Yoga In Revealing Outfit', thumb: '3.jpg', duration: '10:12', views: '1.2M', date: '1 day ago', video: 'videos/4.mp4' },
  { title: 'Two College Roommates Share A Special Evening', thumb: '4.2.jpg', duration: '14:55', views: '1.8M', date: '4 days ago', video: 'videos/5.mp4' },
  { title: 'Beach Babe Gets Oiled Up For Tanning Session', thumb: '5.jpg', duration: '9:33', views: '2.5M', date: '1 week ago', video: 'videos/6.mp4' },
  { title: 'Office Secretary Stays Late For Special Assignment', thumb: '7.jpg', duration: '22:14', views: '3M', date: '3 days ago', video: 'videos/7.mp4' },
];

function App() {
  const [page, setPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videosPerPage = 4;
  const displayedVideos = allVideos.slice((page - 1) * videosPerPage, page * videosPerPage);

  return (
    <div className="bg-dark text-white min-vh-100">
      <Navbar expand="lg" className="navbar-dark bg-black px-4 py-3 shadow">
        <Navbar.Brand className="text-warning fs-3">Val <span className="text-white">Hub</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {["All", "Amateur", "Anal", "Asian", "Big Ass", "Blonde", "Blowjob", "Brunette", "Creampie", "Hentai"].map((cat) => (
              <Nav.Link key={cat} href="#" className="text-light mx-2">{cat}</Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search videos..." className="me-2 bg-dark text-white border-secondary" />
            <Button variant="warning">Search</Button>
          </Form>
          <div className="ms-3">
            <Button variant="outline-light" className="me-2">Log In</Button>
            <Button variant="warning">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Container className="my-5">
      <Carousel fade={false} indicators={false} interval={3000} className="mb-5">
    {featuredVideos.map((video, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/thumbnails/${video.thumb}`}
            alt={video.title}
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <Carousel.Caption>
          <h5>{video.title}</h5>
          <p>{video.views} views • {video.date}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>


        <h3 className="mb-4">Most Viewed</h3>
        <Row>
          {displayedVideos.map((video, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card bg="dark" text="white" className="video-card h-100" onClick={() => setSelectedVideo(video)} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={video.thumb} className="video-thumb" />
                <div className="video-duration">{video.duration}</div>
                <Card.Body>
                
                  <Card.Text>{video.views} views • {video.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination className="justify-content-center">
          {[1, 2, 3, 4].map((num) => (
            <Pagination.Item key={num} active={num === page} onClick={() => setPage(num)}>{num}</Pagination.Item>
          ))}
        </Pagination>
      </Container>
      {selectedVideo && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
    style={{ zIndex: 1050 }}
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="video-modal-container bg-black p-3 rounded shadow-lg position-relative w-100 mx-3"
      onClick={(e) => e.stopPropagation()}
      style={{ maxWidth: '900px' }}
    >
      <button
        className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
        onClick={() => setSelectedVideo(null)}
      ></button>

      <div className="ratio ratio-16x9">
        <video controls autoPlay style={{ borderRadius: '12px', width: '100%', height: '100%' }}>
          <source src={selectedVideo.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h5 className="mt-3 text-light text-center">{selectedVideo.title}</h5>
    </div>
  </div>
)}
  <Footer />

    </div>
  );
}
<script type='text/javascript' src='//hidecatastropheappend.com/42/07/ac/4207ac3bade223313b06aa518a38e717.js'></script>

export default App;
