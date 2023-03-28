import Card from "react-bootstrap/Card";

function Customcard(props) {
  const { total } = props;
  return (
    <Card style={{ width: "18rem" }} className="mt-5 ">
      <Card.Body>
        <Card.Title className="fw-bold fs-2 pb-3 text-center text-decoration-underline">
          Total
        </Card.Title>
        <Card.Text>
          <p className="fw-bold">Total Amount: ₹{total}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Customcard;