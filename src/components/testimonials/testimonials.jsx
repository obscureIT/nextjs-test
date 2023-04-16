import Card from "react-bootstrap/Card";

const Testimonial = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Card className="border border-0">
          <Card.Header className="bg-primary text-dark">
            #Testimonial1
          </Card.Header>
          <Card.Body className="p-0">
            <video
              className="testimonial-video"
              src="/assets/videos/testimonial.mp4"
              controls
            />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card className="border border-0">
          <Card.Header className="bg-primary text-dark">
            #Testimonial2
          </Card.Header>
          <Card.Body className="p-0">
            <video
              className="testimonial-video"
              src="/assets/videos/testimonial.mp4"
              controls
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Testimonial;
