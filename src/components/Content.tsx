import React, { useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Jumbotron,
} from 'react-bootstrap';

function Content() {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hotelsData, setHotelsData] = useState(null);

  const fetchHotels = async (
    startDate: string = '2021-06-03',
    endDate: string = '2021-06-05',
    latitude: number = 58.386186,
    longitude: number = -9.952549,
    radius: number = 5_000
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://sandbox.impala.travel/v1/hotels?start=${startDate}&end=${endDate}&latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
        { headers: { 'x-api-key': apiKey } }
      ).then((response) => response.json());
      setHotelsData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleApiKeyChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setApiKey(e.target.value);
  };

  // Declare a new state variable, which we'll call "count"
  return (
    <Jumbotron className="content mt-5">
      <Form>
        <InputGroup className="mt-3 mb-3">
          <FormControl
            placeholder="Search for hotels..."
            aria-label="Search for hotels..."
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => fetchHotels()}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Form.Group>
          <Form.Control
            required
            type="text"
            placeholder="Your API key..."
            onChange={handleApiKeyChange}
          />
        </Form.Group>
      </Form>
    </Jumbotron>
  );
}

export default Content;
