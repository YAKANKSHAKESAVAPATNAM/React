import React from "react";

const Skills = () => {
    return (
        <form>
            <label>SKILLS :</label>
            <input type="checkbox" id="skills" name="skills" />
            <label htmlFor="skills">HTML</label>
            <input type="checkbox" id="css" name="skills" />
            <label htmlFor="css">CSS</label>
            <input type="checkbox" id="javascript" name="skills" />
            <label htmlFor="javascript">JavaScript</label>
        </form>
    );
}
export default Skills;
