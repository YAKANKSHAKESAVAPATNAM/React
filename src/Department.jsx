import React from "react";

const Department = () => {
    return (
        <form>
            <label>DEPARTMENT :</label>
            <select id="department" name="department">
                <option value="" disabled selected>Select your department</option>
                <option value="AIML">AIML</option>
                <option value="computer-science">Computer Science</option>
                <option value="electrical-engineering">Electrical Engineering</option>
                <option value="mechanical-engineering">Mechanical Engineering</option>
            </select>

        </form>
    );
}
export default Department;
