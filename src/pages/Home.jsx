import { useState, useContext } from 'react';
import { FormContext } from '../context/FormContext';
import Modal from '../components/Modal';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [department, setDepartment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setFormData } = useContext(FormContext);

  const handleSubmit = (e) => {
      e.preventDefault();
      const newEntry = {
          firstName,
          lastName,
          dateOfBirth,
          startDate,
          street,
          city,
          state,
          zip,
          department
      };
      setFormData(prevData => [...prevData, newEntry]);
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setStartDate('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
      setDepartment('');
      setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hr-home">
        <div className="hr-home__content">
          <div className="hr-home__form-container">
            <h1>Create Employee</h1>

            <form onSubmit={handleSubmit} className="hr-home__form-items">
                <div className="input__double">
                    <div className="hr-home__input-double input__container">
                        <input 
                            type="text" 
                            id="first-name" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="hr-home__input-double input__container">
                        <input 
                            type="text" 
                            id="last-name" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                </div>
                <div className="input__double">
                    <div className="hr-home__input-double input__container">
                        <input 
                            type="date" 
                            id="date-of-birth" 
                            value={dateOfBirth} 
                            onChange={(e) => setDateOfBirth(e.target.value)} 
                        />
                        <label htmlFor="date-of-birth">Date of Birth</label>
                    </div>
                    <div className="hr-home__input-double input__container">
                        <input 
                            type="date" 
                            id="start-date" 
                            value={startDate} 
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                        <label htmlFor="start-date">Start Date</label>
                    </div>
                </div>
                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="input__double">
                        <div className="hr-home__input-double input__container">
                            <input 
                                type="text" 
                                id="street" 
                                value={street} 
                                onChange={(e) => setStreet(e.target.value)} 
                            />
                            <label htmlFor="street">Street</label>
                        </div>
                        <div className="hr-home__input-double input__container">
                            <input 
                                type="text" 
                                id="city" 
                                value={city} 
                                onChange={(e) => setCity(e.target.value)} 
                            />
                            <label htmlFor="city">City</label>
                        </div>
                    </div>
                    <div className="hr-home__input input__container">
                        <select 
                            name="state" 
                            id="state" 
                            value={state} 
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FM">Federated States Of Micronesia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MH">Marshall Islands</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="MP">Northern Mariana Islands</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PW">Palau</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
                        </select>
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="hr-home__input input__container">
                        <input 
                            type="number" 
                            id="zip" 
                            value={zip} 
                            onChange={(e) => setZip(e.target.value)} 
                        />
                        <label htmlFor="zip">Zipcode</label>
                    </div>
                </fieldset>
                <div className="hr-home__input input__container">
                    <select 
                        name="department" 
                        id="department" 
                        value={department} 
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                    <label htmlFor="department">Department</label>
                </div>
                <button type="submit" className="button">Save</button>
            </form>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
    </div>
)}

export default Home;