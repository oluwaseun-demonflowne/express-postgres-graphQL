const pool = require('../db.js')
const resolvers = {
    Query: {
        getAllStudents: async () => {
            try {
              const client = await pool.connect();
              const result = await client.query('SELECT * FROM student');
              const students = result.rows;
              client.release();
              return students;
            } catch (error) {
              console.error(error);
              throw new Error('Failed to fetch students');
            }
          },
      },
      Mutation: {
        async createNewStudent(_,{newStudent: {name,class: studentClass,state,nationality}}){
            try{
                const addStudent = "INSERT INTO student (name, class,state, nationality)  VALUES ($1,$2,$3,$4)";
                pool.query(addStudent,[name,studentClass,state,nationality])
                return addStudent
            } catch(err){
                console.log(err.message)
            }
        }
      }
}

module.exports = resolvers