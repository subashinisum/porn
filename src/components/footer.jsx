import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 border-top border-secondary">
      <Container>
        <Row className="mb-3">
          <Col md={4}>
            <h5 className="text-warning">Val<span className="text-danger">Hub</span></h5>
            <p className="small text-muted">Your ultimate destination for exclusive adult content. Stay entertained and safe.</p>
          </Col>
          <Col md={4}>
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/categories" className="text-light text-decoration-none">Categories</a></li>
              <li><a href="/upload" className="text-light text-decoration-none">Upload</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="text-uppercase mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Instagram</a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <Row className="text-center">
          <Col>
            <small className="text-muted">© {new Date().getFullYear()} ValHub. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
