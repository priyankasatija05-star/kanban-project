const db = require('../db'); 

const createTask = async (taskData) => {
  const { description, status } = taskData;
  const queryText = `
    INSERT INTO tasks (description, status) 
    VALUES ($1, $2) 
    RETURNING *;
  `;
  
  const values = [description, status];

  try {
    const result = await db.query(queryText, values);
    return result.rows[0]; 

  } catch (error) {
    throw error;
  }
};
const getTask = async()=>{
    try {
    // Select all tasks, ordered by newest first
    const queryText = `SELECT * FROM tasks ORDER BY created_at DESC`;
    
    const result = await db.query(queryText);
    
    // Return the array of rows
    return result.rows; 
  } catch (error) {
    throw error;
  }

}
module.exports = {
  createTask,
  getTask
};