import React from "react";

const CourseForm = (props) => {
  let { course, trainer, handleChange, handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            placeholder="Enter course name"
            name="course"
            value={course}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Trainer</label>
          <input
            type="text"
            placeholder="Enter trainer name"
            name="trainer"
            value={trainer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default CourseForm;
