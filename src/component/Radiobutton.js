function Radiobutton() {
    return (
      <div>
        <div class="d-flex flex-row justify-content-center pt-2">
          <div class="form-check p-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <strong> Hotel</strong>
            </label>
          </div>
          <div class="form-check p-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <strong>villas and homes</strong>
            </label>
          </div>
          <div class="form-check p-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <strong>Campgrounds</strong>
            </label>
          </div>
        </div>
      </div>
    );
  }
  
  export default Radiobutton;
  