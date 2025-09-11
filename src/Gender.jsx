import React from "react";

const Gender = () => {
    return (
        <form>
            <label>GENDER:</label>
            <select id="gender" name="gender">
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </form>
    );
}

export default Gender;
