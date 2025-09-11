import react from 'react';
const Form = () => {

const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully");
    }

    return(
        <>
        <h1>STUDENT REGISTRATION FORM</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder='Enter your name' name="name" required />
            <br />
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder='Enter your email' name="email" required />
            <br />
            <br/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" placeholder='Enter your phone number' name="phone" required />
            <br />
            <br/>
            <label htmlFor="rollNumber">Roll Number:</label>
            <input type="text" id="rollNumber" placeholder='Enter your roll number' name="rollNumber" required />
            <br />
            <br/>
            <label htmlFor="Gender">Gender:</label>
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" required />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" required />
            <label htmlFor="other">Other</label>
            <br />
            <br/>

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" placeholder='Enter your age' name="age" required />
            <br />
            <br/>
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" placeholder='Enter your course' name="course" required />
             <br />
            <br/>
            <label htmlFor="department">Department:</label>
            <select id="department" name="department" required>
                <option value="" disabled selected>Select your department</option>
                <option value="computerScience">Computer Science</option>
                <option value="electronics">Electronics</option>
                <option value="mechanical">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="chemical">Chemical</option>
                <option value="biotechnology">Biotechnology</option>
                <option value="informationTechnology">Information Technology</option>
            </select>
            <br />
            <br/>

           
            <label htmlFor="skills">Skills:</label>
            <input type="text" id="skills" placeholder='Enter your skills' name="skills" required />
            <br />
            <br/>
            <button onClick={(e)=>{e.preventDefault(); alert("Form Submitted Successfully")}} type="submit">Submit</button>

        </form>
        </>
    )
}
export default Form;