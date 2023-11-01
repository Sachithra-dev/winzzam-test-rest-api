const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel'); // Import your model

// Define your routes within the router
router.post('/studentPayments', async (req, res) => {
    const { custom_1, order_id } = req.body;
    const studentId = custom_1;
    const classId = order_id;
    console.log(req.body);
    try {
      // Find the student by ID
      const student = await Student.findOne({userID:studentId});
      console.log(student);
      // Check if the student exists
      if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
      }
  
      // Add the class ID to the joinedClasses list if it doesn't exist already
      if (!student.joinedClasses.includes(classId)) {
        student.joinedClasses.push(classId);
      } else {
        return res.status(400).json({ success: false, message: 'Class already exists in joinedClasses' });
      }
  
      // Save the updated student document
      await student.save();
  
      return res.status(200).json({ success: true, message: 'Class added to joinedClasses list successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
});

// Define other routes here (e.g., POST, PUT, DELETE) as needed

module.exports = router;