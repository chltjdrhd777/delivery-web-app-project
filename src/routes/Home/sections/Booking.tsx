import React from "react";
import { B } from "components/styled";
import { Booking, Form } from "components/styled/Home.styled";

function HomeBooking() {
  return (
    <Booking>
      <B.Container>
        <Form action="">
          <div className="input-group">
            <label htmlFor="destination"> Destination</label>
            <input type="text" id="destination" />
          </div>

          <div className="input-group">
            <label htmlFor="check-in"> Check in</label>
            <input type="date" id="check-in" />
          </div>

          <div className="input-group">
            <label htmlFor="check-out"> Check out</label>
            <input type="date" id="check-out" />
          </div>

          <div className="input-group">
            <label htmlFor="adults">Adults</label>
            <select id="adults">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="children">Children</label>
            <select id="children">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>

          <B.Button className="form-btn btn-purple form-button">
            search
            <span className="dots">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </B.Button>
        </Form>
      </B.Container>
    </Booking>
  );
}

export default HomeBooking;
